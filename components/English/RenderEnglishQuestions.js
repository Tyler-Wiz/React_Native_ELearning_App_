import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ScrollView,
  ActivityIndicator,
} from "react-native";
import { GlobalStyles } from "../../constant/styles";
import { QuizStyles } from "../../constant/styles";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import Highlighter from "react-native-highlight-words";
import { englishWords } from "../../data/Quizdata";

export const RenderEnglishQuestions = ({
  allQuestions,
  currentQuestionIndex,
  validateAnswer,
  currentSelectedOption,
  isOptionsDisabled,
}) => {
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.container}>
        <View style={styles.questionCounter}>
          <Text style={styles.questionNo}>
            Question {currentQuestionIndex + 1}
          </Text>
          <Text style={styles.questionNo}>of {allQuestions.length}</Text>
        </View>
        <View style={styles.questionWrapper}>
          <Text style={styles.section}>
            {allQuestions[currentQuestionIndex]?.section}
          </Text>
        </View>
        <Highlighter
          highlightStyle={{
            textDecorationLine: "underline",
            fontFamily: "Poppins600",
          }}
          style={styles.question}
          searchWords={englishWords}
          textToHighlight={allQuestions[currentQuestionIndex]?.question}
        />
        <View style={styles.optionContainer}>
          {allQuestions[currentQuestionIndex]?.options.map((option, i) => (
            <TouchableOpacity
              key={i}
              style={{
                borderRadius: 6,
                backgroundColor: QuizStyles.colors.primary,
                flexDirection: "row",
                alignItems: "center",
                paddingHorizontal: 10,
                paddingVertical: 15,
                marginVertical: 5,
                shadowColor: "black",
                shadowOffset: { width: 1, height: 1 },
                shadowOpacity: 0.1,
                shadowRadius: 5,
                elevation: 3,
              }}
              onPress={() => {
                validateAnswer(option);
              }}
              disabled={isOptionsDisabled}
            >
              {option == currentSelectedOption ? (
                <View style={styles.icon}>
                  <MaterialCommunityIcons
                    name="checkbox-blank-circle"
                    size={20}
                    color="black"
                  />
                  <Text style={styles.answer}>{option}</Text>
                </View>
              ) : (
                <View style={styles.icon}>
                  <MaterialCommunityIcons
                    name="checkbox-blank-circle-outline"
                    size={20}
                    color="black"
                  />
                  <Text style={styles.answer}>{option}</Text>
                </View>
              )}
            </TouchableOpacity>
          ))}
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  question: {
    fontFamily: "Poppins500",
    fontSize: 15,
    textTransform: "capitalize",
    color: GlobalStyles.colors.primary600,
    marginVertical: 5,
    textAlign: "center",
  },
  section: {
    fontFamily: "Poppins600",
    fontSize: 13,
    textTransform: "uppercase",
    color: GlobalStyles.colors.primary600,
    marginVertical: 15,
    textAlign: "center",
  },
  questionWrapper: {
    paddingVertical: 5,
  },
  questionCounter: {
    flexDirection: "row",
    alignItems: "center",
  },
  questionNo: {
    fontFamily: "Poppins500",
    fontSize: 13,
    textTransform: "uppercase",
    color: GlobalStyles.colors.primary100,
    marginHorizontal: 2,
  },
  optionContainer: {
    marginTop: 20,
  },
  icon: {
    alignItems: "center",
    flexDirection: "row",
  },
  answer: {
    fontFamily: "Poppins600",
    fontSize: 12,
    textTransform: "capitalize",
    color: GlobalStyles.colors.primary600,
    marginLeft: 20,
    maxWidth: "80%",
  },
  container: {
    paddingHorizontal: 1,
  },
  added: {
    color: GlobalStyles.colors.primary50,
    fontWeight: "900",
  },
});
