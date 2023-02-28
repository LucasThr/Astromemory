import { View, Text } from "react-native";
import React from "react";
import Icon from "../../../../components/icon";
import Animated, {
  Extrapolate,
  SharedValue,
  interpolate,
  useAnimatedStyle,
} from "react-native-reanimated";
import { useDimensions } from "../../../../hooks/useDimensions";

type Props = {
  translationY: SharedValue<number>;
};

const DistancePlanet = ({ translationY }: Props) => {
  const { width } = useDimensions();

  const rocketStyle = useAnimatedStyle(() => {
    const translateYAnimated = interpolate(
      translationY.value,
      [800, 1100],
      [-115, 115],
      Extrapolate.CLAMP
    );
    return {
      transform: [
        {
          translateX: translateYAnimated,
        },
      ],
    };
  });
  return (
    <View style={{ marginTop: 20 }}>
      <Text
        style={{
          fontSize: 20,
          opacity: 0.8,
          alignSelf: "center",
          marginBottom: 10,
          color: "white",
        }}
      >
        Distance depuis la Terre
      </Text>
      <Text
        style={{
          fontSize: 20,
          fontWeight: "bold",
          alignSelf: "center",
          marginBottom: 20,
          color: "white",
        }}
      >
        100 005 555 km
      </Text>
      <View
        style={{
          height: 60,
          width: width(90),
          borderRadius: 12,
          alignSelf: "center",
          backgroundColor: "white",
          alignItems: "center",
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        <Icon style={{ marginLeft: 10 }} name="earth" color="black" size={22} />
        <View style={{ position: "relative" }}>
          <View
            style={{
              position: "absolute",
              alignSelf: "center",
              height: 20,
              bottom: 10,
              opacity: 0.2,
              width: width(65),
              borderBottomWidth: 2,
              borderStyle: "dashed",
            }}
          />
          <Animated.View style={[rocketStyle]}>
            <Icon name="rocket" color="black" size={22} />
          </Animated.View>
        </View>

        <Icon
          style={{ marginRight: 10 }}
          name="earth"
          color="black"
          size={22}
        />
      </View>
    </View>
  );
};

export default DistancePlanet;
