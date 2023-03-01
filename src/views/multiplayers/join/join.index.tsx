import { Text, View } from "react-native";
import { ScreenLayout } from "../../../layouts/screen.layout";
import { mainstyles } from "../../../assets/style/style";
import { Button } from "../../../components/button";
import { Input } from "../components/input";

export const Join = () => {
  return (
    <ScreenLayout>
      <Text
        style={[mainstyles.title, mainstyles.textcenter, { marginBottom: 40 }]}
      >
        Rejoindre un salon
      </Text>
      <View style={{ gap: 32 }}>
        <Input title="Pseudo" value="Mastu" />
        <Input title="Code de la session" value="123456" />
      </View>
      <Button name="Valider" link="Wait" />
    </ScreenLayout>
  );
};
