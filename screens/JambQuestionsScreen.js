import { useState, useEffect } from "react";
import { RenderObjectives } from "../components/quiz/RenderObjectives";
import { getJambQuestions } from "../firebase/firebase";

export const JambQuestionsScreen = ({ route }) => {
  const [question, setQuestion] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const itemId = route.params.itemId;
  const time = route.params.timeId;

  const getEachQuestions = async () => {
    setIsLoading(true);
    const questions = await getJambQuestions(itemId);
    let preExams = [];
    questions.forEach((exam) => {
      preExams.push({ id: exam.id, ...exam.data() });
    });
    setQuestion([...preExams]);
    setIsLoading(false);
  };

  useEffect(() => {
    getEachQuestions();
  }, []);

  return <RenderObjectives data={question} isLoading={isLoading} time={time} />;
};
