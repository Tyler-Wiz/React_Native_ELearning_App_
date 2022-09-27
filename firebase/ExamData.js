import { useState, useEffect } from "react";
import { getAllExams } from "./firebase";

export const ExamData = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [allExams, setAllExams] = useState([]);

  const getData = async () => {
    setIsLoading(true);
    const exams = await getAllExams();
    let preExams = [];
    exams.forEach((exam) => {
      preExams.push({ id: exam.id, ...exam.data() });
    });
    setAllExams([...preExams]);
    setIsLoading(false);
  };

  useEffect(() => {
    getData();
  }, []);

  return [allExams, isLoading];
};
