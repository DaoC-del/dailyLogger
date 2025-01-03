import React from "react";
import { View, Text, StyleSheet } from "react-native";

const LogDetail: React.FC = ({ route }: any) => {
  const { log } = route.params;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Category: {log.category}</Text>
      <Text style={styles.content}>Content: {log.content}</Text>
      <Text style={styles.timestamp}>
        Timestamp: {new Date(log.timestamp).toLocaleString()}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16 },
  title: { fontSize: 20, fontWeight: "bold", marginBottom: 8 },
  content: { fontSize: 16, marginBottom: 8 },
  timestamp: { fontSize: 14, color: "#888" },
});

export default LogDetail;
