// File: /logs/ViewLogs.tsx
import React, { useState, useEffect } from "react";
import { View, Text, FlatList, StyleSheet, Alert } from "react-native";
import * as FileSystem from "expo-file-system";

const LOG_DIR = FileSystem.documentDirectory + "logs/";

const ViewLogs: React.FC = () => {
  const [logs, setLogs] = useState<string[]>([]);

  useEffect(() => {
    const loadLogs = async () => {
      try {
        // 确保日志目录存在
        const dirInfo = await FileSystem.getInfoAsync(LOG_DIR);
        if (!dirInfo.exists) {
          Alert.alert("提示", "没有日志文件。");
          return;
        }

        // 读取日志目录
        const files = await FileSystem.readDirectoryAsync(LOG_DIR);
        setLogs(files);
      } catch (error) {
        console.error("日志加载失败: ", error);
        Alert.alert("错误", "无法加载日志文件。");
      }
    };

    loadLogs();
  }, []);

  const handleViewLog = async (fileName: string) => {
    try {
      const content = await FileSystem.readAsStringAsync(LOG_DIR + fileName);
      Alert.alert(`日志: ${fileName}`, content);
    } catch (error) {
      console.error("读取日志失败: ", error);
      Alert.alert("错误", "无法读取日志内容。");
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>日志列表</Text>
      <FlatList
        data={logs}
        keyExtractor={(item) => item}
        renderItem={({ item }) => (
          <Text style={styles.logItem} onPress={() => handleViewLog(item)}>
            {item}
          </Text>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: "#fff",
  },
  title: {
    fontSize: 24,
    marginBottom: 16,
    fontWeight: "bold",
  },
  logItem: {
    fontSize: 16,
    paddingVertical: 8,
    borderBottomWidth: 1,
    borderBottomColor: "#ddd",
    color: "#007AFF",
  },
});

export default ViewLogs;
