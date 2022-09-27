import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ScrollView,
  Image,
} from "react-native";
import { GlobalStyles } from "../../constant/styles";
import { QuizStyles } from "../../constant/styles";
import { MaterialCommunityIcons } from "@expo/vector-icons";

export const RenderQuestion = ({
  allQuestions,
  currentQuestionIndex,
  validateAnswer,
  currentSelectedOption,
  isOptionsDisabled,
}) => {
  const imageUrl = allQuestions[currentQuestionIndex]?.image;
  const section = allQuestions[currentQuestionIndex]?.section;
  let label = "";

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
          {imageUrl ? (
            <View>
              <Image
                source={{ uri: allQuestions[currentQuestionIndex]?.image }}
                style={styles.image}
              />
            </View>
          ) : null}
          <Text style={styles.question}>
            {allQuestions[currentQuestionIndex]?.question}
          </Text>
        </View>
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
              ) : i === 0 ? (
                <View style={styles.icon}>
                  <Text style={styles.label}>(A)</Text>
                  <Text style={styles.answer}>{option}</Text>
                </View>
              ) : i === 1 ? (
                <View style={styles.icon}>
                  <Text style={styles.label}>(B)</Text>
                  <Text style={styles.answer}>{option}</Text>
                </View>
              ) : i === 2 ? (
                <View style={styles.icon}>
                  <Text style={styles.label}>(C)</Text>
                  <Text style={styles.answer}>{option}</Text>
                </View>
              ) : i === 3 ? (
                <View style={styles.icon}>
                  <Text style={styles.label}>(D)</Text>
                  <Text style={styles.answer}>{option}</Text>
                </View>
              ) : i === 4 ? (
                <View style={styles.icon}>
                  <Text style={styles.label}>(E)</Text>
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
    fontSize: 13,
    textTransform: "capitalize",
    color: GlobalStyles.colors.primary600,
    textAlign: "center",
  },
  section: {
    fontFamily: "Poppins600",
    fontSize: 14,
    textTransform: "capitalize",
    color: GlobalStyles.colors.primary600,
    marginBottom: 20,
    lineHeight: 25,
    borderColor: GlobalStyles.colors.primary100,
    padding: 5,
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
    paddingHorizontal: 10,
  },
  added: {
    color: GlobalStyles.colors.primary50,
    fontWeight: "900",
  },
  image: {
    width: "100%",
    height: 200,
    resizeMode: "contain",
  },
  label: {
    fontFamily: "Poppins600",
    fontSize: 14,
    textTransform: "capitalize",
    color: GlobalStyles.colors.primary600,
  },
});
