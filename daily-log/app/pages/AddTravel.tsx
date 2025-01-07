import React from "react";
import GenericForm from "@/src/components/GenericForm";
import { travelFields } from "@/src/utils/formFields";

const AddTravel: React.FC = () => {
  return <GenericForm title="添加游戏记录" fields={travelFields} />;
};

export default AddTravel;
