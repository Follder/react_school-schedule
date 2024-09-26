import { useContext } from "react";
import { ScheduleItem } from "./ScheduleItem";
import { Context } from "./Context";

export const ScheduleList = ({ handleTeachersChange }) => {
  const { data } = useContext(Context);
  return (
    <ul className="overflow-x-scroll md:overflow-x-hidden ">
      <div className="min-w-[450px]">
        <div className="text-base text-gray-800 grid grid-cols-3 text-sm font-bold gap-5">
          <div className="px-3 py-3">Day of week:</div>
          <div className="px-3 py-3">Subject:</div>
          <div className="px-3 py-3">Teacher:</div>
        </div>

        {data.subjects.map((item) => (
          <ScheduleItem
            item={item}
            handleTeachersChange={handleTeachersChange}
            key={item.id}
          />
        ))}
      </div>
    </ul>
  );
};
