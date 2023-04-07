import { View, Text } from "react-native";
import React, { useEffect } from "react";
import { ScreenLayout } from "../../layouts/screen.layout";
import { useNavigation, useRoute } from "@react-navigation/native";
import { roomService } from "../../services/room.service";
import { userService } from "../../services/user.service";
import { Button } from "../../components/button";

type Props = {};

const ResultMulti = (props: Props) => {
  const route = useRoute();
  const navigation = useNavigation();
  const [users, setUsers] = React.useState<any>([]);
  const getResultsFromRoom = async (room_id: number) => {
    const { data, error } = await userService.getAllFromRoom(room_id);
    console.log("data", data);
    let sorted = data.sort((a: any, b: any) => {
      return b.score - a.score;
    });
    setUsers(sorted);
  };

  useEffect(() => {
    getResultsFromRoom(route.params.room.id);
  }, []);

  return (
    <ScreenLayout>
      <Text>ResultMulti</Text>

      {users.map((user: any) => {
        return (
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              backgroundColor: "white",
              padding: 20,
            }}
          >
            <Text>{user?.users?.name}</Text>
            <Text>{user?.score}</Text>
            {/* <Text>{user.score}</Text> */}
          </View>
        );
      })}
      <Button
        name="Quitter"
        style={{ marginTop: 20 }}
        onPress={() => navigation.navigate("Home")}
      ></Button>
    </ScreenLayout>
  );
};

export default ResultMulti;
