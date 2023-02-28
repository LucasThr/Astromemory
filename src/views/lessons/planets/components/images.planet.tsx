import { View, Text } from "react-native";
import React from "react";
import { useDimensions } from "../../../../hooks/useDimensions";

type Props = {};

const PlanetImages = (props: Props) => {
  const { width, height } = useDimensions();
  return (
    <View style={{ alignSelf: "center", marginBottom: 40 }}>
      <View
        style={{
          height: 8,
          width: 35,
          borderRadius: 20,
          marginBottom: 10,
          alignSelf: "center",
        }}
      />
      <View
        style={{
          width: width(90),
          height: height(20),
          backgroundColor: "green",
          borderRadius: 22,
          alignSelf: "center",
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
          gap: 10,
        }}
      >
        <View
          style={{
            width: 90,
            height: 90,
            backgroundColor: "white",
            borderRadius: 12,
          }}
        />
        <View
          style={{
            width: 90,
            height: 90,
            backgroundColor: "white",
            borderRadius: 12,
          }}
        />
        <View
          style={{
            width: 90,
            height: 90,
            backgroundColor: "white",
            borderRadius: 12,
          }}
        />
      </View>
    </View>
  );
};

export default PlanetImages;
