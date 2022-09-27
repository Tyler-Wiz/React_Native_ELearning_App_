import { StyleSheet, SafeAreaView, ScrollView } from "react-native";
import { useState, useEffect } from "react";
import { NavigateButton } from "../ui/NavigateButton";
import { getBookChapter } from "../firebase/firebase";
import { RenderBooksChapters } from "../components/RenderBooksChapters";

export const BookReadingScreen = ({ route }) => {
  const [chapters, setChapters] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const itemId = route.params.itemId;

  const getEachQuestions = async () => {
    setIsLoading(true);
    const questions = await getBookChapter(itemId);
    let preExams = [];
    questions.forEach((exam) => {
      preExams.push({ id: exam.id, ...exam.data() });
    });
    setChapters([...preExams]);
    setIsLoading(false);
  };
  useEffect(() => {
    getEachQuestions();
  }, []);

  return (
    <SafeAreaView style={styles.bottomSafeArea}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <NavigateButton title={itemId} />
        <RenderBooksChapters data={chapters} />
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({});
