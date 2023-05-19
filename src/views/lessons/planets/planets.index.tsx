import {
  ScrollView,
  Text,
  Platform,
  View,
  ImageBackground,
  ActivityIndicator,
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
import { planetService } from "../../../services/planet.service";
import { useEffect, useState } from "react";
import { IPlanet } from "../../../interfaces/types";

export const Planets = () => {
  const [planets, setPlanets] = useState<IPlanet[] | []>([]);
  const translateX = useSharedValue(0);
  const { width } = useDimensions();
  const scrollHandler = useAnimatedScrollHandler((event) => {
    translateX.value = event.contentOffset.x;
  });

  const getPlanets = async () => {
    const planetsData = await planetService.getAll();
    if (!planetsData) return console.log("error");
    setPlanets(planetsData);
  };

  useEffect(() => {
    getPlanets();
  }, []);

  return (
    <ScreenLayout style={{ backgroundColor: "black" }} noPadding>
      <Header isAbsolute={true} />
      <View
        style={{
          flex: 1,
          paddingTop: 40,
        }}
      >
        <Animated.ScrollView
          onScroll={scrollHandler}
          scrollEventThrottle={16}
          pagingEnabled={true}
          snapToAlignment="center" // Snap to the center
        >
          {planets?.length > 0 ? (
            <>
              {planets?.map((planet: IPlanet, index: number) => (
                <PlanetCard
                  key={index.toString()}
                  index={index}
                  planet={planet}
                />
              ))}
            </>
          ) : (
            <ActivityIndicator />
          )}
        </Animated.ScrollView>
      </View>
    </ScreenLayout>
  );
};
