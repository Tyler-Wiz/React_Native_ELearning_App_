import React from "react";
import { Text, View, SafeAreaView, StyleSheet, FlatList } from "react-native";
import { HOMESUBJECTS } from "../data/data";
import { HomeSubjects } from "../components/Home/HomeSubjects";
import { HomeAllSubjects } from "../components/Home/HomeAllSubjects";

export const HomeScreen = () => {
  const homeSubjects = ({ item }) => {
    return <HomeSubjects item={item} />;
  };

  return (
    <SafeAreaView style={styles.bottomSafeArea}>
      <View style={styles.container}>
        <Text style={styles.header}>
          Study WAEC And JAMB Past Questions Free
        </Text>
        <Text style={styles.subheader}>
          Over 20,000 questions and answers + Free Literature Book Analysis and
          Summaries
        </Text>
        <View style={styles.subjects}>
          <FlatList
            data={HOMESUBJECTS}
            keyExtractor={(item) => item.id}
            renderItem={homeSubjects}
            numColumns={2}
            showsHorizontalScrollIndicator={false}
            nestedScrollEnabled={true}
          />
        </View>
        <HomeAllSubjects />
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
    padding: 18,
    marginVertical: 5,
  },
  user: {
    fontSize: 16,
    fontFamily: "Poppins600",
    marginBottom: 20,
    marginLeft: 10,
    textAlign: "center",
  },
  header: {
    fontSize: 13,
    fontFamily: "Poppins600",
    textAlign: "center",
    marginBottom: 5,
  },
  subheader: {
    fontSize: 11,
    fontFamily: "Poppins400",
    textAlign: "center",
    marginBottom: 5,
  },
  subjects: {
    padding: 10,
  },
});
