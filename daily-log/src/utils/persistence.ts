import fs from "fs";
import path from "path";

/**
 * 获取指定时区的当前日期 (YYYY-MM-DD)
 * @param timezone 时区 (如 "America/New_York")
 */
const getDateByTimezone = (timezone: string): string => {
  const now = new Date();
  const utcOffset = now.getTimezoneOffset() * 60000; // UTC 偏移
  const localTime = new Date(now.getTime() + utcOffset); // 本地时间
  const timezoneOffset = new Date(
    localTime.toLocaleString("en-US", { timeZone: timezone })
  ).getTime() - localTime.getTime();
  const targetTime = new Date(now.getTime() + timezoneOffset);

  const year = targetTime.getFullYear();
  const month = String(targetTime.getMonth() + 1).padStart(2, "0");
  const day = String(targetTime.getDate()).padStart(2, "0");
  return `${year}-${month}-${day}`;
};

/**
 * 持久化工具类
 */
class Persistence {
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

  public append(data: string, timezone: string = "America/New_York"): void {
    const date = getDateByTimezone(timezone);
    const filePath = this.getLogFilePath(date);
    const timestamp = new Date().toISOString();
    const content = `[${timestamp}] ${data}\n`;
    fs.appendFileSync(filePath, content, { encoding: "utf-8" });
  }

  public read(date: string): string {
    const filePath = this.getLogFilePath(date);
    if (fs.existsSync(filePath)) {
      return fs.readFileSync(filePath, { encoding: "utf-8" });
    }
    return "";
  }
}

export const persistence = new Persistence();
