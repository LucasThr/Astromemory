import { Pressable, Text, View } from "react-native";

export const Bloc = ({
  reveal,
  onPress,
  data,
}: {
  reveal: boolean;
  onPress: any;
  data: Object;
}) => {
  return (
    <Pressable
      onPress={onPress}
      style={{
        backgroundColor: "#303747",
        borderRadius: 10,
        borderColor: !reveal ? "#818585" : data.isRight ? "green" : "red",
        borderWidth: 1,
        alignItems: "center",
        paddingVertical: 28,
      }}
    >
      <Text style={{ fontSize: 28, fontWeight: "bold", color: "white" }}>
        {data.answer}
      </Text>
    </Pressable>
  );
};
