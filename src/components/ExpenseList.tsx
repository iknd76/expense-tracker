import React from "react";
import { Expense } from "../types";
import ExpenseItem from "./ExpenseItem";

interface Props {
  expenses: Expense[];
}

const ExpenseList: React.FC<Props> = ({ expenses }) => {
  return (
    <div className="divide-y divide-neutral-200 border-b">
      {expenses.map((expense) => (
        <ExpenseItem key={expense.id} expense={expense} />
      ))}
    </div>
  );
};

export default ExpenseList;
