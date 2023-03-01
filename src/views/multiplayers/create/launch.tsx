import { View, Text } from "react-native";
import { ScreenLayout } from "../../../layouts/screen.layout";
import { mainstyles } from "../../../assets/style/style";
import { List } from "../components/list";
import { Header } from "../../../components/header";
import { Infos } from "../../../components/infos";
import { Button } from "../../../components/button";

export const Launch = () => {
  return (
    <ScreenLayout>
      <Header />
      <View style={{ flex: 1, justifyContent: "center" }}>
        <Text style={[mainstyles.title, mainstyles.textcenter]}>Session :</Text>
        <Text
          style={[
            mainstyles.title,
            mainstyles.textcenter,
            { marginBottom: 40 },
          ]}
        >
          123456
        </Text>
        <List />
        <Button name="Start" />
      </View>
      <Infos />
    </ScreenLayout>
  );
};
