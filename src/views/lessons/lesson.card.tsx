import {
  View,
  Text,
  Image,
  Dimensions,
  Pressable,
  StyleSheet,
  ViewBase,
} from "react-native";
import React from "react";
import { useDimensions } from "../../hooks/useDimensions";
import { useNavigation } from "@react-navigation/native";
import Animated, {
  Extrapolate,
  interpolate,
  useAnimatedStyle,
} from "react-native-reanimated";
import { Button } from "../../components/button";
import { FontWeight } from "@shopify/react-native-skia";

type Props = {
  translateX: Animated.SharedValue<number>;
  index: number;
  maxIndex: number;
  lesson: Object;
};

const LessonCard = ({ translateX, index, maxIndex, lesson }: Props) => {
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
      [0.8, 1.2, 0.8],
      Extrapolate.CLAMP
    );

    const translate = interpolate(translateX.value, inputRange, [300, 0, 300]);

    // console.log("borrad", translate);
    return {
      // transform: [
      //   {
      //     scale,
      //   },
      //   {
      //     translateX: translate,
      //   },
      // ],
      // transform: [
      //   {
      //     scale,
      //   },
      // ],
    };
  });

  return (
    <Animated.View
      style={[
        {
          flex:1,
          justifyContent:'center',
          alignItems: "center",
          width: width(80),
          // marginLeft: index === 0 ? width(10) : 0,
          // marginRight: index === maxIndex ? width(10) : 0,
        },
        // rStyle,
      ]}
    >
      <Image
          style={{
            zIndex: 50,
            width: 180,
            height: 180
          }}
          source={require("../../assets/img/earth.png")}
        />
      <View
        style={{
          backgroundColor: "#0B1729",
          borderRadius: 20,
          borderWidth: 1,
          borderColor: "#818585",
          paddingVertical: 46,
          paddingHorizontal: 32,
          position: "relative",
          marginTop: -80
        }}
      >
        
        <Text
          style={{
            marginBottom: 8,
            marginTop: 60,
            fontWeight: "800",
            fontSize: 26,
            color: "white",
          }}
        >
          {lesson.name}
        </Text>
        <Text style={{ color: "white", fontSize: 18, fontWeight: "500" }}>
          Our home planet is the third planet from the Sun, and the only place
          we know things.
        </Text>
        <Text style={{color: "white", fontWeight: "bold", fontSize: 175, opacity: 0.5, position: "absolute", right: 20, top: 50}}>3</Text>
      </View>
      <Button onPress={() => navigation.navigate(lesson.link)} name="Valider" />
    </Animated.View>
  );
};

export default LessonCard;
