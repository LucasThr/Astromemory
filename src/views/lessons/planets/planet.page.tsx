import { View, Text, Image, ScrollView, ActivityIndicator } from "react-native";
import React, { useEffect, useState } from "react";
import { ScreenLayout } from "../../../layouts/screen.layout";
import PlanetImages from "./components/images.planet";
import { useDimensions } from "../../../hooks/useDimensions";
import HeaderLesson from "../../../components/header.lesson";
import Animated, {
  Extrapolate,
  interpolate,
  interpolateColor,
  useAnimatedScrollHandler,
  useAnimatedStyle,
  useSharedValue,
} from "react-native-reanimated";
import DataPlanet from "./components/data.planet";
import DistancePlanet from "./components/distance.planet";
import { images } from "../../../assets/img";
import { Button } from "../../../components/button";
import { planetService } from "../../../services/planet.service";
import { RouteProp, useNavigation, useRoute } from "@react-navigation/native";
import { IPlanet } from "../../../interfaces/types";
import { CommonNavigatorParams } from "../../../router/types";

type Props = {};

const PlanetPage = (props: Props) => {
  const { width, height } = useDimensions();
  const translationY = useSharedValue(0);
  const navigation = useNavigation();
  const MAX_WIDTH = width(100);
  const MAX_HEIGHT = height(100);

  const { params } = useRoute<RouteProp<CommonNavigatorParams, "PlanetPage">>();
  const [planet, setPlanet] = useState<IPlanet | undefined>(undefined);

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

  const colorStyle = useAnimatedStyle(() => {
    return {
      backgroundColor: interpolateColor(
        translationY.value,
        [0, 200],
        ["#175291", "#0E1034"]
      ),
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

  const getPlanet = async (id: number) => {
    const planetsData = await planetService.get(id);
    setPlanet(planetsData);
  };

  useEffect(() => {
    getPlanet(params?.id);
  }, []);

  if (!planet) {
    return (
      <ScreenLayout>
        <ActivityIndicator />
      </ScreenLayout>
    );
  }

  return (
    <ScreenLayout noPadding style={{ backgroundColor: "white" }}>
      <Animated.ScrollView
        onScroll={scrollHandler}
        scrollEventThrottle={16}
        style={{ flex: 1 }}
      >
        <HeaderLesson />
        <Image
          style={{ position: "absolute", right: 10, marginTop: 80 }}
          // @ts-ignore
          source={images[planet.image]}
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
          {planet.id}
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
            colorStyle,
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
                color: "white",
              }}
            >
              {planet.name}
            </Text>
            <Text style={{ fontSize: 16, color: "white" }}>
              {planet.description}
            </Text>
          </View>
          <PlanetImages planet_images={planet.images} />
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
            title={"Température"}
            data={planet.temperature}
            iconName="speedometer"
          />
          <DataPlanet
            title={"Gravité"}
            data={planet.gravity}
            iconName="aperture"
          />
          <DataPlanet title={"Surface"} data={planet.surface} iconName="map" />
          <DataPlanet
            title={"Durée de rotation"}
            data={planet.rotation}
            iconName="disc"
          />
          <DistancePlanet
            distance={planet.distance}
            translationY={translationY}
          />
        </View>
        <View
          style={{
            backgroundColor: "#0E1034",
            paddingHorizontal: 20,
            paddingBottom: 30,
            marginTop: 50,
          }}
        >
          <Text style={{ color: "white", fontSize: 20, lineHeight: 30 }}>
            {planet.details}
          </Text>
        </View>
        <Button
          name="chapitre suivant"
          onPress={() => {
            navigation.goBack();
          }}
          style={{ width: width(90), alignSelf: "center" }}
        />
        <View style={{ height: 200, width: 1 }} />
      </Animated.ScrollView>
    </ScreenLayout>
  );
};

export default PlanetPage;
