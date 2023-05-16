import { View, Text, Image } from "react-native";
import React, { useEffect } from "react";
import { ScreenLayout } from "../../layouts/screen.layout";
import { useNavigation, useRoute } from "@react-navigation/native";
import { userService } from "../../services/user.service";
import { Button } from "../../components/button";
import { mainstyles } from "../../assets/style/style";
import { images } from "../../assets/img";
import { Results } from "../multiplayers/components/results";
import { Database } from "../../interfaces/database";

type Props = {};

export type TRoomUser = Database["public"]["Tables"]["room_user"]["Row"];
export type TRoomUsers = TRoomUser & {
  users: Database["public"]["Tables"]["users"]["Row"];
};

export type TUser = Database["public"]["Tables"]["users"]["Row"];

const ResultSolo = (props: Props) => {
  const route = useRoute();
  const navigation = useNavigation();

  return (
    <ScreenLayout>
      <Text style={[mainstyles.title, mainstyles.textcenter]}>Resultats</Text>

      <View
        style={{
          alignItems: "center",
          marginVertical: 40,
        }}
      >
        <Image source={images.winner} style={{ width: 100, height: 100 }} />
        <Text
          style={{
            color: "white",
            fontSize: 32,
            fontWeight: "bold",
            marginVertical: 12,
          }}
        >
          {route.params?.username}
        </Text>
        <Text
          style={{
            color: "white",
            fontSize: 24,
            fontWeight: "bold",
          }}
        >
          {route.params?.score}
        </Text>
      </View>
      <Button
        name="Retour au menu"
        onPress={() => navigation.navigate("Home")}
        style={{ marginTop: 20 }}
      ></Button>
    </ScreenLayout>
  );
};

export default ResultSolo;
