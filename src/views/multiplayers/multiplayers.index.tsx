import { Text, View } from "react-native";
import { ScreenLayout } from "../../layouts/screen.layout";
import { ItemsMenu } from "../../components/ItemsMenu";
import { mainstyles } from "../../assets/style/style";
import { Infos } from "../../components/infos";
import { Header } from "../../components/header";
import { images } from "../../assets/img";

export const Multiplayers = () => {
  return (
    <ScreenLayout>
      <Header />
      <View style={{ flex: 1, justifyContent: "center" }}>
        <Text style={[mainstyles.title, { marginBottom: 24 }]}>
          Multijoueur
        </Text>
        <View style={{ gap: 32 }}>
          <ItemsMenu
            title="Création de parties"
            image={images.background_multi_create}
            link="Create"
            textStyle={{ textAlign: "center", paddingBottom: 0 }}
            imageStyle={{ justifyContent: "center" }}
          />
          <ItemsMenu
            title="Rejoindre un salon"
            image={images.background_multi_salon}
            link="Join"
            textStyle={{ textAlign: "center", paddingBottom: 0 }}
            imageStyle={{ justifyContent: "center" }}
          />
        </View>
      </View>
      <Infos />
    </ScreenLayout>
  );
};
