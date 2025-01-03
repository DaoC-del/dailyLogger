import React, { useContext } from "react";
import { FlatList, Text, View, Button, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import { RootStackParamList } from "../../src/types/navigationTypes";
import { LogContext } from "../../src/context/LogContext";

type HomeScreenNavigationProp = StackNavigationProp<RootStackParamList, "Home">;

const Home: React.FC = () => {
  const navigation = useNavigation<HomeScreenNavigationProp>();
  const logContext = useContext(LogContext);

  if (!logContext || !logContext.isLoaded) {
    return (
      <View style={styles.loader}>
        <Text>Loading logs...</Text>
      </View>
    );
  }

  const { logs } = logContext;

  return (
    <View style={styles.container}>
      <Button
        title="Add New Log"
        onPress={() => navigation.navigate("AddLog")}
      />
      <FlatList
        data={logs}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.item}>
            <Text>{item.category}</Text>
            <Text>{new Date(item.timestamp).toLocaleString()}</Text>
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16 },
  item: { padding: 10, borderBottomWidth: 1, borderBottomColor: "#ccc" },
  loader: { flex: 1, justifyContent: "center", alignItems: "center" },
});

export default Home;
