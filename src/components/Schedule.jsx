import { useContext } from "react";
import { ScheduleList } from "./ScheduleList";
import { Context } from "./Context";

export const Schedule = ({
  handleScheduleSubmit,
  handleTeachersChange,
}) => {
  const { scheduleError, scheduleMessage } = useContext(Context);
  return (
    <form className="w-full" onSubmit={handleScheduleSubmit}>
      <h2 className="text-l sm:text-xl font-bold text-slate-500">
        Add teacher for your subjects:
      </h2>
      <div className="px-6 py-4 bg-white rounded-md mt-3 flex flex-col gap-3 shadow-xl">
        <ScheduleList handleTeachersChange={handleTeachersChange} />
        <div className="h-[24px]">
          {!!scheduleError && (
            <div className="text-red-500 text-center">{scheduleError}</div>
          )}
          {!!scheduleMessage && (
            <div className="text-green-500 text-center">{scheduleMessage}</div>
          )}
        </div>
        <button
          type="submit"
          className="px-5 py-1 rounded-md border border-slate-500 text-slate-500 hover:bg-slate-100 transition-all w-full sm:w-1/2 md:w-1/3 self-center"
        >
          Submit schedule
        </button>
      </div>
    </form>
  );
};
