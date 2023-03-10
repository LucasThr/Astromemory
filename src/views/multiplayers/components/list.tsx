import { Image, Text, View } from "react-native";
import { images } from "../../../assets/img";
import { Players } from "../data/player";

export const List = () => {

  return (
    <>
      <View
        style={{
          backgroundColor: "#303747",
          borderColor: "#818585",
          borderWidth: 1,
          borderRadius: 10,
          //   alignItems: "center",
          paddingVertical: 24,
          paddingHorizontal: 20,
        }}
      >
        <Text
          style={{
            fontSize: 20,
            fontWeight: "bold",
            textAlign: "center",
            marginBottom: 24,
            color: "white"
          }}
        >
          Liste des joueurs
        </Text>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            gap: 10,
            marginBottom: 10,
          }}
        >
          <Image style={{ width: 24, height: 24 }} source={images.star} />
          <Text
            style={{
              fontSize: 18,
              fontWeight: "bold",
              color: "white"
            }}
          >
            Diroshow
          </Text>
        </View>
        <View style={{ gap: 10 }}>
          {Players.map((player) => (
            <Text
              style={{
                fontSize: 18,
                fontWeight: "bold",
                color: "white"
              }}
            >
              {player}
            </Text>
          ))}
        </View>
      </View>
    </>
  );
};
