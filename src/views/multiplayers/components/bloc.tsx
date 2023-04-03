import { Pressable, Text, View } from "react-native";

export const Bloc = ({ onPress, title }: { onPress: any; title: string }) => {
  return (
    <Pressable
      onPress={onPress}
      style={{
        backgroundColor: "#303747",
        borderRadius: 10,
        borderColor: "#818585",
        borderWidth: 1,
        alignItems: "center",
        paddingVertical: 28,
      }}
    >
      <Text style={{ fontSize: 28, fontWeight: "bold", color: "white" }}>
        {title}
      </Text>
    </Pressable>
  );
};
