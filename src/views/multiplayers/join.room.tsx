import { Text, View } from "react-native";
import { ScreenLayout } from "../../layouts/screen.layout";
import { mainstyles } from "../../assets/style/style";
import { Button } from "../../components/button";
import { Input } from "./components/input";
import { Header } from "../../components/header";
import { useState } from "react";
import { userService } from "../../services/user.service";
import { useNavigation } from "@react-navigation/native";
import { roomService } from "../../services/room.service";

export const Join = () => {
  const navigation = useNavigation();
  const [error, setError] = useState("");
  const [code, setCode] = useState(null);
  const [username, setUsername] = useState("");

  const joinRoom = async () => {
    console.log("join");

    setError("");
    if (!code) return setError("Veuillez renseigner un code");
    if (!username) return setError("Veuillez renseigner un pseudo");
    let roomCreated = await roomService.get(code);
    console.log("first", roomCreated?.error);
    if (roomCreated?.error) return setError("Code invalide");
    let userCreated = await userService.create(username);
    if (roomCreated?.error) return setError("Une erreur est survenue");
    let user_id = userCreated?.data?.id;
    let room_id = roomCreated?.data?.id;
    if (!room_id) return setError("Une erreur est survenue");
    if (!user_id) return setError("Une erreur est survenue");
    let join = await roomService.join(room_id, user_id);
    if (join?.error) return setError("Une erreur est survenue");

    navigation.navigate("Wait", {
      room_user: join.data,
      room: roomCreated?.data,
      isOwner: false,
    });
  };

  return (
    <ScreenLayout>
      <Header />
      <View style={{ flex: 1, justifyContent: "center" }}>
        <Text
          style={[
            mainstyles.title,
            mainstyles.textcenter,
            { marginBottom: 40 },
          ]}
        >
          Rejoindre un salon
        </Text>
        <View style={{ gap: 32 }}>
          <Input
            title="Pseudo"
            placeholder="Mastu"
            onChange={setUsername}
            value={username}
          />
          <Input
            onChange={setCode}
            value={code}
            title="Code de la session"
            placeholder="123456"
          />
        </View>
        <Button name="Valider" onPress={joinRoom} />
        <Text style={[mainstyles.textcenter, { color: "red" }]}>{error}</Text>
      </View>
    </ScreenLayout>
  );
};
