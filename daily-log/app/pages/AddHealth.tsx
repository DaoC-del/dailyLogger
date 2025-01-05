import React from "react";
import { Layout, Card } from "antd";
import LogForm from "@/src/components/LogForm";
import { healthFields } from "@/src/utils/formFields";
import { persistence } from "@/src/utils/persistence";

const { Content } = Layout;

const AddHealth: React.FC = () => {
  const handleFinish = (values: any) => {
    const logData = JSON.stringify(values);
    persistence.append(logData); // 持久化日志
    console.log("日志已记录：", logData);
  };
  return (
    <Layout style={{ padding: "24px" }}>
      <Content>
        <Card title="添加健康记录" bordered={false}>
          <LogForm fields={healthFields} onFinish={handleFinish} />
        </Card>
      </Content>
    </Layout>
  );
};

export default AddHealth;
