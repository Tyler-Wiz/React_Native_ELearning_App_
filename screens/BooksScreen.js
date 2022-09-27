import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  FlatList,
  ActivityIndicator,
  TouchableOpacity,
} from "react-native";
import { useState, useEffect } from "react";
import { getBooks } from "../firebase/firebase";
import { GlobalStyles, QuizStyles } from "../constant/styles";
import { useNavigation } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons";

export const BooksScreen = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [allExams, setAllExams] = useState([]);
  const navigation = useNavigation();

  const getData = async () => {
    setIsLoading(true);
    const exams = await getBooks();
    let preExams = [];
    exams.forEach((exam) => {
      preExams.push({ id: exam.id, ...exam.data() });
    });
    setAllExams([...preExams]);
    setIsLoading(false);
  };

  useEffect(() => {
    getData();
  }, []);

  const renderBooks = ({ item }) => {
    return (
      <TouchableOpacity
        onPress={() => {
          navigation.navigate("bookScreen", {
            itemId: item.id,
          });
        }}
      >
        <View
          style={{
            backgroundColor: item[0].color,
            paddingHorizontal: 10,
            paddingVertical: 10,
            borderRadius: 6,
            marginVertical: 10,
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <View>
            <Text style={styles.title}>{item[0].title}</Text>
            <Text style={styles.author}>{item[0].Author}</Text>
            <Text style={styles.description}>{item[0].description}</Text>
          </View>
          <Ionicons
            name="chevron-forward-outline"
            size={30}
            color={GlobalStyles.colors.grey}
          />
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <SafeAreaView style={styles.bottomSafeArea}>
      <View style={styles.container}>
        <FlatList
          data={allExams}
          keyExtractor={(item) => item.id}
          renderItem={renderBooks}
          showsVerticalScrollIndicator={false}
        />
        <ActivityIndicator size="small" animating={isLoading} color="grey" />
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
    padding: 15,
    marginVertical: 20,
  },
  title: {
    fontFamily: "Poppins600",
    fontSize: 13,
    color: GlobalStyles.colors.primary600,
    textTransform: "capitalize",
  },
  author: {
    fontFamily: "Poppins500",
    fontSize: 13,
    color: GlobalStyles.colors.primary600,
    textTransform: "capitalize",
    marginTop: 5,
  },
  description: {
    fontFamily: "Poppins600",
    fontSize: 12,
    color: GlobalStyles.colors.primary400,
    textTransform: "capitalize",
    marginTop: 5,
  },
});
