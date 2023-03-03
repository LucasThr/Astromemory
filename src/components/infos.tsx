import { Image, Text, View } from "react-native";
import { images } from "../assets/img";

export const Infos = () => {
  return (
    <View
      style={{
        flexDirection: "row",
        gap: 12,
        paddingHorizontal: 6,
        paddingVertical: 12,
        backgroundColor: "#354D71",
        borderRadius: 10,
        marginBottom: 40
      }}
    >
      <Image source={images.astronaut_info} style={{width: 28, height: 32}} />

      <Text style={{ fontSize: 12, fontWeight: "500", color: "white" }}>
        Savez vous que l’intensité de la lumière du soleil augmente chaque mois
        ?
      </Text>
    </View>
  );
};
