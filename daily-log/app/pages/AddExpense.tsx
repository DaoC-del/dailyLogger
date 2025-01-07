import React from "react";
import GenericForm from "@/src/components/GenericForm";
import { expenseFields } from "@/src/utils/formFields";

const AddExpense: React.FC = () => {
  return <GenericForm title="添加消费记录" fields={expenseFields} />;
};

export default AddExpense;
