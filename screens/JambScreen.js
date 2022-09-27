import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  ActivityIndicator,
} from "react-native";
import { useState } from "react";
import { JambData } from "../firebase/JambData";
import { NavigateButton } from "../ui/NavigateButton";
import { InputWithIcon } from "../ui/InputWithIcon";
import { GlobalStyles } from "../constant/styles";
import { ExamList } from "../components/ExamList";

export const JambScreen = () => {
  const [jambExams, isLoading] = JambData();
  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);

  const searchSubject = (text) => {
    setData(
      jambExams.filter((exam) =>
        exam[0].title.toLowerCase().includes(text.toLowerCase())
      )
    );
    setFilteredData(data);
  };

  const searchYear = (text) => {
    setFilteredData(
      filteredData.filter((exam) =>
        exam[0].year.toLowerCase().includes(text.toLowerCase())
      )
    );
    if (text.length < 4) {
      setFilteredData(data);
    }
  };

  return (
    <SafeAreaView style={styles.bottomSafeArea}>
      <NavigateButton title="JAMB Past Questions" />
      <View style={styles.container}>
        <Text style={styles.header}>Search For Jamb Exams</Text>
        <View>
          <InputWithIcon
            placeholder="biology"
            onUpdateValue={(text) => {
              searchSubject(text);
            }}
            label="Subject"
          />
          <InputWithIcon
            placeholder="2021"
            onUpdateValue={(text) => {
              searchYear(text);
            }}
            label="Year"
            keyboardType="numeric"
          />
        </View>
        <ActivityIndicator size="small" animating={isLoading} color="grey" />
        <ExamList data={filteredData} />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  bottomSafeArea: {
    flex: 1,
    backgroundColor: "#FFFFFF",
  },
  container: {
    flex: 1,
    padding: 20,
    marginTop: 10,
  },
  header: {
    fontFamily: "Poppins600",
    fontSize: 16,
    color: GlobalStyles.colors.primary600,
    textAlign: "center",
    marginBottom: 30,
    textTransform: "capitalize",
  },
  subHeader: {
    fontFamily: "rubik400",
    fontSize: 12,
    color: GlobalStyles.colors.primary600,
    marginBottom: 10,
  },
});
