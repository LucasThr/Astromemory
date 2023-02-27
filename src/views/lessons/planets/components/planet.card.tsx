import {
  View,
  Text,
  Image,
  Animated,
  Dimensions,
  Pressable,
} from "react-native";
import React from "react";
import { useDimensions } from "../../../../hooks/useDimensions";
import { useNavigation } from "@react-navigation/native";

type Props = {
  index: number;
  xOffset: Animated.Value;
};

const PlanetCard = (props: Props) => {
  const { width, height } = useDimensions();
  const navigation = useNavigation();

  function rotateTransform(index: number) {
    return {
      transform: [
        {
          rotate: props.xOffset.interpolate({
            inputRange: [
              (index - 1) * width,
              index * width,
              (index + 1) * width,
            ],
            outputRange: ["30deg", "0deg", "-30deg"],
          }),
        },
      ],
    };
  }
  return (
    <Animated.View
      style={[
        { paddingTop: 50, alignItems: "center", width: width(100) },
        rotateTransform(props.index),
      ]}
    >
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

      <Pressable
        onPress={() => navigation.navigate("PlanetPage")}
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
      </Pressable>
    </Animated.View>
  );
};

export default PlanetCard;
