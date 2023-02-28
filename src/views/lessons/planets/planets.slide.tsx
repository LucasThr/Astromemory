import { ScrollView, Text, Platform, View } from "react-native";
import PlanetCard from "./components/planet.card";
import { useDimensions } from "../../../hooks/useDimensions";
import Animated, {
  useAnimatedScrollHandler,
  useSharedValue,
} from "react-native-reanimated";
import HeaderTitle from "../../../components/header.title";

export const PlanetsSlide = ({ planets }: { planets: any }) => {
  const translateX = useSharedValue(0);
  const { width } = useDimensions();
  const scrollHandler = useAnimatedScrollHandler((event) => {
    translateX.value = event.contentOffset.x;
  });
  return (
    <View style={{ flex: 1 }}>
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
    </View>
  );
};
