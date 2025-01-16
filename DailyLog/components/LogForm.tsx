import React, { useState } from "react";
import { View, StyleSheet, Text, FlatList } from "react-native";
import {
  Button,
  InputItem,
  Picker,
  DatePicker,
  List,
} from "@ant-design/react-native";

type FieldType = "number" | "text" | "select" | "date" | "array";

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
  const formData: Record<string, any> = {}; // 存储表单数据

  const handleSubmit = () => {
    onFinish(formData); // 提交表单数据
  };

  return (
    <View style={styles.container}>
      {/* 表单内容 */}
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
                      data={field.options || []} // 从字段选项加载游戏列表
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
                    <InputItem
                      key={field.name}
                      defaultValue={new Date().toISOString()} // 系统时间默认值
                      editable={false} // 不允许用户修改
                      extra="自动生成时间戳"
                    >
                      <Text>{field.label}</Text>
                    </InputItem>
                  );
                case "array":
                  return (
                    <View key={field.name} style={styles.arrayContainer}>
                      <FlatList
                        data={formData[field.name] || []} // 数组数据
                        renderItem={({ item, index }) => (
                          <View style={styles.item}>
                            <Text style={styles.itemText}>
                              {`游玩内容 ${index + 1}: ${item}`}
                            </Text>
                          </View>
                        )}
                        keyExtractor={(item, index) => `${field.name}-${index}`}
                        ListEmptyComponent={
                          <Text style={styles.emptyText}>暂无内容</Text>
                        }
                      />
                      <Button
                        type="ghost"
                        style={styles.addButton}
                        onPress={() => {
                          const newItem = `游玩内容 ${
                            (formData[field.name]?.length || 0) + 1
                          }`;
                          formData[field.name] = [
                            ...(formData[field.name] || []),
                            newItem,
                          ];
                        }}
                      >
                        添加内容
                      </Button>
                    </View>
                  );
                default:
                  return null;
              }
            })
            .filter((item) => item !== null)}
        </List>
      </View>

      {/* 提交按钮 */}
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
    flex: 1, // 全屏布局
    flexDirection: "column",
    justifyContent: "space-between", // 按钮固定在底部
    padding: 16,
  },
  formContainer: {
    flex: 1, // 占用剩余空间
    justifyContent: "flex-start",
  },
  buttonContainer: {
    alignSelf: "stretch", // 全宽按钮
    marginTop: 16, // 与表单的间距
  },
  arrayContainer: {
    marginVertical: 16,
  },
  item: {
    padding: 12,
    backgroundColor: "#f0f0f0",
    borderRadius: 6,
    marginBottom: 8,
  },
  itemText: {
    fontSize: 16,
    color: "#333",
  },
  emptyText: {
    textAlign: "center",
    color: "#888",
    marginVertical: 16,
  },
  addButton: {
    marginTop: 8,
  },
});

export default LogForm;
