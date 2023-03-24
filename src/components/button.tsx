import { Pressable, View, Text } from "react-native";
import { useNavigation } from "@react-navigation/native";

export const Button = ({ name, onPress }: { name: string, onPress?: Function }) => {
  const navigation = useNavigation();

  return (
    <Pressable
      style={{
        marginTop: 46,
        borderRadius: 10,
        backgroundColor: "#1A4379",
        width: "100%"
      }}
      onPress={onPress}
    >
      <Text
        style={{
          textTransform: "uppercase",
          textAlign: "center",
          fontSize: 20,
          fontWeight: "bold",
          paddingVertical: 24,
          color: "white"
        }}
      >
        {name}
      </Text>
    </Pressable>
  );
};
