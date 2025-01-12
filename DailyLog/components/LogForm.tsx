import React from "react";
import { View, StyleSheet, Text } from "react-native";
import {
  Button,
  InputItem,
  Picker,
  DatePicker,
  List,
} from "@ant-design/react-native";

type FieldType = "number" | "text" | "select" | "date";

interface LogFormProps {
  fields: {
    name: string;
    label: string;
    type: FieldType;
    options?: { label: string; value: any }[];
    required?: boolean;
  }[];
  onFinish: (values: Record<string, any>) => void;
}

const LogForm: React.FC<LogFormProps> = ({ fields, onFinish }) => {
  const formData: Record<string, any> = {}; // Store form data

  const handleSubmit = () => {
    onFinish(formData); // Submit form
  };

  return (
    <View style={styles.container}>
      {/* Form Content */}
      <View style={styles.formContainer}>
        <List>
          {fields
            .map((field) => {
              switch (field.type) {
                case "text":
                  return (
                    <InputItem
                      key={field.name}
                      clear
                      placeholder={`请输入${field.label}`}
                      onChange={(value) => (formData[field.name] = value)}
                    >
                      <Text>{field.label}</Text>
                    </InputItem>
                  );
                case "number":
                  return (
                    <InputItem
                      key={field.name}
                      type="number"
                      clear
                      placeholder={`请输入${field.label}`}
                      onChange={(value) => (formData[field.name] = value)}
                    >
                      <Text>{field.label}</Text>
                    </InputItem>
                  );
                case "select":
                  return (
                    <Picker
                      key={field.name}
                      data={field.options || []}
                      cols={1}
                      onChange={(value) => (formData[field.name] = value[0])}
                    >
                      <List.Item arrow="horizontal">
                        <Text>{field.label}</Text>
                      </List.Item>
                    </Picker>
                  );
                case "date":
                  return (
                    <DatePicker
                      key={field.name}
                      mode="date"
                      onChange={(date) => (formData[field.name] = date)}
                    >
                      <List.Item arrow="horizontal">
                        <Text>{field.label}</Text>
                      </List.Item>
                    </DatePicker>
                  );
                default:
                  return null;
              }
            })
            .filter((item) => item !== null)}
        </List>
      </View>

      {/* Submit Button */}
      <View style={styles.buttonContainer}>
        <Button type="primary" onPress={handleSubmit}>
          提交
        </Button>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1, // Full-screen layout
    flexDirection: "column",
    justifyContent: "space-between", // Push button to the bottom
    padding: 16,
  },
  formContainer: {
    flex: 1, // Expand to fill remaining space
    justifyContent: "flex-start",
  },
  buttonContainer: {
    alignSelf: "stretch", // Ensure full-width button
    marginTop: 16, // Add spacing from the form
  },
});

export default LogForm;
