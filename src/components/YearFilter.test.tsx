import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import YearFilter from "./YearFilter";

const year = new Date().getFullYear();
const mockOnYearChange = jest.fn();

test("renders the select element", () => {
  render(<YearFilter selectedYear={year} onYearChange={mockOnYearChange} />);
  const selectElement: HTMLSelectElement =
    screen.getByLabelText("Filter by year:");
  expect(selectElement).toBeInTheDocument();
  expect(selectElement.value).toEqual(year.toString());
});

test("triggers the callback when the value changes", () => {
  render(<YearFilter selectedYear={year} onYearChange={mockOnYearChange} />);
  const selectElement: HTMLSelectElement =
    screen.getByLabelText("Filter by year:");
  fireEvent.change(selectElement, { target: { value: (year + 1).toString() } });
  expect(mockOnYearChange).toHaveBeenCalled();
});
