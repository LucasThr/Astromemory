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

  return (
    <View style={{ width: width(100) }}>
      <Animated.View
        style={[
          {
            flex: 1,
            justifyContent: "center",
            alignItems: "center",
            width: width(80),
            alignSelf: "center",
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
            height: 180,
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
            marginTop: -80,
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
            {lesson.description}
          </Text>
          <Text
            style={{
              color: "white",
              fontWeight: "bold",
              fontSize: 175,
              opacity: 0.5,
              position: "absolute",
              right: 20,
              top: 50,
            }}
          >
            3
          </Text>
        </View>
        <Button
          style={{ marginTop: 20 }}
          onPress={() => navigation.navigate(lesson.link)}
          name="Valider"
        />
      </Animated.View>
    </View>
  );
};

export default LessonCard;
