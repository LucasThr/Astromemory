import { Text, View, TextInput } from "react-native";

export const Input = ({title, value, placeholder,onChange}:{title: string, value?: string, placeholder?: string, onChange?:any}) => {
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
      <TextInput value={value} onChangeText={onChange} placeholderTextColor={"#818585"} placeholder={placeholder} style={{fontSize: 30, fontWeight: "bold", color: "white"}} />
    </View>
  );
};