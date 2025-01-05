import React, { useEffect, useState } from "react";
import { Layout, Card, List, DatePicker, Button, message } from "antd";
import { persistence } from "@/src/utils/persistence";

const { Content } = Layout;

const ViewLogs: React.FC = () => {
  const [logs, setLogs] = useState<string[]>([]);
  const [selectedDate, setSelectedDate] = useState<string>(
    new Date().toISOString().slice(0, 10)
  );

  const fetchLogs = async (date: string) => {
    try {
      const logContent = persistence.read(date);
      const logLines = logContent
        .split("\n")
        .filter((line) => line.trim() !== "");
      setLogs(logLines);
    } catch (error) {
      message.error("无法加载日志");
    }
  };

  useEffect(() => {
    fetchLogs(selectedDate);
  }, [selectedDate]);

  const handleDateChange = (
    date: Date | null,
    dateString: string | string[]
  ) => {
    if (date && typeof dateString === "string") {
      setSelectedDate(dateString);
    } else {
      console.warn("日期选择类型不匹配", dateString);
    }
  };

  return (
    <Layout style={{ padding: "24px" }}>
      <Content>
        <Card title="查看日志" bordered={false}>
          <div style={{ marginBottom: "16px" }}>
            <DatePicker onChange={handleDateChange} allowClear={false} />
            <Button
              type="primary"
              style={{ marginLeft: "8px" }}
              onClick={() => fetchLogs(selectedDate)}
            >
              刷新
            </Button>
          </div>
          <List
            bordered
            dataSource={logs}
            renderItem={(item) => <List.Item>{item}</List.Item>}
            locale={{ emptyText: "暂无日志" }}
          />
        </Card>
      </Content>
    </Layout>
  );
};

export default ViewLogs;
