import { Animated, ScrollView, Text, View } from "react-native";
import PlanetCard from "./components/planet.card";
import { useDimensions } from "../../../hooks/useDimensions";

export const PlanetsSlide = ({ planets }: { planets: any }) => {
  const xOffset = new Animated.Value(0);

  return (
    <View>
      <Text style={{ alignSelf: "center", fontSize: 30, marginVertical: 30 }}>
        Planets Slide
      </Text>

      <Animated.ScrollView
        onScroll={Animated.event(
          [{ nativeEvent: { contentOffset: { x: xOffset } } }],
          { useNativeDriver: true }
        )}
        scrollEventThrottle={16}
        horizontal={true}
        pagingEnabled={true}
      >
        {planets.map((planet: number[], index: number) => (
          <PlanetCard key={index} xOffset={xOffset} index={index} />
        ))}
      </Animated.ScrollView>
    </View>
  );
};
