import { useState, useEffect } from "react";
import { getJamb } from "./firebase";

export const JambData = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [jambExams, setJambExams] = useState([]);

  const getData = async () => {
    setIsLoading(true);
    const exams = await getJamb();
    let preExams = [];
    exams.forEach((exam) => {
      preExams.push({ id: exam.id, ...exam.data() });
    });
    setJambExams([...preExams]);
    setIsLoading(false);
  };

  useEffect(() => {
    getData();
  }, []);

  return [jambExams, isLoading];
};
