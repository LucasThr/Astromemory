import { Text, View } from "react-native";
import { ScreenLayout } from "../../../layouts/screen.layout";
import { mainstyles } from "../../../assets/style/style";
import { Button } from "../../../components/button";
import { Input } from "../components/input";
import { Header } from "../../../components/header";
import { Infos } from "../../../components/infos";

export const Join = () => {
  return (
    <ScreenLayout>
      <Header />
      <View style={{ flex: 1, justifyContent: "center"}}>
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
          <Input title="Pseudo" value="Mastu" />
          <Input title="Code de la session" value="123456" />
        </View>
        <Button name="Valider" link="Wait" />
      </View>
      <Infos />
    </ScreenLayout>
  );
};
