import { ScrollView, StyleProp, View, ViewStyle, Image } from "react-native";
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
import { Circle, Canvas } from "@shopify/react-native-skia";

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

  const STARS = [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21,
    22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40,
    22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40,
    41, 42, 43, 44, 45, 46, 47, 48, 49, 50,
  ];

  const glowAnimation = useAnimatedStyle(() => ({
    transform: [
      {
        scale: withRepeat(
          withSequence(
            withTiming(5, { duration: 1250 }),
            withTiming(1, { duration: 1000 })
          ),
          -1,
          true
        ),
      },
    ],
  }));

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
        {STARS.map((_, index) => {
          let starSize = Math.random() * 3;
          let isAnimated = Math.random() > 0.1;
          return (
            <Animated.View
              key={index}
              style={[
                {
                  position: "absolute",
                  top: Math.floor(Math.random() * height(100) + 1),
                  left: Math.floor(Math.random() * width(100) + 1),
                  justifyContent: "center",
                  alignItems: "center",
                },
              ]}
            >
              {isAnimated && (
                <Animated.View
                  style={[
                    {
                      height: starSize * 1.3,
                      width: starSize * 1.3,
                      position: "absolute",
                      borderRadius: 999,
                      backgroundColor: "#FFFFFF26",
                    },
                    isAnimated && glowAnimation,
                  ]}
                />
              )}
              <View
                style={{
                  height: starSize,
                  width: starSize,
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
