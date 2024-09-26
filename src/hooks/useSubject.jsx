import { useContext, useEffect } from "react";
import { Context } from "../components/Context";

export const useSubject = () => {
  const { subject, setSubject, day, setDay, subjectError, setSubjectError } =
    useContext(Context);

  const handleSubjectSubmit = (postSubjectData) => (e) => {
    e.preventDefault();
    postSubjectData();
  };

  const reserSubjectErrors = () => {
    if (subjectError && (subject !== "" || day !== "")) {
      setSubjectError("");
    }
  };

  useEffect(() => {
    if (subjectError) {
      const timer = setTimeout(() => {
        setSubjectError("");
      }, 3000);

      return () => clearTimeout(timer);
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [subjectError]);

  return {
    subject,
    setSubject,
    day,
    setDay,
    subjectError,
    handleSubjectSubmit,
    reserSubjectErrors,
  };
};
