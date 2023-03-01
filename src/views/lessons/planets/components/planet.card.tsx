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
  index: number;
  maxIndex: number;
};

const PlanetCard = ({ index }: Props) => {
  const navigation = useNavigation();
  const { width, height } = useDimensions();

  return (
    <Animated.View
      style={[
        {
          alignSelf: "center",
          paddingTop: 50,
          alignItems: "center",
          width: width(90),
          height: height(40),
        },
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
