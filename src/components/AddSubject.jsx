import { useContext } from "react";
import { DAYS_OF_WEEK } from "../constants/daysOfWeek";
import { Context } from "./Context";

export const AddSubject = ({ handleSubjectSubmit }) => {
  const {subject, day, setSubject, setDay } = useContext(Context)
  return (
    <div className="bg-slate-300 p-6 rounded-md shadow-xl w-full mt-10">
      <h2 className="text-l sm:text-xl font-bold text-slate-500">Add new subject:</h2>
      <form
        className="grid sm:grid-cols-2 md:grid-cols-3 gap-5 mt-3"
        onSubmit={handleSubjectSubmit}
      >
        <input
          type="text"
          placeholder="Enter subject"
          value={subject}
          onChange={(e) => setSubject(e.target.value)}
          className="px-5 py-3 rounded-md focus:ring-2 focus:outline-none focus:ring-slave-500 focus:border-slave-500 shadow"
          required
        />
        <div className="relative flex">
          <select
            name="day"
            value={day}
            required
            onChange={(e) => setDay(e.target.value)}
            className="px-5 py-3 rounded-md appearance-none w-full focus:outline-none focus:ring-2 focus:ring-slave-500 focus:border-slave-500 shadow cursor-pointer"
          >
            <option value="" disabled>
              Choose day of week:
            </option>
            {DAYS_OF_WEEK.map((item) => (
              <option value={item.dayId} key={item.dayId}>
                {item.dayName}
              </option>
            ))}
          </select>
          <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
            <svg
              className="w-4 h-4 text-gray-600"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M19 9l-7 7-7-7"
              ></path>
            </svg>
          </div>
        </div>
        <button
          type="submit"
          className="px-5 py-3 rounded-md bg-slate-500 text-white hover:bg-slate-400 transition-all sm:col-span-2 md:col-span-1"
        >
          Submit subject
        </button>
      </form>
    </div>
  );
};
