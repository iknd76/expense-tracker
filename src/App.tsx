import React, { ChangeEvent, useState } from "react";
import { Expense } from "./types";
import Chart from "./components/Chart";
import ExpenseForm from "./components/ExpenseForm";
import ExpenseList from "./components/ExpenseList";
import YearFilter from "./components/YearFilter";
import data from "./utils/data.json";

const initialExpenses: Expense[] = data.map((item) => {
  return {
    ...item,
    date: new Date(item.date),
  };
});

function App() {
  const [expenses, setExpenses] = useState(initialExpenses);
  const [year, setYear] = useState(new Date().getFullYear());

  const onYearChange = (event: ChangeEvent<HTMLSelectElement>) => {
    setYear(+event.target.value);
  };

  const onEventAdd = (expense: Expense) => {
    setExpenses((currentExpenses) => [...currentExpenses, expense]);
  };

  const filteredExpenses = expenses
    .filter((a) => a.date.getFullYear() === year)
    .sort((a, b) => +a.date - +b.date);

  return (
    <div className="w-full max-w-2xl mx-auto p-8">
      <div className="py-4 border-b">
        <h1 className="text-4xl font-bold tracking-tight">
          Expense Tracker <span className="text-neutral-500">{year}</span>
        </h1>
      </div>
      <ExpenseForm onEventAdd={onEventAdd} />
      <YearFilter selectedYear={year} onYearChange={onYearChange} />
      <Chart expenses={filteredExpenses} />
      <ExpenseList expenses={filteredExpenses} />
    </div>
  );
}

export default App;
