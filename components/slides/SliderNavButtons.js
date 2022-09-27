import {
  Text,
  View,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
  Platform,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { GlobalStyles } from "../../constant/styles";

const { width, height } = Dimensions.get("window");

export const SliderNavButtons = ({ currentSlide, nextSlide }) => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      {currentSlide === 0 ? (
        <TouchableOpacity style={styles.button} onPress={nextSlide}>
          <Text style={styles.btn}>NEXT</Text>
        </TouchableOpacity>
      ) : (
        <TouchableOpacity
          style={styles.button}
          onPress={() => {
            navigation.replace("Chips", { screen: "home" });
          }}>
          <Text style={styles.btn}>GET STARTED</Text>
        </TouchableOpacity>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    textAlign: "right",
  },
  button: {
    backgroundColor: GlobalStyles.colors.walkthroughButton,
    width: 150,
    padding: 14,
    borderRadius: 10,
    marginLeft: width * 0.65,
    marginBottom: Platform.OS === "ios" ? 20 : 50,
  },
  btn: {
    fontSize: 16,
    textAlign: "center",
    fontFamily: "rubik700",
    color: "black",
  },
});
