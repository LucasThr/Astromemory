import { Pressable, View, Text } from "react-native";
import { useNavigation } from "@react-navigation/native";

export const Button = ({ name, link }: { name: string; link?: string }) => {
  const navigation = useNavigation();

  return (
    <Pressable
      style={{
        marginTop: 46,
        borderRadius: 100,
        backgroundColor: "#D9D9D9"
      }}
      onPress={() => navigation.navigate(link)}
    >
      <Text
        style={{
          textTransform: "uppercase",
          textAlign: "center",
          fontSize: 20,
          fontWeight: "bold",
          paddingVertical: 24,
        }}
      >
        {name}
      </Text>
    </Pressable>
  );
};
