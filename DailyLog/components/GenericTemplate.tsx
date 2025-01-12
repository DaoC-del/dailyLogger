import React from "react";
import { View, StyleSheet } from "react-native";
import { Card, Button } from "@ant-design/react-native";
import LogForm from "@/components/LogForm";
import { useRouter } from "expo-router";
import { persistence } from "@/utils/persistence";

interface GenericFormProps {
  title: string;
  fields: {
    name: string;
    label: string;
    type: "number" | "text" | "select" | "date";
    options?: { label: string; value: any }[];
    required?: boolean;
  }[];
}

const GenericForm: React.FC<GenericFormProps> = ({ title, fields }) => {
  const router = useRouter();

  const handleFinish = async (values: Record<string, any>) => {
    try {
      const logData = JSON.stringify({
        ...values,
        timestamp: new Date().toISOString(),
      });
      await persistence.append(logData); // Save log
      console.log("日志已成功记录！");
      router.push("/");
    } catch (error) {
      console.error("日志保存失败：", error);
    }
  };

  return (
    <View style={styles.container}>
      <Card style={styles.card}>
        <Card.Header title={title} />
        <Card.Body>
          <View style={styles.cardBody}>
            <LogForm fields={fields} onFinish={handleFinish} />
          </View>
        </Card.Body>
      </Card>
      <View style={styles.buttonContainer}>
        <Button onPress={() => router.push("/")}>返回首页</Button>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    justifyContent: "space-between",
  },
  card: {
    flex: 1, // Ensure the card expands to fill the container
    marginBottom: 16, // Add spacing below the card
  },
  cardBody: {
    flex: 1, // Ensure the card body stretches to accommodate LogForm
  },
  buttonContainer: {
    alignSelf: "center", // Center-align the button horizontally
    width: "100%", // Ensure full-width button if required
  },
});

export default GenericForm;
