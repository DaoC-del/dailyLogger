import React from "react";
import GenericForm from "@/src/components/GenericForm";
import { gameFields } from "@/src/utils/formFields";

const AddGame: React.FC = () => {
  return <GenericForm title="添加游戏记录" fields={gameFields} />;
};

export default AddGame;
