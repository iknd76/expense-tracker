import React, { ChangeEvent, useState } from "react";
import { Expense } from "./types";
import ExpenseForm from "./components/ExpenseForm";
import ExpenseList from "./components/ExpenseList";
import YearFilter from "./components/YearFilter";

const initialExpenses: Expense[] = [
  {
    id: "e1",
    title: "Udemy subscription",
    amount: 29.99,
    date: new Date(2022, 0, 1),
  },
  {
    id: "e2",
    title: "Starbucks coffee",
    amount: 13.27,
    date: new Date(2022, 0, 2),
  },
  {
    id: "e3",
    title: "Car service",
    amount: 239.87,
    date: new Date(2021, 11, 23),
  },
];

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
        <h1 className="text-4xl font-bold tracking-tight">Expense Tracker</h1>
      </div>
      <ExpenseForm onEventAdd={onEventAdd} />
      <YearFilter selectedYear={year} onYearChange={onYearChange} />
      <ExpenseList expenses={filteredExpenses} />
    </div>
  );
}

export default App;
