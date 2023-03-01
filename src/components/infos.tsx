import { Text, View } from "react-native";
import Icon from "./icon";

export const Infos = () => {
  return (
    <View
      style={{
        flexDirection: "row",
        gap: 12,
        paddingHorizontal: 6,
        paddingVertical: 12,
        backgroundColor: "#D9D9D9",
        borderRadius: 10,
        marginBottom: 40
      }}
    >
      <Icon name="information-circle" size={28} color={"black"} />

      <Text style={{ fontSize: 12, fontWeight: "500" }}>
        Savez vous que l’intensité de la lumière du soleil augmente chaque mois
        ?
      </Text>
    </View>
  );
};
