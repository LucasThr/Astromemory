import { Text, View, TextInput } from "react-native";

export const Input = ({title, value}:{title: string, value: string}) => {
  return (
    <View
      style={{
        backgroundColor: "#D9D9D9",
        borderRadius: 10,
        alignItems: "center",
        paddingVertical: 24,
      }}
    >
      <Text style={{fontSize: 20, fontWeight: "bold", marginBottom: 12}}>{title}</Text>
      <TextInput value={value} style={{fontSize: 30, fontWeight: "bold"}} />
    </View>
  );
};
