import React from "react";
import { Layout, Card, Button, Space } from "antd";
import { useRouter } from "expo-router";

const { Content } = Layout;

const Home: React.FC = () => {
  const router = useRouter();

  return (
    <Layout style={{ padding: "24px" }}>
      <Content>
        <Card title="日志管理首页" bordered={false}>
          <Space direction="vertical" size="middle">
            <Button
              type="primary"
              onClick={() => router.push("/pages/AddDailyTimeLine")}
            >
              添加日常流水
            </Button>
            <Button
              type="primary"
              onClick={() => router.push("/pages/AddExpense")}
            >
              添加消费记录
            </Button>
            <Button
              type="primary"
              onClick={() => router.push("/pages/AddTravel")}
            >
              添加出行记录
            </Button>
            <Button
              type="primary"
              onClick={() => router.push("/pages/AddHealth")}
            >
              添加健康记录
            </Button>
            <Button
              type="primary"
              onClick={() => router.push("/pages/AddGame")}
            >
              添加游戏记录
            </Button>
            <Button
              type="default"
              onClick={() => router.push("/pages/ViewLogs")}
            >
              查看汇总日志
            </Button>
          </Space>
        </Card>
      </Content>
    </Layout>
  );
};

export default Home;
