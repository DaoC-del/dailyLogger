import React from "react";
import {
  useRouter,
  useLocalSearchParams,
  RelativePathString,
} from "expo-router";
import GenericForm from "@/components/GenericTemplate";
import {
  dailyTimelineFields,
  travelFields,
  expenseFields,
  healthFields,
  gameFields,
} from "@/constants/Forms";

const formMap: Record<string, { title: string; fields: any[] }> = {
  dailyTimeline: { title: "每日时间线", fields: dailyTimelineFields },
  travel: { title: "出行记录", fields: travelFields },
  expense: { title: "消费记录", fields: expenseFields },
  health: { title: "健康记录", fields: healthFields },
  game: { title: "游戏记录", fields: gameFields },
};

const LogFormPage: React.FC = () => {
  const { formId } = useLocalSearchParams(); // 使用 useLocalSearchParams
  const router = useRouter();

  // 确保 formId 有效
  if (!formId || typeof formId !== "string" || !(formId in formMap)) {
    router.push("/"); // 表单 ID 无效时跳转首页
    return null;
  }

  const { title, fields } = formMap[formId];

  return <GenericForm title={title} fields={fields} />;
};

export default LogFormPage;
