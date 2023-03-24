import { View, Image, Dimensions, Pressable, StyleSheet } from "react-native";
import React from "react";
import { useDimensions } from "../../../../hooks/useDimensions";
import { useNavigation } from "@react-navigation/native";
import Animated, {
  Extrapolate,
  interpolate,
  useAnimatedStyle,
} from "react-native-reanimated";
import Icon from "../../../../components/icon";
import MainText from "../../../../components/text";
import Text from "../../../../components/text";

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
        resizeMode="contain"
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
          <Text style={{ marginBottom: 10, fontWeight: "800", fontSize: 24 }}>
            {planet.name}
          </Text>
          <Text style={{marginBottom: 20}}>{planet.description}</Text>
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
                paddingHorizontal: 16,
                alignSelf: "flex-start",
                borderRadius: 12,
                backgroundColor: "#1A4379",
                width: "100%"
              },
            ]}
          >
            <Text style={{ color: "white", fontSize: 16, fontWeight: "bold" }}>Continuer</Text>
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
