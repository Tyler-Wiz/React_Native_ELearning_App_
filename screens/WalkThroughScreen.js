import { SafeAreaView, StyleSheet, Dimensions, FlatList } from "react-native";
import { WALKTHROUGH } from "../data/data";
import { GlobalStyles } from "../constant/styles";
import { SlidesItem } from "../components/slides/SlidesItem";
import { SliderNav } from "../components/slides/SliderNav";
import { useState, useRef } from "react";
import { SliderNavButtons } from "../components/slides/SliderNavButtons";

const { width, height } = Dimensions.get("window");

const renderSlides = ({ item }) => {
  return (
    <>
      <SlidesItem item={item} />
    </>
  );
};

export const WalkThroughScreen = () => {
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
  const ref = useRef(0);

  const updateCurrentSlideIndex = (e) => {
    const contentOffsetX = e.nativeEvent.contentOffset.x;
    const currentIndex = Math.round(contentOffsetX / width);
    setCurrentSlideIndex(currentIndex);
  };

  const handleNextSlide = () => {
    nextSlideIndex = currentSlideIndex + 1;
    const offset = nextSlideIndex * width;
    ref?.current?.scrollToOffset({ offset });
    setCurrentSlideIndex(currentSlideIndex + 1);
  };

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={WALKTHROUGH}
        contentContainerStyle={{ height: height * 0.75 }}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        renderItem={renderSlides}
        onMomentumScrollEnd={updateCurrentSlideIndex}
        ref={ref}
      />
      <SliderNav currentSlide={currentSlideIndex} nextSlide={handleNextSlide} />
      <SliderNavButtons
        currentSlide={currentSlideIndex}
        nextSlide={handleNextSlide}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: GlobalStyles.colors.primary600,
  },
  button: {
    backgroundColor: GlobalStyles.colors.accent400,
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
