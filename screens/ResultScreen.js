import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { GlobalStyles, QuizStyles } from "../constant/styles";

export const ResultScreen = ({ route, navigation }) => {
  const resultArray = route.params.resultArray;
  const result = route.params.result;
  const allQuestions = route.params.allQuestions;

  return (
    <SafeAreaView style={styles.bottomSafeArea}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.container}>
          <View>
            {result >= allQuestions.length / 1.1 ? (
              <>
                <View>
                  <Text style={[styles.mark, { color: "green" }]}>A1</Text>
                </View>
              </>
            ) : result >= allQuestions.length / 1.2 ? (
              <>
                <View>
                  <Text style={[styles.mark, { color: "orange" }]}>B2</Text>
                </View>
              </>
            ) : result >= allQuestions.length / 1.4 ? (
              <>
                <View>
                  <Text style={[styles.mark, { color: "orange" }]}>C4</Text>
                </View>
              </>
            ) : result >= allQuestions.length / 1.5 ? (
              <>
                <View>
                  <Text style={[styles.mark, { color: "orange" }]}>C5</Text>
                </View>
              </>
            ) : result >= allQuestions.length / 1.6 ? (
              <>
                <View>
                  <Text style={[styles.mark, { color: "orange" }]}>C6</Text>
                </View>
              </>
            ) : result >= allQuestions.length / 2.2 ? (
              <>
                <View>
                  <Text style={[styles.mark, { color: "red" }]}>D7</Text>
                </View>
              </>
            ) : result >= allQuestions.length / 2.5 ? (
              <>
                <View>
                  <Text style={[styles.mark, { color: "red" }]}>E8</Text>
                </View>
              </>
            ) : result <= allQuestions.length / 3 ? (
              <>
                <View>
                  <Text style={styles.resultNumber}>Ooh NO!</Text>
                  <Text style={[styles.mark, { color: "red" }]}>F9</Text>
                </View>
              </>
            ) : null}
          </View>
          <View style={styles.resultDescription}>
            <Text style={styles.resultNumber}>
              You got {result}/{allQuestions.length} Correct Answers
            </Text>
          </View>
          <Text style={styles.resultCorrect}>See Correct Answers </Text>
          <View style={styles.numberContainer}>
            {resultArray.map((res, i) => {
              if (i !== 0) {
                return (
                  <View key={i}>
                    <TouchableOpacity
                      onPress={() => {
                        navigation.navigate("correct", {
                          answer: res.answer,
                          question: res.question,
                          selected: res.selectedOption,
                          options: res.options,
                        });
                      }}
                    >
                      {res.answer === res.selectedOption ? (
                        <View
                          style={{
                            paddingHorizontal: 10,
                            paddingVertical: 10,
                            backgroundColor: QuizStyles.colors.correct,
                            margin: 2,
                            width: 40,
                          }}
                        >
                          <Text style={styles.numberText}>{i}</Text>
                        </View>
                      ) : (
                        <View style={styles.number}>
                          <Text style={styles.numberText}>{i}</Text>
                        </View>
                      )}
                    </TouchableOpacity>
                  </View>
                );
              }
            })}
          </View>
          <View style={styles.newExam}>
            <TouchableOpacity
              onPress={() => {
                navigation.navigate("waec");
              }}
            >
              <Text style={styles.anotherTest}>Take Another Exam</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                navigation.goBack();
              }}
            >
              <Text style={styles.anotherTest}>Take Exam Again</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  numberContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    alignItems: "center",
    paddingVertical: 20,
  },
  number: {
    paddingHorizontal: 10,
    paddingVertical: 10,
    backgroundColor: "#ff6966",
    margin: 1,
    width: 42,
  },
  numberText: {
    textAlign: "center",
  },
  mark: {
    fontSize: 50,
    textAlign: "center",
    marginVertical: 10,
  },
  container: {
    padding: 30,
    marginTop: 20,
    alignItems: "center",
  },
  resultDescription: {
    flexDirection: "row",
    justifyContent: "center",
    marginVertical: 20,
  },
  resultNumber: {
    fontSize: 16,
    fontFamily: "Poppins600",
    color: GlobalStyles.colors.primary600,
    marginRight: 3,
  },
  anotherTest: {
    textAlign: "center",
    fontSize: 12,
    fontFamily: "Poppins400",
    color: GlobalStyles.colors.primary100,
    marginHorizontal: 10,
    marginTop: 20,
  },
  resultCorrect: {
    fontSize: 16,
    fontFamily: "Poppins600",
    color: GlobalStyles.colors.primary600,
    marginTop: 10,
  },
  newExam: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
});
