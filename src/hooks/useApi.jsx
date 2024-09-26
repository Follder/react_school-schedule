import { useContext } from "react";
import { Context } from "../components/Context";

export const useApi = () => {
  const {
    setData,
    setSubjectError,
    setScheduleError,
    setScheduleMessage,
    setDay,
    setSubject,
    subject,
    day,
    selectedTeachers,
  } = useContext(Context);

  const API_ROOT = `${
    window.location.hostname === "localhost" ? "http://localhost/soloway" : ""
  }/api`;

  const GET_URL = `${API_ROOT}/get-data.php`;
  const POST_SUBJECT_URL = `${API_ROOT}/post-subject-data.php`;
  const POST_SUBJECT_TEACHER_URL = `${API_ROOT}/post-subject-teacher-data.php`;

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
          throw new Error(data.message);
        }

        setDay("");
        setSubject("");
        getData();
      })
      .catch((error) => setSubjectError(error.message));
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
          throw new Error(data.message);
        }

        getData();
        setScheduleMessage(data.message);
      })
      .catch((error) => setScheduleError(error.message));
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

  return { postSubjectData, postTeacherSubjectData, getData };
};
