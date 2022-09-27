import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TouchableOpacity,
  ScrollView,
  ActivityIndicator,
} from "react-native";
import { QuizNavigation } from "../../ui/QuizNavigation";
import { useState } from "react";
import { RenderQuestion } from "./RenderQuestion";
import { QuizStyles, GlobalStyles } from "../../constant/styles";
import { AntDesign } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

export const RenderObjectives = ({ data, isLoading }) => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [currentSelectedOption, setCurrentSelectedOption] = useState(0);
  const [correctOption, setCorrectOption] = useState(null);
  const [isOptionsDisabled, setIsOptionsDisabled] = useState(false);
  const [result, setResult] = useState(0);
  const [showNextButton, setShowNextButton] = useState(false);
  const [resultArray, setResultArray] = useState([
    {
      answer: "",
      question: "",
      selectedOption: "",
      options: [],
    },
  ]);

  const navigation = useNavigation();

  const allQuestions = data;
  const startMinute = 60;

  const validateAnswer = (selectedOption) => {
    let correctAnswer = allQuestions[currentQuestionIndex]["correct_option"];
    let options = allQuestions[currentQuestionIndex]["options"];
    let question = allQuestions[currentQuestionIndex]["question"];
    setCurrentSelectedOption(selectedOption);
    setCorrectOption(correctAnswer);
    setIsOptionsDisabled(true);

    if (selectedOption === correctAnswer) {
      setResult(result + 1);
    }

    if (selectedOption === correctAnswer || selectedOption !== correctAnswer) {
      setResultArray((preState) => [
        ...preState,
        {
          answer: correctAnswer,
          question: question,
          selectedOption: selectedOption,
          options: options,
        },
      ]);
    }
    setShowNextButton(true);
  };

  const handleNext = () => {
    if (currentQuestionIndex === allQuestions.length - 1) {
      navigation.replace("result", {
        resultArray: resultArray,
        result: result,
        allQuestions: allQuestions,
      });
    } else {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
      setCurrentSelectedOption(null);
      setCorrectOption(null);
      setIsOptionsDisabled(false);
      setShowNextButton(false);
    }
  };

  const renderNextButton = () => {
    if (showNextButton) {
      return (
        <View style={styles.progress}>
          <View></View>
          <View>
            <TouchableOpacity onPress={handleNext}>
              {currentQuestionIndex === allQuestions.length - 1 ? (
                <View style={styles.showResult}>
                  <Text style={styles.buttonText}>Result</Text>
                </View>
              ) : (
                <View style={styles.next}>
                  <AntDesign name="arrowright" size={30} color="green" />
                </View>
              )}
            </TouchableOpacity>
          </View>
        </View>
      );
    } else {
      return null;
    }
  };

  const showModalText = () => {
    setShowScoreModal(true);
  };

  return (
    <SafeAreaView>
      <ScrollView>
        <QuizNavigation startMinute={startMinute} />

        <View style={styles.container}>
          <RenderQuestion
            allQuestions={allQuestions}
            currentQuestionIndex={currentQuestionIndex}
            validateAnswer={validateAnswer}
            currentSelectedOption={currentSelectedOption}
            correctOption={correctOption}
            isOptionsDisabled={isOptionsDisabled}
            resultArray={resultArray}
          />
          {renderNextButton()}
          <ActivityIndicator size="small" animating={isLoading} color="grey" />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    paddingVertical: 20,
  },
  progress: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 10,
  },
  next: {
    backgroundColor: QuizStyles.colors.primary,
    marginVertical: 25,
    width: 55,
    height: 55,
    shadowColor: "black",
    shadowOffset: { width: 1, height: 1 },
    shadowOpacity: 0.25,
    shadowRadius: 5,
    borderRadius: 60 / 2,
    elevation: 3,
    alignItems: "center",
    justifyContent: "center",
  },
  showResult: {
    backgroundColor: QuizStyles.colors.primary,
    marginVertical: 25,
    paddingHorizontal: 13,
    paddingVertical: 13,
    shadowColor: "black",
    shadowOffset: { width: 1, height: 1 },
    shadowOpacity: 0.25,
    shadowRadius: 5,
    borderRadius: 2,
    elevation: 3,
    alignItems: "center",
    justifyContent: "center",
  },
  buttonText: {
    fontFamily: "Poppins600",
    fontSize: 12,
    textTransform: "uppercase",
    color: GlobalStyles.colors.primary600,
  },
  active: {
    position: "absolute",
    top: "50%",
    left: "45%",
  },
});
