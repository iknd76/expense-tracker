import React from "react";
import { Expense } from "../types";

type Props = {
  expense: Expense;
};

const ExpenseItem: React.FC<Props> = ({ expense }) => {
  const formattedAmount = Intl.NumberFormat("en", {
    style: "currency",
    currency: "EUR",
  }).format(expense.amount);
  const formattedDate = Intl.DateTimeFormat("en", {
    month: "short",
    day: "numeric",
    year: "numeric",
  }).format(expense.date);

  return (
    <div className="flex items-center py-3 font-medium">
      <div className="mr-3">
        <h2>{expense.title}</h2>
        <p className="text-xs font-normal text-neutral-700">{formattedDate}</p>
      </div>
      <div className="ml-auto tabular-nums">{formattedAmount}</div>
    </div>
  );
};

export default ExpenseItem;
