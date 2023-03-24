import { View, Text, Image, ScrollView } from "react-native";
import React from "react";
import { ScreenLayout } from "../../../layouts/screen.layout";
import PlanetImages from "./components/images.planet";
import { useDimensions } from "../../../hooks/useDimensions";
import HeaderLesson from "../../../components/header.lesson";
import Animated, {
  Extrapolate,
  interpolate,
  useAnimatedScrollHandler,
  useAnimatedStyle,
  useSharedValue,
} from "react-native-reanimated";
import DataPlanet from "./components/data.planet";
import DistancePlanet from "./components/distance.planet";

type Props = {};

const PlanetPage = (props: Props) => {
  const { width, height } = useDimensions();
  const translationY = useSharedValue(0);
  const MAX_WIDTH = width(100);
  const MAX_HEIGHT = height(100);

  const cubeStyle = useAnimatedStyle(() => {
    const widthAnimated = interpolate(
      translationY.value,
      [0, 200],
      [120, MAX_WIDTH],
      Extrapolate.CLAMP
    );
    const heightAnimated = interpolate(
      translationY.value,
      [0, 600],
      [120, MAX_HEIGHT / 2.2],
      Extrapolate.CLAMP
    );

    const translateYAnimated = interpolate(
      translationY.value,
      [200, 600],
      [0, MAX_HEIGHT / 4],
      Extrapolate.CLAMP
    );
    return {
      transform: [
        {
          translateY: translateYAnimated,
        },
      ],
      width: widthAnimated,
      height: heightAnimated * 2,
    };
  });

  const titleStyle = useAnimatedStyle(() => {
    const translateXAnimated = interpolate(
      translationY.value,
      [0, 200],
      [-160, 0],
      Extrapolate.CLAMP
    );
    const translateYAnimated = interpolate(
      translationY.value,
      [100, 600],
      [-120, 0],
      Extrapolate.CLAMP
    );
    return {
      transform: [
        {
          translateY: translateYAnimated,
        },
        {
          translateX: translateXAnimated,
        },
      ],
    };
  });

  const scrollHandler = useAnimatedScrollHandler((event) => {
    translationY.value = event.contentOffset.y;
  });

  return (
    <ScreenLayout noPadding style={{backgroundColor: "white"}}>
      <Animated.ScrollView
        onScroll={scrollHandler}
        scrollEventThrottle={16}
        style={{ flex: 1 }}
      >
        <HeaderLesson />
        <Image
          style={{ position: "absolute" }}
          source={require("../../../assets/img/background_planet.png")}
        />
        <Text
          style={{
            position: "absolute",
            fontWeight: "900",
            color: "gray",
            fontSize: 250,
            opacity: 0.2,
            top: 120,
            left: 50,
          }}
        >
          3
        </Text>
        <Animated.View
          style={[
            {
              position: "absolute",
              height: 120,
              width: 120,
              backgroundColor: "#0E1034",
              borderRadius: 10,
              top: height(85),
              left: 0,
            },
            cubeStyle,
          ]}
        />
        <View
          style={{
            height: height(100),
            justifyContent: "flex-end",
          }}
        >
          <View style={{ marginBottom: 30, paddingHorizontal: width(6) }}>
            <Text
              style={{
                fontSize: 35,
                fontWeight: "900",
                marginLeft: 4,
                marginBottom: 10,
                color: "white"
              }}
            >
              Earth
            </Text>
            <Text style={{ fontSize: 16, color: "white" }}>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore
              non magnam minus at et facilis possimus exercitationem sunt
              dignissimos blanditiis.
            </Text>
          </View>
          <PlanetImages />
        </View>
        <View style={{ height: 200, width: 300 }} />
        <View>
          <Animated.Text
            style={[
              {
                fontSize: 40,
                marginTop: -60,
                marginBottom: 30,
                textAlign: "center",
                fontWeight: "900",
                color: "white",
              },
              titleStyle,
            ]}
          >
            Données
          </Animated.Text>
          <DataPlanet
            title={"Average Orbital Speed"}
            data={"24 007 km/h"}
            iconName="speedometer"
          />
          <DataPlanet title={"Satellites"} data={2} iconName="aperture" />
          <DataPlanet
            title={"Surfaces Area"}
            data={"144 798 500 km2"}
            iconName="map"
          />
          <DataPlanet
            title={"Rotation Period"}
            data={"1.058725525625 d"}
            iconName="disc"
          />

          <DistancePlanet translationY={translationY} />
        </View>
        <View style={{ height: 400, width: 300 }} />
        <View style={{ height: 400, width: 300 }} />
      </Animated.ScrollView>
    </ScreenLayout>
  );
};

export default PlanetPage;
