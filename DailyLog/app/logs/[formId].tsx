import React from "react";
import { useRouter, useLocalSearchParams } from "expo-router";
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
  const { formId } = useLocalSearchParams();
  const router = useRouter();

  if (!formId || typeof formId !== "string" || !(formId in formMap)) {
    router.push("/");
    return null;
  }

  const { title, fields } = formMap[formId];

  return <GenericForm title={title} fields={fields} />;
};

export default LogFormPage;
