import React from "react";
import { Layout, Card, Button, message } from "antd";
import LogForm from "@/components/LogForm";
import { useRouter } from "expo-router";
import { persistence } from "@/utils/persistence";

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

  const handleFinish = async (values: any) => {
    try {
      const logData = JSON.stringify({
        ...values,
        timestamp: new Date().toISOString(),
      });
      await persistence.append(logData); // 保存日志
      message.success("日志已成功记录！");
      setTimeout(() => router.push("/"), 1000); // 跳转到首页
    } catch (error) {
      message.error("日志保存失败！");
      console.error(error);
    }
  };

  const handleDownloadLogs = async () => {
    const today = new Date().toISOString().slice(0, 10);
    try {
      await persistence.downloadLogs(today);
      message.info("日志下载成功！");
    } catch (error) {
      message.error("日志下载失败！");
      console.error(error);
    }
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
