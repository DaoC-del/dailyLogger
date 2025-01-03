// src/utils/dateUtils.ts

// 获取当前时间的 Unix 时间戳 (秒)
export const getUnixTimestamp = (): number => {
    return Math.floor(Date.now() / 1000);
  };
  
  // 将 Unix 时间戳转换为人类可读格式
  export const formatTimestamp = (timestamp: number): string => {
    const date = new Date(timestamp * 1000); // 转换为毫秒
    return date.toISOString(); // 格式化为 ISO 时间字符串
  };
  