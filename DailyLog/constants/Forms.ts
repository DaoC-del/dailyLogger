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
    name: "timeRange",
    label: "时间段",
    type: "text" as FieldType,
    required: true,
  },
  {
    name: "game",
    label: "游戏名称",
    type: "text" as FieldType,
    required: true,
  },
  { name: "action", label: "操作", type: "text" as FieldType, required: true },
  { name: "note", label: "备注", type: "text" as FieldType },
];
