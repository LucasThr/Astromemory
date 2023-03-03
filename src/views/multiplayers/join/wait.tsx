import { View, Text } from "react-native";
import { ScreenLayout } from "../../../layouts/screen.layout";
import { mainstyles } from "../../../assets/style/style";
import { List } from "../components/list";
import { Header } from "../../../components/header";
import { Infos } from "../../../components/infos";

export const Wait = () => {
  return (
    <ScreenLayout>
      <Header />
      <View style={{ flex: 1, justifyContent: "center" }}>
        <Text style={[mainstyles.title, mainstyles.textcenter, {fontWeight: "400"}]}>
          Salle d'attente :
        </Text>
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
        <Text
          style={[
            mainstyles.textcenter,
            { fontSize: 18, fontWeight: "500", marginTop: 46, color: "white" },
          ]}
        >
          Lancement en attente de l’hôte de la partie
        </Text>
      </View>
      <Infos />
    </ScreenLayout>
  );
};
