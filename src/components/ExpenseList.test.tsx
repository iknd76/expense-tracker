import React from "react";
import { render, screen } from "@testing-library/react";
import ExpenseList from "./ExpenseList";

const expenses = [
  {
    id: "e1",
    title: "Groceries",
    amount: 12.34,
    date: new Date(),
  },
  {
    id: "e2",
    title: "Car service",
    amount: 123.45,
    date: new Date(),
  },
];

test("renders the provided expenses", () => {
  render(<ExpenseList expenses={expenses} />);
  expect(screen.getByText(/Groceries/i)).toBeInTheDocument();
  expect(screen.getByText(/Car service/i)).toBeInTheDocument();
});
