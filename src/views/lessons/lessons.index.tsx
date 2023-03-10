import { View, Text } from "react-native";
import React from "react";
import { ScreenLayout } from "../../layouts/screen.layout";
import Animated, {
  useAnimatedScrollHandler,
  useSharedValue,
} from "react-native-reanimated";
import { useDimensions } from "../../hooks/useDimensions";
import { Header } from "../../components/header";
import LessonCard from "./lesson.card";

type Props = {};

const Lessons = (props: Props) => {
  const translateX = useSharedValue(0);
  const { width } = useDimensions();
  const scrollHandler = useAnimatedScrollHandler((event) => {
    translateX.value = event.contentOffset.x;
  });

  const lessons = [
    { id: 1, name: "Planetes", image: "", link: "Planets" },
    { id: 2, name: "Constellations", image: "", link: "Constellations" },
    { id: 3, name: "Etoiles", image: "", link: "" },
    { id: 4, name: "Galaxies", image: "", link: "" },
    { id: 5, name: "Satellites", image: "", link: "" },
    { id: 6, name: "Univers", image: "", link: "" },
  ];

  return (
    <ScreenLayout noPadding>
      <Header />
      <View
        style={{
          flex: 1,
          paddingBottom: width(30),
        }}
      >
        <Animated.ScrollView
          onScroll={scrollHandler}
          scrollEventThrottle={16}
          horizontal={true}
          pagingEnabled={true}
          // snapToInterval={width(80) + 10} // Calculate the size for a card including marginLeft and marginRight
          snapToAlignment="center" // Snap to the center
          // contentInset={{
          //   // iOS ONLY
          //   top: 0,
          //   left: SPACING_FOR_CARD_INSET, // Left spacing for the very first card
          //   bottom: 0,
          //   right: SPACING_FOR_CARD_INSET, // Right spacing for the very last card
          // }}
          // contentContainerStyle={{
          //   // contentInset alternative for Android
          //   paddingHorizontal:
          //     Platform.OS === "android" ? SPACING_FOR_CARD_INSET : 0, // Horizontal spacing before and after the ScrollView
          // }}
        >
          {lessons.map((lesson: number[], index: number) => (
            <LessonCard
              lesson={lesson}
              translateX={translateX}
              key={index.toString()}
              index={index}
              maxIndex={lessons.length - 1}
            />
          ))}
        </Animated.ScrollView>
      </View>
    </ScreenLayout>
  );
};

export default Lessons;
