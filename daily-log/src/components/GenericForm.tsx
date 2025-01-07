import React from "react";
import { Layout, Card, Button, message } from "antd";
import LogForm from "@/src/components/LogForm";
import { useRouter } from "expo-router";
import { persistence } from "@/src/utils/persistence";

const { Content } = Layout;

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

  const handleFinish = (values: any) => {
    const logData = JSON.stringify(values);
    persistence.append(logData); // 持久化日志
    message.success("日志已成功记录！");
    setTimeout(() => router.push("/"), 1000); // 跳转到首页
  };

  const handleDownloadLogs = () => {
    const today = new Date().toISOString().slice(0, 10);
    persistence.downloadLogs(today);
    message.info("日志下载中...");
  };

  const handleBackHome = () => {
    router.push("/");
  };

  return (
    <Layout style={{ padding: "24px" }}>
      <Content>
        <Card title={title} bordered={false}>
          <LogForm fields={fields} onFinish={handleFinish} />
          <Button
            type="default"
            style={{ marginTop: "16px" }}
            onClick={handleDownloadLogs}
          >
            下载今日日志
          </Button>
          <Button
            type="default"
            style={{ marginTop: "8px" }}
            onClick={handleBackHome}
          >
            返回首页
          </Button>
        </Card>
      </Content>
    </Layout>
  );
};

export default GenericForm;
