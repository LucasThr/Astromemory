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
        backgroundColor: !reveal
          ? "#303747"
          : data.isRight
          ? "#029963"
          : "#303747",
        borderRadius: 10,
        borderColor: "#818585",
        borderWidth: !reveal ? 1 : data.isRight ? 0 : 1,
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
