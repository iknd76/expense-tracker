import React, { ChangeEvent, FormEvent, useState } from "react";
import { Expense } from "../types";

type Props = {
  onEventAdd(e: Expense): void;
};

const ExpenseForm: React.FC<Props> = ({ onEventAdd }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState(0.0);
  const [date, setDate] = useState(new Date());

  const handleTitleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setTitle(event.target.value);
  };

  const handleAmountChange = (event: ChangeEvent<HTMLInputElement>) => {
    setAmount(+event.target.value);
  };

  const handleDateChange = (event: ChangeEvent<HTMLInputElement>) => {
    setDate(new Date(event.target.value));
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    onEventAdd({
      id: Math.random().toString(36),
      title: title,
      amount: amount,
      date: date,
    });

    resetForm();
  };

  const resetForm = () => {
    setTitle("");
    setAmount(0.0);
    setDate(new Date());
  };

  const showForm = () => {
    setIsEditing(true);
  };

  const hideForm = () => {
    setIsEditing(false);
    resetForm();
  };

  if (!isEditing) {
    return (
      <div className="py-4 border-b">
        <button
          onClick={showForm}
          className="w-full inline-flex items-center justify-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        >
          Add new expense
        </button>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="grid grid-cols-2 gap-4 py-4 border-b"
      data-testid="expenseForm"
    >
      <div className="col-span-2">
        <label className="block mb-1 text-sm font-medium" htmlFor="title">
          Title
        </label>
        <input
          type="text"
          id="title"
          className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
          value={title}
          onChange={handleTitleChange}
        />
      </div>

      <div>
        <label className="block mb-1 text-sm font-medium" htmlFor="amount">
          Amount
        </label>
        <input
          type="number"
          id="amount"
          className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
          min="0"
          step="0.01"
          value={amount}
          onChange={handleAmountChange}
        />
      </div>

      <div>
        <label className="block mb-1 text-sm font-medium" htmlFor="date">
          Date
        </label>
        <input
          type="date"
          id="date"
          className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
          min="2018-01-01"
          max="2022-12-31"
          value={date.toISOString().split("T")[0]}
          onChange={handleDateChange}
        />
      </div>

      <div className="flex items-center space-x-4">
        <button
          type="submit"
          className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        >
          Add expense
        </button>

        <button
          className="inline-flex items-center px-4 py-2 text-sm font-medium"
          onClick={hideForm}
        >
          Cancel
        </button>
      </div>
    </form>
  );
};

export default ExpenseForm;
