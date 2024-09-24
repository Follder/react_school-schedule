import { ScheduleList } from "./ScheduleList";

export const Schedule = ({
  handleScheduleSubmit,
  data,
  selectedTeachers,
  handleTeachersChange,
  scheduleError,
}) => {
  return (
    <form className="w-full" onSubmit={handleScheduleSubmit}>
      <h2 className="text-xl font-bold text-slate-500">
        Add teacher for your subjects:
      </h2>
      <div className="px-6 py-4 bg-white rounded-md mt-3 flex flex-col gap-3 shadow-xl">
        <ScheduleList data={data} selectedTeachers={selectedTeachers} handleTeachersChange={handleTeachersChange} />
        {!!scheduleError && (
          <div className="mt-3 text-red-500">{scheduleError}</div>
        )}
        <button
          type="submit"
          className="px-5 py-1 rounded-md border border-slate-500 text-slate-500 hover:bg-slate-100 transition-all w-1/3 self-center"
        >
          Submit schedule
        </button>
      </div>
    </form>
  );
};
