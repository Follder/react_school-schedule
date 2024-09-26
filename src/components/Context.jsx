import { createContext, useState } from "react";

const Context = createContext();
const Provider = ({ children }) => {
  const [subject, setSubject] = useState([]);
  const [day, setDay] = useState("");
  const [selectedTeachers, setSelectedTeachers] = useState({});
  const [data, setData] = useState({ subjects: [], teachers: [] });
  const [subjectError, setSubjectError] = useState("");
  const [scheduleError, setScheduleError] = useState("");
  const [scheduleMessage, setScheduleMessage] = useState("");
  const [loader, setLoader] = useState('');

  return (
    <Context.Provider
      value={{
        subject,
        setSubject,
        day,
        setDay,
        selectedTeachers,
        setSelectedTeachers,
        data,
        setData,
        subjectError,
        setSubjectError,
        scheduleError, setScheduleError,
        scheduleMessage, setScheduleMessage,
        loader,
        setLoader
      }}
    >
      {children}
    </Context.Provider>
  );
};

export { Context, Provider };
