import {
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  Text,
  View,
} from "react-native";
import { ScreenLayout } from "../../layouts/screen.layout";
import { mainstyles } from "../../assets/style/style";
import { Button } from "../../components/button";
import { Input } from "./components/input";
import { Header } from "../../components/header";
import { useState } from "react";
import { userService } from "../../services/user.service";
import { useNavigation } from "@react-navigation/native";
import { roomService } from "../../services/room.service";
import { DismissKeyboard } from "../../layouts/keyboard.layout";
import { NavigationProp } from "../../router/types";

export const Join = () => {
  const navigation = useNavigation<NavigationProp>();
  const [error, setError] = useState("");
  const [code, setCode] = useState(undefined);
  const [username, setUsername] = useState("");

  const joinRoom = async () => {
    console.log("join");

    setError("");
    if (!code) return setError("Veuillez renseigner un code");
    if (!username) return setError("Veuillez renseigner un pseudo");
    let roomCreated = await roomService.get(code);
    if (roomCreated?.error || roomCreated.data === null)
      return setError("Code invalide");
    let userCreated = await userService.create(username);
    if (userCreated?.error) return setError("Une erreur est survenue");
    let user_id = userCreated?.data?.id;
    let room_id = roomCreated?.data?.id;
    if (!room_id) return setError("Une erreur est survenue");
    if (!user_id) return setError("Une erreur est survenue");
    let join = await roomService.join(room_id, user_id);
    if (join?.error || join.data === null)
      return setError("Une erreur est survenue");

    navigation.navigate("Wait", {
      room_user: join.data,
      room: roomCreated?.data,
      isOwner: false,
    });
  };

  return (
    <ScreenLayout enableDismiss>
      <Header />
      <View
        style={{
          flex: 1,
          justifyContent: "center",
        }}
      >
        <Text
          style={[
            mainstyles.title,
            mainstyles.textcenter,
            { marginBottom: 40 },
          ]}
        >
          Rejoindre un salon
        </Text>
        <KeyboardAvoidingView
          behavior={Platform.OS === "ios" ? "padding" : "height"}
          style={{ gap: 32 }}
        >
          <Input
            title="Pseudo"
            placeholder="Mastu"
            onChange={setUsername}
            value={username}
          />

          <Input
            keyboardType="numeric"
            onChange={setCode}
            value={code}
            title="Code de la session"
            placeholder="123456"
          />
          <Button style={{ marginTop: 20 }} name="Valider" onPress={joinRoom} />
          <Text style={[mainstyles.textcenter, { color: "red" }]}>{error}</Text>
        </KeyboardAvoidingView>
      </View>
    </ScreenLayout>
  );
};
