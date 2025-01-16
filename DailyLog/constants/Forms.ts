export type FieldType = "number" | "text" | "select" | "date";

export const baseFields = {
  date: {
    name: "date",
    label: "日期",
    type: "date" as FieldType,
    required: true,
  },
};

export const dailyTimelineFields = [
  baseFields.date,
  {
    name: "timeRange",
    label: "时间段",
    type: "text" as FieldType,
    required: true,
  },
  {
    name: "description",
    label: "事件描述",
    type: "text" as FieldType,
    required: true,
  },
  {
    name: "tag",
    label: "分类标签",
    type: "select" as FieldType,
    options: [
      { label: "出行", value: "travel" },
      { label: "消费", value: "expense" },
      { label: "用药", value: "health" },
      { label: "游戏", value: "game" },
    ],
    required: true,
  },
];

export const travelFields = [
  baseFields.date,
  {
    name: "timeRange",
    label: "时间段",
    type: "text" as FieldType,
    required: true,
  },
  {
    name: "transportMode",
    label: "交通方式",
    type: "text" as FieldType,
    required: true,
  },
  {
    name: "departure",
    label: "出发地点",
    type: "text" as FieldType,
    required: true,
  },
  {
    name: "destination",
    label: "目的地",
    type: "text" as FieldType,
    required: true,
  },
  { name: "price", label: "费用", type: "number" as FieldType, required: true },
  { name: "note", label: "备注", type: "text" as FieldType },
];

export const expenseFields = [
  baseFields.date,
  { name: "time", label: "时间", type: "text" as FieldType },
  {
    name: "item",
    label: "消费项目",
    type: "text" as FieldType,
    required: true,
  },
  {
    name: "amount",
    label: "金额",
    type: "number" as FieldType,
    required: true,
  },
  {
    name: "paymentMethod",
    label: "支付方式",
    type: "select" as FieldType,
    options: [
      { label: "现金", value: "cash" },
      { label: "支付宝", value: "alipay" },
      { label: "微信", value: "wechat" },
      { label: "银行卡", value: "card" },
    ],
    required: true,
  },
  { name: "receipt", label: "是否有收据", type: "text" as FieldType },
  { name: "note", label: "备注", type: "text" as FieldType },
];

export const healthFields = [
  baseFields.date,
  { name: "time", label: "时间", type: "text" as FieldType, required: true },
  {
    name: "name",
    label: "药品名称",
    type: "text" as FieldType,
    required: true,
  },
  { name: "dosage", label: "用量", type: "text" as FieldType, required: true },
  { name: "note", label: "备注", type: "text" as FieldType },
];

export const gameFields = [
  baseFields.date,
  {
    name: "endTime",
    label: "结束时间",
    type: "text",
    required: true,
  },
  {
    name: "game",
    label: "游戏名称",
    type: "select",
    required: true,
    options: [
      { label: "王者荣耀", value: "king_of_glory" },
      { label: "英雄联盟", value: "league_of_legends" },
      { label: "绝地求生", value: "pubg" },
      { label: "原神", value: "genshin_impact" },
    ],
  },
  // {
  //   name: "playContent",
  //   label: "游玩内容",
  //   type: "array",
  //   required: true,
  // },
  { name: "note", label: "备注", type: "text" as FieldType },
];

export const validateFields = (fields: any[]) => {
  const errors: string[] = [];

  fields.forEach((field, index) => {
    if (!field.name) {
      errors.push(`Field at index ${index} is missing 'name'`);
    }
    if (!field.label) {
      errors.push(`Field at index ${index} is missing 'label'`);
    }
    if (!field.type) {
      errors.push(`Field at index ${index} is missing 'type'`);
    }
    if (field.type === "select" && !field.options) {
      errors.push(
        `Field '${field.name}' is missing 'options' for type 'select'`
      );
    }
  });

  return errors;
};

// 示例用法
const errors = validateFields(dailyTimelineFields);
if (errors.length > 0) {
  console.error("Field validation errors:", errors);
}
