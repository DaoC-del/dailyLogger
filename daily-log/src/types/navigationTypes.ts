export type RootStackParamList = {
  Home: undefined; // 首页没有参数
  AddLog: undefined; // 添加日志页面没有参数
  LogDetail: { logId: string }; // 日志详情页面需要参数
};
