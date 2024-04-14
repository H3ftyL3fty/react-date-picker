import {
  ChevronLeftIcon,
  ChevronRightIcon,
} from "@heroicons/react/20/solid";
import { useState } from "react";

type Month =
  | "January"
  | "February"
  | "March"
  | "April"
  | "May"
  | "June"
  | "July"
  | "August"
  | "September"
  | "October"
  | "November"
  | "December";

const MONTHS: Month[] = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

type DateYear = {
  month: number;
  year: number;
};

export const Picker = (): JSX.Element => {
  const today = new Date();
  const [dateYear, setDateYear] = useState<DateYear>({
    month: today.getMonth(),
    year: today.getFullYear(),
  });

  const decreaseMonth = () => setDateYear((prevState) => {
    if (prevState.month === 0) {
      return {
        month: 11,
        year: prevState.year - 1,
      };
    } else {
      return {
        month: prevState.month - 1,
        year: prevState.year,
      };
    }
  });

  const increaseMonth = () => setDateYear((prevState) => {
    if (prevState.month === 11) {
      return {
        month: 0,
        year: prevState.year + 1,
      };
    } else {
      return {
        month: prevState.month + 1,
        year: prevState.year,
      };
    }
  });

  return (
    <div className="flex items-center text-center text-gray-900">
      <button
        onClick={decreaseMonth}
        type="button"
        className="-m-1.5 flex flex-none items-center justify-center p-1.5 text-gray-400 hover:text-gray-500"
      >
        <span className="sr-only">Previous month</span>
        <ChevronLeftIcon className="h-5 w-5" aria-hidden="true" />
      </button>
      <div className="flex-auto text-sm font-semibold">
        {`${MONTHS[dateYear.month]} ${dateYear.year}`}
      </div>
      <button
        onClick={increaseMonth}
        type="button"
        className="-m-1.5 flex flex-none items-center justify-center p-1.5 text-gray-400 hover:text-gray-500"
      >
        <span className="sr-only">Next month</span>
        <ChevronRightIcon className="h-5 w-5" aria-hidden="true" />
      </button>
    </div>
  );
};
