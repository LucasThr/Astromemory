import { ScrollView, Text, Platform, View } from "react-native";
import PlanetCard from "./components/planet.card";
import { useDimensions } from "../../../hooks/useDimensions";
import Animated, {
  useAnimatedScrollHandler,
  useSharedValue,
} from "react-native-reanimated";
import HeaderTitle from "../../../components/header.title";
import { ScreenLayout } from "../../../layouts/screen.layout";

export const Planets = () => {
  const translateX = useSharedValue(0);
  const { width } = useDimensions();
  const scrollHandler = useAnimatedScrollHandler((event) => {
    translateX.value = event.contentOffset.x;
  });

  const planets = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];

  return (
    <ScreenLayout noPadding>
      <HeaderTitle title={"Les Planetes"} />
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
          snapToAlignment="center" // Snap to the center
        >
          {planets.map((planet: number[], index: number) => (
            <PlanetCard
              translateX={translateX}
              key={index.toString()}
              index={index}
              maxIndex={planets.length - 1}
            />
          ))}
        </Animated.ScrollView>
      </View>
    </ScreenLayout>
  );
};
