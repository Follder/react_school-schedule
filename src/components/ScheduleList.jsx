import { ScheduleItem } from "./ScheduleItem";

export const ScheduleList = ({
  data,
  selectedTeachers,
  handleTeachersChange,
}) => (
  <ul>
    <div className="text-base text-gray-800 grid grid-cols-3 text-sm font-bold">
      <div className="px-3 py-3 sticky left-0 bg-white">Day of week:</div>
      <div className="px-3 py-3">Subject:</div>
      <div className="px-3 py-3">Teacher:</div>
    </div>

    {data.subjects.map((item) => (
      <ScheduleItem
        item={item}
        selectedTeachers={selectedTeachers}
        handleTeachersChange={handleTeachersChange}
        data={data}
        key={item.id}
      />
    ))}
  </ul>
);
