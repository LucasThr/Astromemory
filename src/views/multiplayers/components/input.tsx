import { Text, View, TextInput } from "react-native";

export const Input = ({title, value}:{title: string, value: string}) => {
  return (
    <View
      style={{
        backgroundColor: "#303747",
        borderRadius: 10,
        borderColor: "#818585",
        borderWidth: 1,
        alignItems: "center",
        paddingVertical: 24,
      }}
    >
      <Text style={{fontSize: 20, color: "white", fontWeight: "bold", marginBottom: 12}}>{title}</Text>
      <TextInput value={value} style={{fontSize: 30, fontWeight: "bold", color: "white"}} />
    </View>
  );
};
