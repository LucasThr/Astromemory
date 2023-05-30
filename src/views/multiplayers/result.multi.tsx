import { View, Text, Image } from "react-native";
import React, { useEffect } from "react";
import { ScreenLayout } from "../../layouts/screen.layout";
import { RouteProp, useNavigation, useRoute } from "@react-navigation/native";
import { roomService } from "../../services/room.service";
import { userService } from "../../services/user.service";
import { Button } from "../../components/button";
import { mainstyles } from "../../assets/style/style";
import { images } from "../../assets/img";
import { Results } from "./components/results";
import { Database } from "../../interfaces/database";
import { TRoomUser } from "../solo/result.solo";
import { CommonNavigatorParams, NavigationProp } from "../../router/types";

type Props = {};

export type TRoomUsers = TRoomUser & {
  users: Database["public"]["Tables"]["users"]["Row"];
};

export type TUser = Database["public"]["Tables"]["users"]["Row"];

const ResultMulti = (props: Props) => {
  const route = useRoute<RouteProp<CommonNavigatorParams, "ResultMulti">>();
  const navigation = useNavigation<NavigationProp>();
  const [users, setUsers] = React.useState<TRoomUsers[]>([]);
  const getResultsFromRoom = async (room_id: number) => {
    const { data, error } = await userService.getAllFromRoom(room_id);
    if (error || !data) {
      console.log("error", error);
      return;
    }

    let sorted = data.sort((a, b) => {
      return b.score - a.score;
    });
    setUsers(sorted);
  };

  useEffect(() => {
    getResultsFromRoom(route.params.room.id);
  }, []);

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
          {users[0]?.users?.name}
        </Text>
        <Text
          style={{
            color: "white",
            fontSize: 24,
            fontWeight: "bold",
          }}
        >
          {users[0]?.score}
        </Text>
      </View>
      <Results users={users.shift()} />
      <Button
        name="Retour au menu"
        onPress={() => navigation.navigate("Home")}
        style={{ marginTop: 20 }}
      ></Button>
    </ScreenLayout>
  );
};

export default ResultMulti;
