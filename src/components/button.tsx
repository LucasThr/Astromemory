import {
  Pressable,
  View,
  Text,
  StyleProp,
  ViewStyle,
  GestureResponderEvent,
} from "react-native";
import { useNavigation } from "@react-navigation/native";

export const Button = ({
  name,
  onPress,
  style,
}: {
  name: string;
  onPress?: ((event: GestureResponderEvent) => void) | null | undefined;
  style?: StyleProp<ViewStyle>;
}) => {
  const navigation = useNavigation();

  return (
    <Pressable
      style={({ pressed }) => [
        {
          borderRadius: 10,
          backgroundColor: "#1A4379",
          opacity: pressed ? 0.6 : 1,
          width: "100%",
        },
        style,
      ]}
      onPress={onPress}
    >
      <Text
        style={{
          textTransform: "uppercase",
          textAlign: "center",
          fontSize: 20,
          fontWeight: "bold",
          paddingVertical: 24,
          color: "white",
        }}
      >
        {name}
      </Text>
    </Pressable>
  );
};
