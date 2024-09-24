import React, { useState, useEffect } from "react";
import { AddSubject } from "./AddSubject";
import { Schedule } from "./Schedule";

function App() {
  const [subject, setSubject] = useState([]);
  const [day, setDay] = useState("");
  const [selectedTeachers, setSelectedTeachers] = useState({});
  const [data, setData] = useState({ subjects: [], teachers: [] });
  const [subjectError, setSubjectError] = useState("");
  const [scheduleError, setScheduleError] = useState("");

  const GET_URL = "http://localhost/soloway/api/get-data.php";
  const POST_SUBJECT_URL = "http://localhost/soloway/api/post-subject-data.php";
  const POST_SUBJECT_TEACHER_URL =
    "http://localhost/soloway/api/post-subject-teacher-data.php";

  const postSubjectData = () => {
    const formData = new FormData();

    formData.append("subject", subject);
    formData.append("day", day);

    fetch(POST_SUBJECT_URL, {
      method: "POST",
      body: formData,
      headers: {
        Accept: "application/json",
      },
    })
      .then((result) => result.json())
      .then((data) => {
        if (data.status === "error") {
          setSubjectError(data.message);
        }

        setDay("");
        setSubject("");
        getData();
      })
      .catch((error) => console.log(error));
  };

  const postTeacherSubjectData = () => {
    const formData = new FormData();
    Object.entries(selectedTeachers).forEach(([subjectId, teacherId]) => {
      formData.append("subjectId[]", subjectId);
      formData.append("teacherId[]", teacherId ? teacherId : "");
    });

    fetch(POST_SUBJECT_TEACHER_URL, {
      method: "POST",
      body: formData,
      headers: {
        Accept: "application/json",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.status === "error") {
          setScheduleError(data.message);
        }
      })
      .catch((error) => console.log(error));
  };

  const getData = () => {
    fetch(GET_URL)
      .then((res) => {
        if (!res.ok) {
          throw new Error("Network response was not ok");
        }

        return res.json();
      })
      .then((data) => setData(data))
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    getData();
  }, []);

  useEffect(() => {
    const initialSelectedTeachers = {};

    data.subjects.forEach((subject) => {
      initialSelectedTeachers[subject.id] = null;
    });

    setSelectedTeachers(initialSelectedTeachers);
  }, [data]);

  const handleTeachersChange = (subjectId, teacherId) => {
    setSelectedTeachers((prev) => ({
      ...prev,
      [subjectId]: teacherId,
    }));
  };

  const handleSubjectSubmit = (e) => {
    e.preventDefault();
    postSubjectData();
  };

  const handleScheduleSubmit = (e) => {
    e.preventDefault();
    postTeacherSubjectData();
  };

  console.log(data);

  return (
    <div>
      <div className="bg-gradient-to-tr from-purple-300 from-10% via-rose-100 via-70% to-purple-200 to-90% h-[350px] absolute top-0 left-0 right-0"></div>
      <div className="container mx-auto w-3/4 h-full relative py-10">
        <h1 className="text-5xl  text-slate-500 font-bold pt-10">
          Schedule list
        </h1>

        <div className="mt-10">
          {data.subjects.length !== 0 && (
            <Schedule
              handleScheduleSubmit={handleScheduleSubmit}
              data={data}
              selectedTeachers={selectedTeachers}
              handleTeachersChange={handleTeachersChange}
              scheduleError={scheduleError}
            />
          )}
        </div>

        <AddSubject
          handleAddSubject={handleSubjectSubmit}
          subject={subject}
          setSubject={setSubject}
          day={day}
          setDay={setDay}
        />
        {!!subjectError && (
          <div className="mt-3 text-red-500">{subjectError}</div>
        )}
      </div>
    </div>
  );
}

export default App;
