import {
  View,
  Text,
  Image,
  Dimensions,
  Pressable,
  StyleSheet,
} from "react-native";
import React from "react";
import { useDimensions } from "../../../../hooks/useDimensions";
import { useNavigation } from "@react-navigation/native";
import Animated, {
  Extrapolate,
  interpolate,
  useAnimatedStyle,
} from "react-native-reanimated";

type Props = {
  translateX: Animated.SharedValue<number>;
  index: number;
};

const PlanetCard = ({ translateX, index }: Props) => {
  const navigation = useNavigation();
  const { width, height } = useDimensions();

  const inputRange = [
    (-index - 1) * width(80),
    index * width(80),
    (index + 1) * width(80),
  ];

  const rStyle = useAnimatedStyle(() => {
    const scale = interpolate(
      translateX.value,
      inputRange,
      [0, 1, 0],
      Extrapolate.CLAMP
    );

    const translate = interpolate(translateX.value, inputRange, [300, 0, 300]);

    console.log("borrad", translate);
    return {
      transform: [
        {
          scale,
        },
        {
          translateX: translate,
        },
      ],
    };
  });

  return (
    <Animated.View
      style={[
        {
          paddingTop: 50,
          alignItems: "center",
          width: width(100),
          // marginLeft: width(10),
        },
        // rStyle,
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
