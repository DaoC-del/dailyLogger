import * as FileSystem from "expo-file-system";

const LOG_DIR = FileSystem.documentDirectory + "logs/";

export const persistence = {
  async append(data: string) {
    try {
      // 检查并创建日志目录
      const dirInfo = await FileSystem.getInfoAsync(LOG_DIR);
      if (!dirInfo.exists) {
        await FileSystem.makeDirectoryAsync(LOG_DIR, { intermediates: true });
      }

      // 格式化时间戳为文件名
      const timestamp = new Date().toISOString().replace(/:/g, "-");
      const fileName = `${LOG_DIR}${timestamp}.json`;

      // 写入文件
      await FileSystem.writeAsStringAsync(fileName, data, {
        encoding: FileSystem.EncodingType.UTF8,
      });

      console.log(`日志已成功写入: ${fileName}`);
    } catch (error) {
      console.error("日志保存失败: ", error);
      throw new Error(`日志保存失败: ${error.message}`);
    }
  },

  async downloadLogs(date: string) {
    try {
      const files = await FileSystem.readDirectoryAsync(LOG_DIR);

      // 筛选指定日期的日志文件
      const logs = files.filter((file) => file.includes(date));
      if (logs.length === 0) {
        console.warn("未找到任何日志文件");
        return;
      }

      // 读取文件内容
      const content = await Promise.all(
        logs.map((file) => FileSystem.readAsStringAsync(LOG_DIR + file))
      );

      // 创建 Blob 对象
      const blob = new Blob(content, { type: "application/json" });
      const url = URL.createObjectURL(blob);

      // 触发下载
      const a = document.createElement("a");
      a.href = url;
      a.download = `${date}-logs.json`;
      a.click();
      URL.revokeObjectURL(url);
    } catch (error) {
      console.error("日志下载失败: ", error);
    }
  },
};
