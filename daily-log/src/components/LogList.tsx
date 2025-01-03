import React, { useContext } from "react";
import { FlatList, Text, View, StyleSheet } from "react-native";
import { LogContext } from "../context/LogContext";

const LogList: React.FC = () => {
  const logContext = useContext(LogContext);
  if (!logContext) return <Text>Loading...</Text>;

  const { logs } = logContext;

  return (
    <FlatList
      data={logs}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => (
        <View style={styles.item}>
          <Text style={styles.title}>{item.category}</Text>
          <Text style={styles.timestamp}>
            {new Date(item.timestamp).toLocaleString()}
          </Text>
        </View>
      )}
    />
  );
};

const styles = StyleSheet.create({
  item: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
  },
  title: {
    fontSize: 16,
    fontWeight: "bold",
  },
  timestamp: {
    fontSize: 12,
    color: "#888",
  },
});

export default LogList;
