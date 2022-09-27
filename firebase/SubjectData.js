import { useState, useEffect } from "react";
import { getAllExams } from "./firebase";

export const SubjectData = () => {
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

  const biology = allExams.filter((exam) => {
    if (exam[0].title.includes("Biology")) {
      return exam[0];
    }
  });

  const english = allExams.filter((exam) => {
    if (exam[0].title.includes("English")) {
      return exam[0];
    }
  });

  const Math = allExams.filter((exam) => {
    if (exam[0].title.includes("Mathematics")) {
      return exam[0];
    }
  });

  const economics = allExams.filter((exam) => {
    if (exam[0].title.includes("Economics")) {
      return exam[0];
    }
  });

  const commerce = allExams.filter((exam) => {
    if (exam[0].title.includes("Commerce")) {
      return exam[0];
    }
  });

  return [biology, english, economics, commerce, Math, isLoading];
};
