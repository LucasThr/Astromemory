import { View, Text } from "react-native";
import { ScreenLayout } from "../../layouts/screen.layout";
import { mainstyles } from "../../assets/style/style";
import { Header } from "../../components/header";
import { Infos } from "../../components/infos";
import { List } from "./components/list";
import { useEffect, useState } from "react";
import { supabase } from "../../libs/supabase";
import { userService } from "../../services/user.service";
import { roomService } from "../../services/room.service";
import { Button } from "../../components/button";
import { RouteProp, useNavigation, useRoute } from "@react-navigation/native";
import { CommonNavigatorParams, NavigationProp } from "../../router/types";
import { TRoomUsers } from "./result.multi";

let subscription: any;
export const Wait = () => {
  const [users, setUsers] = useState<TRoomUsers[] | []>([]);
  const route = useRoute<RouteProp<CommonNavigatorParams, "Wait">>();
  const navigation = useNavigation<NavigationProp>();
  const { room, room_user, isOwner } = route.params;

  const fetchUsers = async (room_id: number) => {
    let { data: users, error } = await userService.getAllFromRoom(room_id);
    if (error || !users) {
      console.log("error", error);
      return;
    }
    setUsers(users);
  };

  useEffect(() => {
    subscription = supabase
      .channel("public:room_user:id=eq." + room?.id)
      .on(
        "postgres_changes",
        { event: "*", schema: "public", table: "room_user" },
        (payload) => {
          fetchUsers(room.id);
          console.log("Change received! ROOM_USER WAITING ROOM");
        }
      )
      .subscribe(async (message) => {
        console.log("message", message);
      });
  }, []);

  useEffect(() => {
    supabase
      .channel("public:rooms")
      .on(
        "postgres_changes",
        { event: "*", schema: "public", table: "rooms" },
        (payload) => {
          console.log("Change received! ROOM");
          if (payload?.new?.status == "playing") {
            // roomService.setUserToNotReady(user.id);
            // supabase.removeAllChannels();
            // setIsLoading(false);*
            console.log("room", room);
            console.log("room_user", room_user);
            supabase.removeAllChannels();
            navigation.navigate("Questions", {
              room: room,
              room_user: room_user,
              isOwner: isOwner,
            });
          }
        }
      )
      .subscribe(async (message) => {
        console.log("message", message);
      });

    return () => {
      supabase.removeChannel("public:room_user");
      supabase.removeChannel("public:rooms");
    };
  }, []);

  useEffect(() => {
    fetchUsers(room.id);
  }, []);

  return (
    <ScreenLayout>
      <Header />
      <View style={{ flex: 1, justifyContent: "center" }}>
        <Text
          style={{
            textAlign: "center",
            fontSize: 24,
            color: "#fff",
            fontWeight: "400",
            marginBottom: 10,
          }}
        >
          Session
        </Text>
        <View
          style={{
            alignSelf: "center",
            paddingHorizontal: 20,
            paddingVertical: 8,
            backgroundColor: "#000",
            borderRadius: 5,
            borderColor: "#fff",
            borderWidth: 1,
            marginBottom: 40,
          }}
        >
          <Text
            style={{
              textAlign: "center",
              fontSize: 24,
              color: "#fff",
              fontWeight: "700",
            }}
          >
            {room?.code}
          </Text>
        </View>
        <List users={users} />
        {isOwner ? (
          <Button
            style={{ marginTop: 20 }}
            name="Start"
            onPress={() => {
              console.log("okok");

              roomService.launch(room.id);
            }}
          />
        ) : (
          <Text
            style={[
              mainstyles.textcenter,
              {
                fontSize: 18,
                fontWeight: "500",
                marginTop: 46,
                color: "white",
              },
            ]}
          >
            Lancement en attente de l'hôte de la partie
          </Text>
        )}
      </View>
      <Infos />
    </ScreenLayout>
  );
};
