import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useState } from "react";
import { GlobalStyles } from "../constant/styles";

export const RenderBooksChapters = ({ data }) => {
  const [isVisible, setIsVisible] = useState({});

  const toggleVisibility = (id) => {
    setIsVisible((prevState) => ({
      ...prevState,
      [id]: !prevState[id],
    }));
  };
  return (
    <View style={styles.container}>
      {data.map((chapter, i) => (
        <View key={i}>
          <TouchableOpacity
            onPress={() => {
              toggleVisibility(chapter.id);
            }}
            style={styles.chapterHeader}
          >
            <Text style={styles.title}>{chapter.title}</Text>
            {isVisible[chapter.id] ? (
              <Ionicons name="md-chevron-up" size={24} color="black" />
            ) : (
              <Ionicons name="md-chevron-down" size={24} color="black" />
            )}
          </TouchableOpacity>
          {isVisible[chapter.id] ? (
            <View>
              <Text style={styles.paragraph}>{chapter.paragraphOne}</Text>
              <Text style={styles.paragraph}>{chapter.paragraphTwo}</Text>
              <Text style={styles.paragraph}>{chapter.paragraphThree}</Text>
              <Text style={styles.paragraph}>{chapter.paragraphFour}</Text>
              <Text style={styles.paragraph}>{chapter.paragraphFive}</Text>
              <Text style={styles.paragraph}>{chapter.paragraphSix}</Text>
              <Text style={styles.paragraph}>{chapter.paragraphSeven}</Text>
              <Text style={styles.paragraph}>{chapter.paragraphEight}</Text>
            </View>
          ) : null}
        </View>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 15,
  },
  chapterHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    borderBottomWidth: 0.2,
    borderBottomColor: GlobalStyles.colors.grey,
    paddingVertical: 5,
  },
  paragraph: {
    fontFamily: "Poppins400",
    fontSize: 14,
    color: GlobalStyles.colors.primary600,
    lineHeight: 28,
    paddingVertical: 10,
  },
  title: {
    fontFamily: "Poppins500",
    fontSize: 13,
    color: GlobalStyles.colors.primary600,
    lineHeight: 25,
    paddingVertical: 10,
    textTransform: "capitalize",
  },
});
