import fs from "fs";
import path from "path";

/**
 * 获取指定时区的当前日期 (YYYY-MM-DD)
 * @param timezone 时区 (如 "Asia/Tokyo")
 */
const getDateByTimezone = (timezone: string): string => {
  const now = new Date();
  const utcOffset = now.getTimezoneOffset() * 60000; // UTC 偏移
  const localTime = new Date(now.getTime() + utcOffset); // 本地时间
  const timezoneOffset =
    new Date(
      localTime.toLocaleString("en-US", { timeZone: timezone })
    ).getTime() - localTime.getTime();
  const targetTime = new Date(now.getTime() + timezoneOffset);

  const year = targetTime.getFullYear();
  const month = String(targetTime.getMonth() + 1).padStart(2, "0");
  const day = String(targetTime.getDate()).padStart(2, "0");
  return `${year}-${month}-${day}`;
};

/**
 * 持久化工具类 (基于文件系统)
 */
class FileSystemPersistence {
  private directory: string;

  constructor(directory: string = "./logs") {
    this.directory = directory;
    if (!fs.existsSync(directory)) {
      fs.mkdirSync(directory, { recursive: true });
    }
  }

  private getLogFilePath(date: string): string {
    return path.join(this.directory, `${date}.txt`);
  }

  public append(data: string, timezone: string = "Asia/Tokyo"): void {
    const date = getDateByTimezone(timezone);
    const filePath = this.getLogFilePath(date);
    const timestamp = new Date().toISOString();
    const content = `[${timestamp}] ${data}\n`;
    fs.appendFileSync(filePath, content, { encoding: "utf-8" });
  }

  public read(date: string, timezone: string = "Asia/Tokyo"): string {
    const filePath = this.getLogFilePath(date);
    if (fs.existsSync(filePath)) {
      return fs.readFileSync(filePath, { encoding: "utf-8" });
    }
    return "";
  }
}

/**
 * 持久化工具类 (基于 localStorage)
 */
class BrowserPersistence {
  private storageKeyPrefix: string;

  constructor(storageKeyPrefix: string = "logs_") {
    this.storageKeyPrefix = storageKeyPrefix;
  }

  private getStorageKey(date: string): string {
    return `${this.storageKeyPrefix}${date}`;
  }

  public append(data: string, timezone: string = "Asia/Tokyo"): void {
    const date = getDateByTimezone(timezone);
    const storageKey = this.getStorageKey(date);

    const existingLogs = localStorage.getItem(storageKey) || "";
    const timestamp = new Date().toISOString();
    const newLog = `[${timestamp}] ${data}`;

    localStorage.setItem(storageKey, existingLogs + newLog + "\n");
  }

  public read(date: string, timezone: string = "Asia/Tokyo"): string {
    const storageKey = this.getStorageKey(date);
    return localStorage.getItem(storageKey) || "";
  }
}

/**
 * 动态持久化工具选择
 */
const isBrowser = typeof window !== "undefined";

export const persistence = isBrowser
  ? new BrowserPersistence()
  : new FileSystemPersistence();
