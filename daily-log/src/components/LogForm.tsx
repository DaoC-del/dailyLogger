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
  }[];
  onFinish: (values: any) => void;
}

const LogForm: React.FC<LogFormProps> = ({ fields, onFinish }) => {
  const [form] = Form.useForm();

  return (
    <Form form={form} layout="vertical" onFinish={onFinish}>
      {fields.map((field) => (
        <Form.Item
          key={field.name}
          label={field.label}
          name={field.name}
          rules={[
            { required: field.required, message: `${field.label} 是必填项` },
          ]}
        >
          {field.type === "text" && <Input />}
          {field.type === "number" && <Input type="number" />}
          {field.type === "select" && (
            <Select>
              {field.options?.map((option) => (
                <Option key={option.value} value={option.value}>
                  {option.label}
                </Option>
              ))}
            </Select>
          )}
          {field.type === "date" && <DatePicker />}
        </Form.Item>
      ))}
      <Form.Item>
        <Button type="primary" htmlType="submit">
          提交
        </Button>
      </Form.Item>
    </Form>
  );
};

export default LogForm;
