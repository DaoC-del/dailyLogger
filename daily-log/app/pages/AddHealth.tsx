import React from "react";
import GenericForm from "@/src/components/GenericForm";
import { healthFields } from "@/src/utils/formFields";

const AddHealth: React.FC = () => {
  return <GenericForm title="添加游戏记录" fields={healthFields} />;
};

export default AddHealth;
