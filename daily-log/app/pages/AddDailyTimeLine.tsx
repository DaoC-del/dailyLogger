import React from "react";
import GenericForm from "@/src/components/GenericForm";
import { dailyTimelineFields } from "@/src/utils/formFields";

const AddDailyTimeline: React.FC = () => {
  return <GenericForm title="添加日常流水" fields={dailyTimelineFields} />;
};

export default AddDailyTimeline;
