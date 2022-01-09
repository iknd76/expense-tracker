import React from "react";

interface Props {
  id: string;
  title: string;
  amount: number;
  date: Date;
}

const ExpenseItem: React.FC<Props> = ({ title, amount, date }) => {
  const formattedAmount = Intl.NumberFormat("en", {
    style: "currency",
    currency: "EUR",
  }).format(amount);
  const formattedDate = Intl.DateTimeFormat("en", {
    month: "short",
    day: "numeric",
    year: "numeric",
  }).format(date);

  return (
    <div className="flex items-center py-3 font-medium">
      <div className="mr-3">
        <h2>{title}</h2>
        <p className="text-xs font-normal text-neutral-700">{formattedDate}</p>
      </div>
      <div className="ml-auto tabular-nums">{formattedAmount}</div>
    </div>
  );
};

export default ExpenseItem;
