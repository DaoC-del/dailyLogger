import * as FileSystem from "expo-file-system";

const LOG_DIR = FileSystem.documentDirectory + "logs/";

export const persistence = {
  async append(data: string) {
    const timestamp = new Date().toISOString().replace(/:/g, "-");
    const fileName = `${LOG_DIR}${timestamp}.json`;
    await FileSystem.writeAsStringAsync(fileName, data, {
      encoding: FileSystem.EncodingType.UTF8,
    });
  },

  async downloadLogs(date: string) {
    const files = await FileSystem.readDirectoryAsync(LOG_DIR);
    const logs = files.filter((file) => file.includes(date));
    const content = await Promise.all(
      logs.map((file) => FileSystem.readAsStringAsync(LOG_DIR + file))
    );
    const blob = new Blob(content, { type: "application/json" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `${date}-logs.json`;
    a.click();
    URL.revokeObjectURL(url);
  },
};
