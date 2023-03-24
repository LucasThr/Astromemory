import { Text, View } from "react-native";
import { ScreenLayout } from "../../../layouts/screen.layout";
import { mainstyles } from "../../../assets/style/style";
import { Button } from "../../../components/button";
import { Input } from "../components/input";
import { Header } from "../../../components/header";
import { useState } from "react";
import { userService } from "../../../services/user.service";
import { useNavigation } from "@react-navigation/native";

export const Join = () => {
  const navigation = useNavigation();

  const [name, setName] = useState<string>("");

  const joinRoom = async () => {
    let user = await userService.create(name);
    navigation.navigate("Wait")
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
            onChange={setName}
            value={name}
          />
          <Input title="Code de la session" placeholder="123456" />
        </View>
        <Button name="Valider" link="Wait" onPress={joinRoom} />
      </View>
    </ScreenLayout>
  );
};
