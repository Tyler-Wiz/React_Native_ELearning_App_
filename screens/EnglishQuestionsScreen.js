import { useState, useEffect } from "react";
import { RenderEnglishObjectives } from "../components/English/RenderEnglishObjectives";
import { getQuestions } from "../firebase/firebase";

export const EnglishQuestionsScreen = ({ route }) => {
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
    setQuestion([...preExams]);
    setIsLoading(false);
  };

  useEffect(() => {
    getEachQuestions();
  }, []);

  return <RenderEnglishObjectives data={question} isLoading={isLoading} />;
};
