import { View, Text, Image, ScrollView } from "react-native";
import React from "react";
import { ScreenLayout } from "../../../layouts/screen.layout";
import PlanetImages from "./components/images.planet";
import { useDimensions } from "../../../hooks/useDimensions";
import HeaderLesson from "../../../components/header.lesson";

type Props = {};

const PlanetPage = (props: Props) => {
  const { width, height } = useDimensions();
  return (
    <ScreenLayout noPadding>
      <ScrollView style={{ flex: 1 }}>
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
        <View
          style={{
            position: "absolute",
            height: 120,
            width: 120,
            backgroundColor: "green",
            borderRadius: 10,
            top: height(85),
            left: 0,
          }}
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
              }}
            >
              Earth
            </Text>
            <Text style={{ fontSize: 16 }}>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore
              non magnam minus at et facilis possimus exercitationem sunt
              dignissimos blanditiis.
            </Text>
          </View>
          <PlanetImages />
        </View>
        <View style={{ height: 400, width: 300 }} />
      </ScrollView>
    </ScreenLayout>
  );
};

export default PlanetPage;
