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
import { Header } from "../../../components/header";
import { ScreenLayout } from "../../../layouts/screen.layout";
import { images } from "../../../assets/img";

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
      description: "Aussi connue sous le nom de la planète bleue"
    },
    {
      id: 2,
      name: "Mercure",
      image: images.mercury,
      description: "Aussi connue sous le nom de la planète bleue"
    },
    {
      id: 3,

      name: "Venus",
      image: images.venus,
      description: "Aussi connue sous le nom de la planète bleue"
    },
    {
      id: 4,

      name: "Mars",
      image: images.mars,
      description: "Aussi connue sous le nom de la planète bleue"
    },

    {
      id: 5,

      name: "Jupiter",
      image: images.jupiter,
      description: "Aussi connue sous le nom de la planète bleue"
    },
    {
      id: 6,

      name: "Saturne",
      image: images.saturn,
      description: "Aussi connue sous le nom de la planète bleue"
    },
    {
      id: 7,

      name: "Uranus",
      image: images.uranus,
      description: "Aussi connue sous le nom de la planète bleue"
    },
    {
      id: 8,

      name: "Neptune",
      image: images.neptune,
      description: "Aussi connue sous le nom de la planète bleue"
    },
    {
      id: 9,

      name: "Pluton",
      image: images.pluto,
      description: "Aussi connue sous le nom de la planète bleue"
    },
  ];

  return (
    <ScreenLayout style={{ backgroundColor: "black" }} noPadding>
      <Header />
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
            <PlanetCard key={index.toString()} index={index} planet={planet} />
          ))}
        </Animated.ScrollView>
      </View>
    </ScreenLayout>
  );
};
