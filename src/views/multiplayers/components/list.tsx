import { Text, View } from "react-native";
import { mainstyles } from "../../../assets/style/style";

export const List = () => {
  const players = [
    "Thirion7",
    "LgcCode",
    "Squeezie",
    "Mastu",
    "Joyca",
    "KevinTran",
    "Raska",
  ];
  return (
    <>
      <View
        style={{
          backgroundColor: "#D9D9D9",
          borderRadius: 10,
        //   alignItems: "center",
          paddingVertical: 24,
          paddingHorizontal: 20,
        }}
      >
        <Text style={{ fontSize: 20, fontWeight: "bold", textAlign: "center", marginBottom: 24 }}>
          Liste des joueurs
        </Text>
        <Text>Diroshow</Text>
        <View style={{ gap: 10 }}>
          {players.map((player) => (
            <Text
              style={{
                fontSize: 18,
                fontWeight: "bold"
              }}
            >
              {player}
            </Text>
          ))}
        </View>
      </View>
      <Text
        style={[mainstyles.textcenter, { fontSize: 18, fontWeight: "500" }]}
      >
        Lancement en attente de l’hôte de la partie
      </Text>
    </>
  );
};
