import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import ExpenseForm from "./ExpenseForm";

const mockOnEventAdd = jest.fn();

test("renders an add button by default", () => {
  render(<ExpenseForm onEventAdd={mockOnEventAdd} />);
  const button = screen.getByText(/add new expense/i);
  expect(button).toBeInTheDocument();
});

test("renders the form when the add button is clicked", () => {
  render(<ExpenseForm onEventAdd={mockOnEventAdd} />);
  const button = screen.getByText(/add new expense/i);
  fireEvent.click(button);
  expect(button).not.toBeInTheDocument();

  const titleInput = screen.getByLabelText(/title/i);
  expect(titleInput).toBeInTheDocument();
});

test("dismisses the form when the cancel button is clicked", () => {
  render(<ExpenseForm onEventAdd={mockOnEventAdd} />);
  const addButton = screen.getByText(/add new expense/i);
  fireEvent.click(addButton);

  const cancelButton = screen.getByText(/cancel/i);
  fireEvent.click(cancelButton);

  expect(screen.getByText(/add new expense/i)).toBeInTheDocument();
});

test("triggers the provided callback when submitted", () => {
  render(<ExpenseForm onEventAdd={mockOnEventAdd} />);
  fireEvent.click(screen.getByText(/add new expense/i));

  fireEvent.change(screen.getByLabelText(/title/i), {
    target: { value: "Groceries" },
  });
  fireEvent.change(screen.getByLabelText(/amount/i), {
    target: { value: "27.54" },
  });
  fireEvent.change(screen.getByLabelText(/date/i), {
    target: { value: "2022-01-09" },
  });
  fireEvent.submit(screen.getByTestId("expenseForm"));
  expect(mockOnEventAdd).toHaveBeenCalled();
});
