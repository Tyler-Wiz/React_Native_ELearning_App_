import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { GlobalStyles } from "../constant/styles";

export const CorrectAnswerScreen = ({ navigation, route }) => {
  const answer = route.params.answer;
  const question = route.params.question;
  const selected = route.params.selected;
  const options = route.params.options;

  let label = "";

  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={() => {
          navigation.goBack();
        }}
      >
        <Ionicons name="md-close" size={40} />
      </TouchableOpacity>
      <View style={styles.wrapper}>
        <View style={styles.question}>
          <Text style={styles.questionHeader}>Question</Text>
          <Text style={styles.questionText}>{question}</Text>
        </View>
        {options.map((option, i) => {
          if (i === 0) {
            label = "( A )";
            return (
              <View key={i} style={styles.optionContainer}>
                <Text style={styles.optionText}>{label}</Text>
                <Text style={styles.optionText}>{option}</Text>
              </View>
            );
          } else if (i === 1) {
            label = "( B )";
            return (
              <View key={i} style={styles.optionContainer}>
                <Text style={styles.optionText}>{label}</Text>
                <Text style={styles.optionText}>{option}</Text>
              </View>
            );
          } else if (i === 2) {
            label = "( C )";
            return (
              <View key={i} style={styles.optionContainer}>
                <Text style={styles.optionText}>{label}</Text>
                <Text style={styles.optionText}>{option}</Text>
              </View>
            );
          } else if (i === 3) {
            label = "( D )";
            return (
              <View key={i} style={styles.optionContainer}>
                <Text style={styles.optionText}>{label}</Text>
                <Text style={styles.optionText}>{option}</Text>
              </View>
            );
          } else if (i === 4) {
            label = "( E )";
            return (
              <View key={i} style={styles.optionContainer}>
                <Text style={styles.optionText}>{label}</Text>
                <Text style={styles.optionText}>{option}</Text>
              </View>
            );
          }
        })}
        <View style={styles.userAnswer}>
          <Text style={styles.optionText}>Your Answer</Text>
          <Text style={styles.optionText}>{selected}</Text>
        </View>
        <View style={styles.userCorrect}>
          <Text style={styles.optionText}>Correct Answer</Text>
          <Text style={styles.correctText}>{answer}</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  wrapper: {
    marginTop: 40,
  },
  question: {
    marginVertical: 10,
    paddingVertical: 10,
    borderBottomWidth: 0.2,
    borderBottomColor: "black",
    marginBottom: 20,
  },
  questionText: {
    fontSize: 16,
    fontFamily: "Poppins500",
    color: GlobalStyles.colors.primary600,
    marginBottom: 10,
  },
  questionHeader: {
    fontFamily: "Poppins600",
    fontSize: 17,
    textTransform: "uppercase",
    color: GlobalStyles.colors.primary600,
    marginBottom: 20,
  },
  userAnswer: {
    marginVertical: 25,
    alignItems: "center",
  },
  userCorrect: {
    marginVertical: 10,
    alignItems: "center",
  },
  correctText: {
    fontFamily: "Poppins600",
    fontSize: 15,
    textTransform: "capitalize",
    color: "green",
    marginVertical: 10,
  },
  optionContainer: {
    flexDirection: "row",
    marginVertical: 5,
  },
  optionText: {
    fontFamily: "Poppins400",
    fontSize: 14,
    textTransform: "capitalize",
    color: GlobalStyles.colors.primary600,
    marginRight: 10,
    maxWidth: "90%",
  },
});
