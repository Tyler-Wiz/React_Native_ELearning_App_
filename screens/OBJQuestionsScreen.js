import { useState, useEffect } from "react";
import { RenderObjectives } from "../components/quiz/RenderObjectives";
import { getQuestions } from "../firebase/firebase";

export const OBJQuestionScreen = ({ route }) => {
  const [question, setQuestion] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const itemId = route.params.itemId;
  const time = route.params.timeId;

  const getEachQuestions = async () => {
    setIsLoading(true);
    const questions = await getQuestions(itemId);
    let preExams = [];
    questions.forEach((exam) => {
      preExams.push({ id: exam.id, ...exam.data() });
    });
    setQuestion([...preExams].sort(() => 0.5 - Math.random()));
    setIsLoading(false);
  };
  useEffect(() => {
    getEachQuestions();
  }, []);

  return <RenderObjectives data={question} isLoading={isLoading} time={time} />;
};
