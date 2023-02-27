import { View, Text, Image } from "react-native";
import React from "react";
import { useDimensions } from "../../../../hooks/useDimensions";

type Props = {};

const PlanetCard = (props: Props) => {
  const { width, height } = useDimensions();
  return (
    <View style={{ paddingTop: 50, alignItems: "center", width: width(100) }}>
      <Image
        style={{
          top: 0,
          zIndex: 50,
          position: "absolute",
          width: 200,
          height: 200,
        }}
        source={require("../../../../assets/img/earth.png")}
      />
      <View
        style={{
          backgroundColor: "white",
          borderRadius: 12,
          width: width(70),
          height: height(50),
          marginHorizontal: 10,
          paddingHorizontal: 20,
          justifyContent: "center",
          alignItems: "center",
          zIndex: -10,
        }}
      >
        <View>
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
      </View>
    </View>
  );
};

export default PlanetCard;
