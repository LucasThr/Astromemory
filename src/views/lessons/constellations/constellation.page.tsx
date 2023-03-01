import { View, Text, Image, ScrollView } from "react-native";
import React from "react";
import { images } from "../../../assets/img";
import { ScreenLayout } from "../../../layouts/screen.layout";
import { useDimensions } from "../../../hooks/useDimensions";

type Props = {};

const ConstellationPage = (props: Props) => {
  const constellationsZodiac = [
    {
      name: "Aquarius",
      image: images.aquarius,
    },
    {
      name: "Aries",
      image: images.aries,
    },
    {
      name: "Cancer",
      image: images.cancer,
    },

    {
      name: "Capricorn",
      image: images.capricorn,
    },
    {
      name: "Gemini",
      image: images.gemini,
    },
    {
      name: "Leo",
      image: images.leo,
    },
    {
      name: "Libra",
      image: images.libra,
    },
    {
      name: "Pisces",
      image: images.pisces,
    },
    {
      name: "Sagittarius",
      image: images.sagittarius,
    },
    {
      name: "Scorpio",
      image: images.scorpio,
    },
    {
      name: "Taurus",
      image: images.taurus,
    },
    {
      name: "Virgo",
      image: images.virgo,
    },
  ];

  const { width, height } = useDimensions();

  return (
    <ScreenLayout style={{ backgroundColor: "#222B44", flex: 1 }}>
      <ScrollView showsVerticalScrollIndicator={false}>
        {constellationsZodiac.map((item, index) => {
          return (
            <View style={{ justifyContent: "center", alignItems: "center" }}>
              {/* <Text>{item.name}</Text> */}
              <Image source={item.image} style={{ width: width(100) }} />
            </View>
          );
        })}
      </ScrollView>
    </ScreenLayout>
  );
};

export default ConstellationPage;
