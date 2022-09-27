import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { GlobalStyles } from "../../constant/styles";
import { WAECSUBJECTS } from "../../data/data";
import { SubjectData } from "../../firebase/SubjectData";

export const HomeAllSubjects = ({ Header, data }) => {
  const navigation = useNavigation();
  const [biology, english, economics, commerce, Math, isLoading] =
    SubjectData();

  let title = "";

  return (
    <View style={styles.mainContainer}>
      <Text style={styles.subjectsText}>Popular Objective Exams</Text>
      <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
        {WAECSUBJECTS.map((item, i) => {
          title = item.title;
          if (title === "Mathematics") {
            return (
              <View key={i}>
                <TouchableOpacity
                  onPress={() => {
                    navigation.navigate("subjects", {
                      data: Math,
                      title: item.title,
                      isLoading: isLoading,
                    });
                  }}
                >
                  <View style={styles.container}>
                    <View style={styles.wrapper}>
                      <Image source={item.imageUrl} style={styles.image} />
                    </View>
                    <Text style={styles.title}>{item.title}</Text>
                  </View>
                </TouchableOpacity>
              </View>
            );
          }
          if (title === "English") {
            return (
              <View key={i}>
                <TouchableOpacity
                  onPress={() => {
                    navigation.navigate("subjects", {
                      data: english,
                      title: item.title,
                      isLoading: isLoading,
                    });
                  }}
                >
                  <View style={styles.container}>
                    <View style={styles.wrapper}>
                      <Image source={item.imageUrl} style={styles.image} />
                    </View>
                    <Text style={styles.title}>{item.title}</Text>
                  </View>
                </TouchableOpacity>
              </View>
            );
          }
          if (title === "Biology") {
            return (
              <View key={i}>
                <TouchableOpacity
                  onPress={() => {
                    navigation.navigate("subjects", {
                      data: biology,
                      title: item.title,
                      isLoading: isLoading,
                    });
                  }}
                >
                  <View style={styles.container}>
                    <View style={styles.wrapper}>
                      <Image source={item.imageUrl} style={styles.image} />
                    </View>
                    <Text style={styles.title}>{item.title}</Text>
                  </View>
                </TouchableOpacity>
              </View>
            );
          }
          if (title === "Economics") {
            return (
              <View key={i}>
                <TouchableOpacity
                  onPress={() => {
                    navigation.navigate("subjects", {
                      data: economics,
                      title: item.title,
                      isLoading: isLoading,
                    });
                  }}
                >
                  <View style={styles.container}>
                    <View style={styles.wrapper}>
                      <Image source={item.imageUrl} style={styles.image} />
                    </View>
                    <Text style={styles.title}>{item.title}</Text>
                  </View>
                </TouchableOpacity>
              </View>
            );
          }
          if (title === "Commerce") {
            return (
              <View key={i}>
                <TouchableOpacity
                  onPress={() => {
                    navigation.navigate("subjects", {
                      data: commerce,
                      title: item.title,
                      isLoading: isLoading,
                    });
                  }}
                >
                  <View style={styles.container}>
                    <View style={styles.wrapper}>
                      <Image source={item.imageUrl} style={styles.image} />
                    </View>
                    <Text style={styles.title}>{item.title}</Text>
                  </View>
                </TouchableOpacity>
              </View>
            );
          }
        })}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    marginVertical: 15,
    marginHorizontal: 20,
  },
  container: {
    justifyContent: "center",
    alignItems: "center",
  },
  wrapper: {
    marginBottom: 10,
    borderColor: "white",
    width: 60,
    height: 60,
    shadowColor: "black",
    shadowOffset: { width: 4, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    borderRadius: 60 / 2,
    elevation: 3,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "white",
    marginRight: 10,
  },
  itemContainer: {
    marginHorizontal: 5,
  },
  image: {
    width: 25,
    height: 25,
  },
  title: {
    fontSize: 14,
    fontFamily: "rubik400",
    color: GlobalStyles.colors.primary600,
  },
  subjectsText: {
    fontSize: 16,
    fontFamily: "rubik600",
    color: GlobalStyles.colors.primary600,
    marginVertical: 15,
  },
});
