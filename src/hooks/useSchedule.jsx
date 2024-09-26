/* eslint-disable react-hooks/exhaustive-deps */
import { useContext, useEffect } from "react";
import { Context } from "../components/Context";

export const useSchedule = () => {
  const {
    selectedTeachers,
    setSelectedTeachers,
    scheduleError,
    setScheduleError,
    scheduleMessage,
    setScheduleMessage,
  } = useContext(Context);

  const handleTeachersChange = (subjectId, teacherId) => {
    setSelectedTeachers((prev) => ({
      ...prev,
      [subjectId]: teacherId,
    }));
  };

  const handleScheduleSubmit = (postTeacherSubjectData) => (e) => {
    e.preventDefault();
    postTeacherSubjectData();
  };

  useEffect(() => {
    if (scheduleError || scheduleMessage) {
      const timer = setTimeout(() => {
        setScheduleError("");
        setScheduleMessage("");
      }, 3000);

      return () => clearTimeout(timer);
    }
  }, [scheduleError, scheduleMessage]);

  return {
    selectedTeachers,
    scheduleError,
    scheduleMessage,
    handleTeachersChange,
    handleScheduleSubmit,
  };
};
