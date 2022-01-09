import React, { ChangeEvent } from "react";

interface Props {
  selectedYear: number;
  onChange(e: ChangeEvent): void;
}

const YearFilter: React.FC<Props> = ({ selectedYear, onChange }) => {
  const years = [];
  const currentYear = new Date().getFullYear();
  for (let i = currentYear - 4; i < currentYear + 5; i++) {
    years.push(i);
  }

  return (
    <div className="py-2 flex items-center justify-end border-b">
      <label htmlFor="yearFilter" className="mr-3 text-sm">
        Filter by year:
      </label>
      <select
        id="yearFilter"
        value={selectedYear}
        onChange={onChange}
        className="py-1 pl-3 md:text-sm border-neutral-300 rounded-md"
      >
        {years.map((year) => (
          <option key={year} value={year}>
            {year}
          </option>
        ))}
      </select>
    </div>
  );
};

export default YearFilter;
