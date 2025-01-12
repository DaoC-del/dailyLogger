import React from "react";
import { Form, Input, Button, Select, DatePicker } from "antd";

const { Option } = Select;

type FieldType = "number" | "text" | "select" | "date";

interface LogFormProps {
  fields: {
    name: string;
    label: string;
    type: FieldType;
    options?: { label: string; value: any }[];
    required?: boolean;
    rules?: any[]; // 动态校验规则
  }[];
  onFinish: (values: any) => void;
}

const LogForm: React.FC<LogFormProps> = ({ fields, onFinish }) => {
  const [form] = Form.useForm();

  // 动态渲染表单字段
  const renderField = (field: LogFormProps["fields"][0]) => {
    switch (field.type) {
      case "text":
        return <Input />;
      case "number":
        return <Input type="number" />;
      case "select":
        return (
          <Select>
            {field.options?.map((option) => (
              <Option key={option.value} value={option.value}>
                {option.label}
              </Option>
            ))}
          </Select>
        );
      case "date":
        return <DatePicker style={{ width: "100%" }} />;
      default:
        return null;
    }
  };

  return (
    <Form form={form} layout="vertical" onFinish={onFinish}>
      {fields.map((field) => (
        <Form.Item
          key={field.name}
          label={field.label}
          name={field.name}
          rules={[
            { required: field.required, message: `${field.label} 是必填项` },
            ...(field.rules || []), // 动态扩展校验规则
          ]}
        >
          {renderField(field)}
        </Form.Item>
      ))}
      <Form.Item>
        <Button type="primary" htmlType="submit" style={{ marginRight: "8px" }}>
          提交
        </Button>
        <Button htmlType="button" onClick={() => form.resetFields()}>
          重置
        </Button>
      </Form.Item>
    </Form>
  );
};

export default LogForm;
