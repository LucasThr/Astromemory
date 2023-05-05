import { StyleSheet, Text, View } from "react-native";
import { ScreenLayout } from "../../layouts/screen.layout";
import { Input } from "./components/input";
import { mainstyles } from "../../assets/style/style";
import { Button } from "../../components/button";
import { Header } from "../../components/header";
import { useState } from "react";
import { roomService } from "../../services/room.service";
import { useNavigation } from "@react-navigation/native";
import { userService } from "../../services/user.service";
import { log } from "react-native-reanimated";
import Slider from "@react-native-community/slider";

export const Create = () => {
  const navigation = useNavigation();

  const [username, setUsername] = useState("");
  const [numberOfQuestions, setNumberOfQuestions] = useState(7);
  const [themes, setThemes] = useState([]);
  const [error, setError] = useState("");
  const createRoom = async () => {
    setError("");
    if (!username) return setError("Veuillez renseigner un pseudo");
    let userCreated = await userService.create(username);
    if (!userCreated?.data?.id) return setError("Une erreur est survenue");
    let user_id = userCreated?.data?.id;
    let roomCreated = await roomService.create(
      user_id,
      numberOfQuestions,
      "waiting",
      themes
    );
    let room_id = roomCreated?.data?.id;
    console.log("roomCreated?.error", roomCreated?.error);
    if (roomCreated?.error) return setError("Une erreur est survenue");

    let userRoom = await roomService.addUserToRoom(user_id, room_id, true);
    if (userRoom.error) return setError("Une erreur est survenue");

    navigation.navigate("Wait", {
      room_user: userRoom.data,
      room: roomCreated?.data,
      isOwner: true,
    });
  };

  return (
    <ScreenLayout enableDismiss>
      <Header />
      <View style={{ flex: 1, justifyContent: "center" }}>
        <Text
          style={[
            mainstyles.title,
            mainstyles.textcenter,
            { marginBottom: 40 },
          ]}
        >
          Création de la partie
        </Text>
        <View style={{ gap: 32 }}>
          <Input onChange={setUsername} title="Pseudo" placeholder="Diroshow" />
          <View
            style={[
              style.block,
              {
                backgroundColor: "#303747",
                borderRadius: 10,
                borderColor: "#818585",
                borderWidth: 1,
              },
            ]}
          >
            <Text
              style={{
                fontSize: 24,
                fontWeight: "bold",
                marginBottom: 20,
                color: "white",
              }}
            >
              Thème abordé
            </Text>
          </View>
          <View
            style={[
              style.block,
              {
                backgroundColor: "#303747",
                borderRadius: 10,
                borderColor: "#818585",
                borderWidth: 1,
              },
            ]}
          >
            <Text
              style={{
                fontSize: 24,
                fontWeight: "bold",
                marginBottom: 20,
                color: "white",
              }}
            >
              Nombre de questions
            </Text>
            <View style={{ flexDirection: "row", gap: 20 }}>
              <View
                style={{
                  borderRadius: 10,
                  borderWidth: 1,
                  paddingHorizontal: 10,
                  paddingVertical: 5,
                  backgroundColor: "white"
                }}
              >
                <Text style={{ fontSize: 24, fontWeight: "bold" }}>
                  {numberOfQuestions}
                </Text>
              </View>
              <Slider
                style={{ width: 220, height: 40 }}
                minimumValue={1}
                maximumValue={10}
                minimumTrackTintColor="#FFFFFF"
                maximumTrackTintColor="#000000"
                onValueChange={(value) => setNumberOfQuestions(value)}
                value={numberOfQuestions}
                step={1}
              />
            </View>
          </View>
        </View>
        <Button style={{ marginTop: 46 }} name="Valider" onPress={createRoom} />
      </View>
    </ScreenLayout>
  );
};

const style = StyleSheet.create({
  block: {
    backgroundColor: "#D9D9D9",
    borderRadius: 10,
    paddingVertical: 24,
    paddingHorizontal: 20,
  },
});
