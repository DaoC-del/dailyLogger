import React from "react";
import { View, Text } from "react-native";
import { List } from "@ant-design/react-native";
import { RelativePathString, useRouter } from "expo-router";

const HomePage: React.FC = () => {
  const router = useRouter();

  const menuItems = [
    {
      key: "dailyTimeline",
      label: "每日时间线",
      path: "/logs/dailyTimeline" as RelativePathString,
    },
    {
      key: "travel",
      label: "出行记录",
      path: "/logs/travel" as RelativePathString,
    },
    {
      key: "expense",
      label: "消费记录",
      path: "/logs/expense" as RelativePathString,
    },
    {
      key: "health",
      label: "健康记录",
      path: "/logs/health" as RelativePathString,
    },
    {
      key: "game",
      label: "游戏记录",
      path: "/logs/game" as RelativePathString,
    },
    {
      key: "viewLogs",
      label: "查看日志",
      path: "/logs/ViewLogs" as RelativePathString, // 新增路径
    },
  ];

  return (
    <View style={{ flex: 1, padding: 16 }}>
      <Text style={{ fontSize: 24, marginBottom: 16 }}>日志应用</Text>
      <List>
        {menuItems.map((item) => (
          <List.Item
            key={item.key}
            arrow="horizontal"
            onPress={() => router.push(item.path)}
          >
            {item.label}
          </List.Item>
        ))}
      </List>
    </View>
  );
};

export default HomePage;
