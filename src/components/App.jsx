import React, { useEffect, useContext } from "react";
import { AddSubject } from "./AddSubject";
import { Schedule } from "./Schedule";
import { Context } from "./Context";
import { useSubject } from "../hooks/useSubject";
import { useSchedule } from "../hooks/useSchedule";
import { useApi } from "../hooks/useApi";
import { useSelectedTeachers } from "../hooks/useSelectedTeachers";

function App() {
  const {
    subject,
    day,
    subjectError,
    handleSubjectSubmit,
    reserSubjectErrors,
  } = useSubject();
  const { handleTeachersChange, handleScheduleSubmit } = useSchedule();
  const { postSubjectData, postTeacherSubjectData, getData } = useApi();
  const { data } = useContext(Context);

  useSelectedTeachers();

  useEffect(() => {
    getData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    reserSubjectErrors();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [subject, day]);

  return (
    <div>
      <div className="bg-gradient-to-tr from-purple-300 from-10% via-rose-100 via-70% to-purple-200 to-90% h-[350px] absolute top-0 left-0 right-0"></div>
      <div className="container mx-auto px-5 w-full sm:px-0 sm:w-3/4 h-full relative py-10">
        <h1 className="text-4xl sm:text-5xl  text-slate-500 font-bold pt-10">
          Schedule list
        </h1>

        <div className="mt-10">
          {data.subjects.length !== 0 && (
            <Schedule
              handleScheduleSubmit={handleScheduleSubmit(
                postTeacherSubjectData
              )}
              handleTeachersChange={handleTeachersChange}
            />
          )}
        </div>

        <AddSubject
          handleSubjectSubmit={handleSubjectSubmit(postSubjectData)}
        />
        {!!subjectError && (
          <div className="mt-3 text-red-500">{subjectError}</div>
        )}
      </div>
    </div>
  );
}

export default App;
