import {
  ScrollView,
  Text,
  Platform,
  View,
  ImageBackground,
} from "react-native";
import PlanetCard from "./components/planet.card";
import { useDimensions } from "../../../hooks/useDimensions";
import Animated, {
  useAnimatedScrollHandler,
  useSharedValue,
} from "react-native-reanimated";
import HeaderTitle from "../../../components/header.title";
import { ScreenLayout } from "../../../layouts/screen.layout";
import { images } from "../../../assets/img";
import { LinearGradient } from "expo-linear-gradient";

export const Planets = () => {
  const translateX = useSharedValue(0);
  const { width } = useDimensions();
  const scrollHandler = useAnimatedScrollHandler((event) => {
    translateX.value = event.contentOffset.x;
  });

  const planets = [
    {
      id: 1,
      name: "Terre",
      image: images.earth,
    },
    {
      id: 2,
      name: "Mercure",
      image: images.mercury,
    },
    {
      id: 3,

      name: "Venus",
      image: images.venus,
    },
    {
      id: 4,

      name: "Mars",
      image: images.mars,
    },

    {
      id: 5,

      name: "Jupiter",
      image: images.jupiter,
    },
    {
      id: 6,

      name: "Saturne",
      image: images.saturn,
    },
    {
      id: 7,

      name: "Uranus",
      image: images.uranus,
    },
    {
      id: 8,

      name: "Neptune",
      image: images.neptune,
    },
    {
      id: 9,

      name: "Pluton",
      image: images.pluto,
    },
  ];

  return (
    <ScreenLayout style={{ backgroundColor: "black" }} noPadding>
      <LinearGradient style={{ flex: 1 }} colors={["#1061BF", "#3D027C"]}>
        <HeaderTitle title={"Les Planetes"} />
        <View
          style={{
            flex: 1,
          }}
        >
          <Animated.ScrollView
            onScroll={scrollHandler}
            scrollEventThrottle={16}
            pagingEnabled={true}
            snapToAlignment="center" // Snap to the center
          >
            {planets.map((planet: number[], index: number) => (
              <PlanetCard
                key={index.toString()}
                index={index}
                planet={planet}
              />
            ))}
          </Animated.ScrollView>
        </View>
      </LinearGradient>
    </ScreenLayout>
  );
};
