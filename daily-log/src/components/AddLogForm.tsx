import React, { useState } from "react";
import { Form, Input, Button, Select, DatePicker } from "antd";
import { getUnixTimestamp } from "@/src/utils/timeStamp";
import { LOG_CATEGORIES } from "@/src/types/logCategories";

const { Option } = Select;

const AddLogForm: React.FC = () => {
  const [form] = Form.useForm();
  const [defaultCategory, setDefaultCategory] = useState("DailyLife"); // 默认类别

  const handleFinish = (values: any) => {
    const timestamp = getUnixTimestamp();
    console.log("Form Values:", { ...values, timestamp });
  };

  return (
    <Form form={form} layout="vertical" onFinish={handleFinish}>
      <Form.Item label="时间戳" name="timestamp">
        <Input value={getUnixTimestamp()} disabled />
      </Form.Item>
      <Form.Item
        label="类别"
        name="category"
        initialValue={defaultCategory}
        rules={[{ required: true, message: "请选择日志类别" }]}
      >
        <Select>
          {LOG_CATEGORIES.map((category) => (
            <Option key={category.value} value={category.value}>
              {category.label}
            </Option>
          ))}
        </Select>
      </Form.Item>
      <Form.Item label="描述" name="description">
        <Input.TextArea rows={4} placeholder="请输入日志描述" />
      </Form.Item>
      <Form.Item>
        <Button type="primary" htmlType="submit">
          提交
        </Button>
      </Form.Item>
    </Form>
  );
};

export default AddLogForm;
