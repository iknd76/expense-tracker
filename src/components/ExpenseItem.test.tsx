import React from "react";
import { render, screen } from "@testing-library/react";
import ExpenseItem from "./ExpenseItem";

const expense = {
  id: "e1",
  title: "Groceries",
  amount: 12.34,
  date: new Date(2022, 0, 9),
};

test("renders the provided expense", () => {
  render(<ExpenseItem expense={expense} />);
  expect(screen.getByText(/Groceries/i)).toBeInTheDocument();
});

test("renders the formatted amount", () => {
  render(<ExpenseItem expense={expense} />);
  expect(screen.getByText("€12.34")).toBeInTheDocument();
});

test("renders the formatted date", () => {
  render(<ExpenseItem expense={expense} />);
  expect(screen.getByText("Jan 9, 2022")).toBeInTheDocument();
});
