import { useEffect, useState } from "react";
import {
  StyleSheet,
  View,
  ActivityIndicator,
  SafeAreaView,
  Text,
} from "react-native";
import { ExamList } from "../components/ExamList";
import { GlobalStyles } from "../constant/styles";
import { InputWithIcon } from "../ui/InputWithIcon";
import { getAllExams, getJamb } from "../firebase/firebase";

export const SearchScreen = ({ navigation }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [Exams, setExams] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [data, setData] = useState([]);

  const getData = async () => {
    setIsLoading(true);
    const examsWaec = await getJamb();
    let wExams = [];
    examsWaec.forEach((exam) => {
      wExams.push({ id: exam.id, ...exam.data() });
    });
    const examsJamb = await getAllExams();
    let jExams = [];
    examsJamb.forEach((exam) => {
      jExams.push({ id: exam.id, ...exam.data() });
    });
    setExams([...wExams, ...jExams]);
    setIsLoading(false);
  };

  useEffect(() => {
    getData();
  }, []);

  const searchSubject = (text) => {
    setData(
      Exams.filter((exam) =>
        exam[0].title.toLowerCase().includes(text.toLowerCase())
      )
    );
    setFilteredData(data);
  };

  const searchYear = (text) => {
    setFilteredData(Exams);
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
      <View style={styles.container}>
        <Text style={styles.header}>Search For All objective Exams</Text>
        <Text style={styles.subHeader}>Search Year and Subject Name</Text>
        <View>
          <InputWithIcon
            label="Subject"
            placeholder="Search"
            onUpdateValue={(text) => {
              searchSubject(text);
            }}
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
    backgroundColor: "#FFF",
  },
  container: {
    flex: 1,
    padding: 20,
    marginTop: 60,
  },
  header: {
    fontFamily: "Poppins600",
    fontSize: 16,
    color: GlobalStyles.colors.primary600,
    textAlign: "center",
    marginBottom: 10,
    textTransform: "capitalize",
  },
  subHeader: {
    fontFamily: "rubik400",
    fontSize: 12,
    color: GlobalStyles.colors.primary600,
    textAlign: "center",
    marginBottom: 10,
  },
});
