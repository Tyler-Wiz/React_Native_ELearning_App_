import React from "react";
import {
  Text,
  View,
  Image,
  StyleSheet,
  Dimensions,
  SafeAreaView,
} from "react-native";
import { GlobalStyles } from "../../constant/styles";

const { width, height } = Dimensions.get("window");

export const SlidesItem = ({ item }) => {
  return (
    <SafeAreaView>
      <View style={styles.container}>
        <Image source={item.imageUrl} style={styles.image} />
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.title}> {item.title}</Text>
        <Text style={styles.description}>{item.description}</Text>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    marginTop: 100,
  },
  image: {
    width: width,
    height: "60%",
    resizeMode: "contain",
  },
  textContainer: {
    justifyContent: "center",
    alignItems: "center",
    marginTop: -60,
  },
  title: {
    maxWidth: width * 0.8,
    textAlign: "center",
    color: GlobalStyles.colors.primary50,
    fontSize: 20,
    marginBottom: 15,
    fontFamily: "rubik600",
  },
  description: {
    textAlign: "center",
    maxWidth: width * 0.85,
    color: GlobalStyles.colors.primary50,
    fontFamily: "rubik400",
    fontSize: 13,
    lineHeight: 23,
  },
});
