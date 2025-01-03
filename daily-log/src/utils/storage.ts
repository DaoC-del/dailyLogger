import AsyncStorage from "@react-native-async-storage/async-storage";
import { LogEntry } from "../types/logTypes";

const LOGS_KEY = "logs";

export const saveLogs = async (logs: LogEntry[]): Promise<void> => {
  const jsonValue = JSON.stringify(logs);
  await AsyncStorage.setItem(LOGS_KEY, jsonValue);
};

export const loadLogs = async (): Promise<LogEntry[]> => {
  const jsonValue = await AsyncStorage.getItem(LOGS_KEY);
  return jsonValue ? JSON.parse(jsonValue) : [];
};
