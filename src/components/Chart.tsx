import React from "react";
import { Expense } from "../types";

interface Props {
  expenses: Expense[];
}

const Chart: React.FC<Props> = ({ expenses }) => {
  const dataPoints = [
    { label: "Jan", value: 0 },
    { label: "Feb", value: 0 },
    { label: "Mar", value: 0 },
    { label: "Apr", value: 0 },
    { label: "May", value: 0 },
    { label: "Jun", value: 0 },
    { label: "Jul", value: 0 },
    { label: "Aug", value: 0 },
    { label: "Sep", value: 0 },
    { label: "Oct", value: 0 },
    { label: "Nov", value: 0 },
    { label: "Dec", value: 0 },
  ];

  expenses.forEach((expense) => {
    dataPoints[expense.date.getMonth()].value += expense.amount;
  });

  const maxValue = 1.1 * Math.max(...dataPoints.map((point) => point.value));

  return (
    <div className="py-4 border-b">
      <div className="grid grid-cols-12 h-32">
        {dataPoints.map((point) => (
          <Bar key={point.label} maxValue={maxValue} {...point} />
        ))}
      </div>
    </div>
  );
};

interface BarProps {
  label: string;
  value: number;
  maxValue: number;
}

const Bar: React.FC<BarProps> = ({ label, value, maxValue }) => {
  let height = 0;
  if (maxValue > 0) {
    height = (100 * value) / maxValue;
  }

  return (
    <div className="flex flex-col items-center space-y-2">
      <div className="flex-1 relative w-3 bg-indigo-200 rounded-full overflow-hidden">
        <div
          className="absolute bottom-0 left-0 right-0 transition-all bg-indigo-500 border-t border-white"
          style={{ height: `${height}%` }}
        ></div>
      </div>
      <div className="flex-shrink-0 text-sm font-medium">{label}</div>
    </div>
  );
};

export default Chart;
