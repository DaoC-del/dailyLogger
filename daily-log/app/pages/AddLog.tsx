import React from "react";
import { Layout, Card } from "antd";
import AddLogForm from "@/src/components/AddLogForm";

const { Content } = Layout;

const AddLog: React.FC = () => {
  return (
    <Layout style={{ padding: "24px" }}>
      <Content>
        <Card title="添加日志" bordered={false}>
          <AddLogForm />
        </Card>
      </Content>
    </Layout>
  );
};

export default AddLog;
