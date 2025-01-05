// 通用日志基础类型
export type LogEntry = {
  id: string; // 唯一标识符
  timestamp: Date; // 时间戳
  category: LogCategory; // 动态类别支持
  tags?: string[]; // 标签
};

// 日志类别定义
export type LogCategory =
  | "DailyTimeline" // 日常流水表
  | "Travel" // 出行表
  | "Expense" // 消费表
  | "Health" // 用药/健康表
  | "Game"; // 游戏表

// 日常流水表日志
export type DailyTimelineLog = LogEntry & {
  date: Date; // 日期
  timeRange: string; // 时间段 (HH:MM 或 HH:MM ~ HH:MM)
  description: string; // 事件描述 (如“起床”、“吃饭”)
  tag: string; // 分类标签 (如“出行”、“消费”)
};

// 出行日志
export type TravelLog = LogEntry & {
  date: Date; // 日期
  timeRange: string; // 时间段 (出发 ~ 到达)
  transportMode: string; // 交通方式 (如“打车”、“地铁”)
  departure: string; // 出发地点
  destination: string; // 目的地
  price: number; // 费用
  note?: string; // 备注 (如是否有票据)
};

// 消费/财务日志
export type ExpenseLog = LogEntry & {
  date: Date; // 日期
  time?: string; // 时间 (可选)
  item: string; // 消费项目或事件 (如“午饭”、“打车”)
  amount: number; // 金额 (正值支出，负值退款或收入)
  paymentMethod: string; // 支付方式 (如“现金”、“支付宝”)
  receipt?: boolean; // 是否有收据
  note?: string; // 备注
};

// 用药/健康日志
export type HealthLog = LogEntry & {
  date: Date; // 日期
  time: string; // 时间
  name: string; // 药品名称或健康事项 (如“快克感冒药”)
  dosage: string; // 用量或次数
  note?: string; // 备注 (如身体状态)
};

// 游戏日志
export type GameLog = LogEntry & {
  date: Date; // 日期
  timeRange: string; // 时间段或时间点
  game: string; // 游戏名称 (如“崩坏三”、“LOL”)
  action: string; // 操作 (如“清每日”、“极地大乱斗”)
  note?: string; // 备注 (如完成度)
};

// 通用日志联合类型
export type UnifiedLog =
  | DailyTimelineLog
  | TravelLog
  | ExpenseLog
  | HealthLog
  | GameLog;
