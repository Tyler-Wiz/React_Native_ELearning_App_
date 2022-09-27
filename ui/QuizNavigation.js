import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { useEffect, useState } from "react";

export const QuizNavigation = ({ startMinute }) => {
  const navigation = useNavigation();

  const [minutes, setMinutes] = useState(startMinute);
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    let myInterval = setInterval(() => {
      if (seconds > 0) {
        setSeconds(seconds - 1);
      }
      if (seconds === 0) {
        if (minutes === 0) {
          clearInterval(myInterval);
        } else {
          setMinutes(minutes - 1);
          setSeconds(59);
        }
      }
    }, 1000);
    return () => {
      clearInterval(myInterval);
    };
  });

  return (
    <>
      <View style={styles.timeAndClose}>
        <TouchableOpacity
          onPress={() => {
            navigation.goBack();
          }}
        >
          <AntDesign name="close" size={30} />
        </TouchableOpacity>

        <View style={styles.timerContainer}>
          <AntDesign name="clockcircleo" size={25} />
          <Text style={styles.timer}>
            {minutes}m: {seconds}s remaining
          </Text>
        </View>
        <TouchableOpacity
          onPress={() => {
            navigation.goBack();
          }}
        >
          <Text style={styles.quit}>Quit Exam</Text>
        </TouchableOpacity>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  timeAndClose: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginVertical: 10,
    padding: 14,
    alignItems: "center",
    borderBottomWidth: 1,
    borderBottomColor: "#e5e5e5",
  },
  timerContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  timer: {
    marginLeft: 5,
    fontFamily: "Poppins500",
    fontSize: 11,
    color: "green",
  },
  quit: {
    marginLeft: 5,
    fontFamily: "Poppins500",
    fontSize: 13,
    color: "red",
  },
});
