import { useContext, useEffect } from "react";
import { Context } from "../components/Context";

export const useSelectedTeachers = () => {
  const { data, setSelectedTeachers } = useContext(Context);

  useEffect(() => {
    const initialSelectedTeachers = {};

    data.subjects.forEach((subject) => {
      const teacherEntry = data.subjectTeacher?.find(
        (teacher) => teacher.subjectId === subject.id
      );

      initialSelectedTeachers[subject.id] = teacherEntry
        ? teacherEntry.teacherId
        : null;
    });

    setSelectedTeachers(initialSelectedTeachers);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data]);
};
