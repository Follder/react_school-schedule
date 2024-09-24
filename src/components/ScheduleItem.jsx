import { DAYS_OF_WEEK } from "../constants/daysOfWeek";
import { convertDayData } from "../utils/convertDayData";

export const ScheduleItem = ({
  item,
  selectedTeachers,
  handleTeachersChange,
  data,
}) => (
  <li
    key={item.id}
    className="border-t text-base text-gray-400 grid grid-cols-3"
  >
    <div className="px-3 py-3 text-gray-800 text-balance sticky left-0 bg-white">
      {convertDayData(DAYS_OF_WEEK, item.day)}
    </div>
    <div className="px-3 py-3 text-gray-800 text-balance sticky left-0 bg-white">
      {item.subject}
    </div>
    <div className="relative">
      <select
        className="px-3 py-3 w-full text-gray-800 text-balance sticky left-0 bg-white cursor-pointer appearance-none focus:outline-none focus:ring-2 focus:ring-slave-500 focus:border-slave-500 rounded"
        value={selectedTeachers[item.id] || ""}
        onChange={(e) => handleTeachersChange(item.id, e.target.value)}
      >
        <option value="">Not assigned</option>
        {data.teachers.map((item) => {
          return (
            <option value={item.id} key={item.id}>
              {item.name}
            </option>
          );
        })}
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
  </li>
);
