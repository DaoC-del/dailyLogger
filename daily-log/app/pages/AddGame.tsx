import React from "react";
import { Layout, Card } from "antd";
import LogForm from "@/src/components/LogForm";
import { gameFields } from "@/src/utils/formFields";
import { persistence } from "@/src/utils/persistence";

const { Content } = Layout;

const AddGame: React.FC = () => {
  const handleFinish = (values: any) => {
    const logData = JSON.stringify(values);
    persistence.append(logData); // 持久化日志
    console.log("日志已记录：", logData);
  };

  return (
    <Layout style={{ padding: "24px" }}>
      <Content>
        <Card title="添加游戏记录" bordered={false}>
          <LogForm fields={gameFields} onFinish={handleFinish} />
        </Card>
      </Content>
    </Layout>
  );
};

export default AddGame;
