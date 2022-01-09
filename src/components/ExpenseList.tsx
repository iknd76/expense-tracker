import React from "react";
import ExpenseItem from "./ExpenseItem";

type Expense = {
  id: string;
  title: string;
  amount: number;
  date: Date;
};

interface Props {
  expenses: Expense[];
}

const ExpenseList: React.FC<Props> = ({ expenses }) => {
  return (
    <div className="divide-y divide-neutral-200 border-b">
      {expenses.map((expense) => (
        <ExpenseItem key={expense.id} {...expense} />
      ))}
    </div>
  );
};

export default ExpenseList;
