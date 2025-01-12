import React from "react";
import { Layout, Menu } from "antd";
import { useRouter,RelativePathString } from "expo-router";


const { Header, Content } = Layout;

const HomePage: React.FC = () => {
  const router = useRouter();

  const menuItems = [
    {
      key: "dailyTimeline",
      label: "每日时间线",
      onClick: () => {
        const path = "/logs/dailyTimeline";
        router.push(path as RelativePathString);
      },
    },
    {
      key: "travel",
      label: "出行记录",
      onClick: () => {
        const path = "/logs/travel";
        router.push(path as RelativePathString);
      },
    },
    {
      key: "expense",
      label: "消费记录",
      onClick: () => {
        const path = "/logs/expense";
        router.push(path as RelativePathString);
      },
    },
    {
      key: "health",
      label: "健康记录",
      onClick: () => {
        const path= "/logs/health";
        router.push(path as RelativePathString);
      },
    },
    {
      key: "game",
      label: "游戏记录",
      onClick: () => {
        const path = "/logs/game";
        router.push(path as RelativePathString);
      },
    },
  ];

  return (
    <Layout>
      <Header>
        <Menu theme="dark" mode="horizontal" items={menuItems} />
      </Header>
      <Content style={{ padding: "24px" }}>
        <h1>日志应用</h1>
        <p>请选择一个表单进行操作。</p>
      </Content>
    </Layout>
  );
};

export default HomePage;
