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
import Icon from "../../../../components/icon";

type Props = { planet: Object };

const PlanetCard = ({ planet, index }: Props) => {
  const navigation = useNavigation();
  const { width, height } = useDimensions();

  return (
    <Animated.View
      style={[
        {
          alignSelf: index % 2 === 0 ? "flex-start" : "flex-end",
          alignItems: "center",
          justifyContent: "space-between",
          width: width(90),
          marginVertical: 20,
          flexDirection: index % 2 === 0 ? "row" : "row-reverse",
        },
      ]}
    >
      <Image
        style={{
          zIndex: 50,
          marginLeft: index % 2 === 0 ? width(5) : 0,
          marginRight: index % 2 === 0 ? 0 : width(5),
          width: width(30),
          height: width(30),
        }}
        source={planet.image}
      />

      <Pressable
        style={{
          marginVertical: 20,
          justifyContent: "center",
          height: "auto",
          width: width(60),
        }}
      >
        <View
          style={{
            width: width(50),
            alignSelf: index % 2 === 0 ? "center" : "flex-start",
          }}
        >
          <Text style={{ marginBottom: 10, fontWeight: "800", fontSize: 30 }}>
            {planet.name}
          </Text>
          <Pressable
            onPress={() => navigation.navigate("PlanetPage")}
            hitSlop={15}
            style={({ pressed }) => [
              {
                opacity: pressed ? 0.5 : 1,
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-between",
                paddingVertical: 6,
                paddingHorizontal: 14,
                alignSelf: "flex-start",
                borderRadius: 12,
                backgroundColor: "black",
              },
            ]}
          >
            <Text style={{ color: "white", fontSize: 14 }}>Continuer</Text>
            <Icon
              style={{ marginLeft: 6 }}
              name="chevron-forward"
              color="white"
              size={20}
            />
          </Pressable>
        </View>
      </Pressable>
    </Animated.View>
  );
};

export default PlanetCard;
