import { Image, Text, View } from "react-native";
import { images } from "../../../assets/img";

export const Results = () => {
  return (
    <View
      style={{
        paddingHorizontal: 24,
        paddingVertical: 10,
        backgroundColor: "#0D2A3A",
        borderRadius: 5,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
      }}
    >
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          gap: 12,
        }}
      >
        <Image source={images.second} style={{ width: 40, height: 40 }} />
        <Text style={{ fontSize: 20, color: "white" }}>Lucas</Text>
      </View>
      <View>
        <Text style={{ fontSize: 20, fontWeight: "bold", color: "white" }}>8000</Text>
      </View>
    </View>
  );
};
