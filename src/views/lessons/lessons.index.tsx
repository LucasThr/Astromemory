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
import { Infos } from "../../components/infos";

export interface Lesson {
  id: number;
  image: string;
  name: string;
  description: string;
  link: "Constellations" | "Planets";
}

const Lessons = () => {
  const translateX = useSharedValue(0);
  const { width } = useDimensions();
  const scrollHandler = useAnimatedScrollHandler((event) => {
    translateX.value = event.contentOffset.x;
  });

  const lessons = [
    {
      id: 1,
      name: "Planetes",
      image: "",
      description:
        "Découvrez différentes planètes avec chacune leur spécifité en commençant par notre planète : La Terre",
      link: "Planets",
    },
    // {
    //   id: 2,
    //   name: "Constellations",
    //   image: "",
    //   description: "",
    //   link: "Constellations",
    // },
    // { id: 3, name: "Etoiles", image: "", link: "" },
  ];

  return (
    <ScreenLayout noPadding>
      <Header />

      <View
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Animated.ScrollView
          onScroll={scrollHandler}
          scrollEventThrottle={16}
          horizontal={true}
          pagingEnabled={true}
          snapToAlignment="center" // Snap to the center
        >
          {lessons.map((lesson: Lesson) => (
            <LessonCard lesson={lesson} key={lesson.id} />
          ))}
        </Animated.ScrollView>
      </View>
      <Infos style={{ width: width(80), alignSelf: "center" }} />
    </ScreenLayout>
  );
};

export default Lessons;
