import { View, Text } from "react-native";
import React from "react";
import { useDimensions } from "../../../../hooks/useDimensions";

type Props = {};

const PlanetCard = (props: Props) => {
  const { width, height } = useDimensions();
  return (
    <View
      style={{
        backgroundColor: "white",
        borderRadius: 12,
        width: width(70),
        height: height(50),
        marginHorizontal: 10,
        paddingHorizontal: 20,
        justifyContent: "center",
      }}
    >
      <Text style={{ marginBottom: 10, fontWeight: "800", fontSize: 20 }}>
        Earth
      </Text>
      <Text>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo neque
        itaque minima odit qui accusantium fugit ipsa, ratione animi commodi
        voluptas quidem eveniet, dolorem amet nesciunt nisi doloremque
        perferendis nam!
      </Text>
    </View>
  );
};

export default PlanetCard;
