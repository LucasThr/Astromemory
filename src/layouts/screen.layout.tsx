import {
  ScrollView,
  StyleProp,
  View,
  ViewStyle,
  Image,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { useDimensions } from "../hooks/useDimensions";
import { LinearGradient } from "expo-linear-gradient";
import { images } from "../assets/img";
import Animated, {
  useAnimatedStyle,
  withRepeat,
  withSequence,
  withTiming,
} from "react-native-reanimated";
import { stars } from "../mocks/stars.mocks";

export const ScreenLayout = ({
  children,
  noPadding,
  style,
}: {
  children: JSX.Element | JSX.Element[];
  noPadding?: boolean;
  style?: StyleProp<ViewStyle>;
}) => {
  const inset = useSafeAreaInsets();
  const { width, height } = useDimensions();

  const SIGNAL_COLOR = "#FFFFFF33";

  // const glowAnimation = () =>
  //   useAnimatedStyle(() => ({
  //     transform: [
  //       {
  //         scale: withRepeat(
  //           withSequence(
  //             withTiming(Math.random() * (5 - 2) + 2, {
  //               duration: Math.random() * (3000 - 1200) + 1200,
  //             }),
  //             withTiming(1, { duration: 1000 })
  //           ),
  //           -1,
  //           true
  //         ),
  //       },
  //     ],
  //   }));

  return (
    <LinearGradient
      colors={["#041D34", "#0E0223"]}
      style={[
        {
          flex: 1,
          paddingTop: inset.top,
          paddingHorizontal: noPadding ? 0 : width(6),
          position: "relative",
          justifyContent: "center",
        },

        style,
      ]}
    >
      <View
        style={{
          position: "absolute",
          top: 50,
          left: 20,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Animated.Image source={images.satellite} />
        <View
          style={{
            height: 200,
            width: 200,
            borderRadius: 999,
            borderColor: SIGNAL_COLOR,
            borderWidth: 1,
            position: "absolute",
          }}
        />
        <View
          style={{
            height: 400,
            width: 400,
            borderRadius: 999,
            borderColor: SIGNAL_COLOR,
            borderWidth: 1,
            position: "absolute",
          }}
        />
        <View
          style={{
            height: 600,
            width: 600,
            borderRadius: 999,
            borderColor: SIGNAL_COLOR,
            borderWidth: 1,
            position: "absolute",
          }}
        />
      </View>
      <View
        style={{
          position: "absolute",
          flex: 1,
          top: 0,
          backgroundColor: "purple",
        }}
      >
        {stars.map((star, index) => {
          return (
            <Animated.View
              key={index}
              style={[
                {
                  position: "absolute",
                  top: star.top,
                  left: star.left,
                  justifyContent: "center",
                  alignItems: "center",
                },
              ]}
            >
              {star.isAnimated && (
                <Animated.View
                  style={[
                    {
                      height: star.starSize * 1.3,
                      width: star.starSize * 1.3,
                      position: "absolute",
                      borderRadius: 999,
                      backgroundColor: "#FFFFFF26",
                    },
                    // star.isAnimated && glowAnimation(),
                  ]}
                />
              )}
              <View
                style={{
                  height: star.starSize,
                  width: star.starSize,
                  borderRadius: 999,
                  backgroundColor: "#FFFFFFFF",
                }}
              />
            </Animated.View>
          );
        })}
      </View>
      {children}
    </LinearGradient>
  );
};
