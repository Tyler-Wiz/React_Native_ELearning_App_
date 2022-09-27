import {
  View,
  StyleSheet,
  Dimensions,
  Pressable,
  Platform,
} from "react-native";
import { WALKTHROUGH } from "../../data/data";
import { GlobalStyles } from "../../constant/styles";

const { width, height } = Dimensions.get("window");

export const SliderNav = ({ currentSlide, nextSlide }) => {
  return (
    <>
      <View style={styles.container}>
        <View style={styles.indicatorContainer}>
          {WALKTHROUGH.map((_, index) => (
            <Pressable
              key={index}
              style={[
                styles.indicator,
                currentSlide === index && styles.activeIndicator,
              ]}
              onPress={nextSlide}
            />
          ))}
        </View>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    height: height * 0.2,
    width: "100%",
    alignItems: "center",
  },
  indicatorContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginTop: Platform.OS === "ios" ? 20 : 0,
  },
  indicator: {
    width: 15,
    height: 15,
    backgroundColor: GlobalStyles.colors.primary100,
    borderRadius: 10,
    marginRight: 10,
  },
  activeIndicator: {
    width: 35,
    height: 15,
    backgroundColor: GlobalStyles.colors.walkthroughButton,
    borderRadius: 10,
    marginRight: 10,
  },
});
