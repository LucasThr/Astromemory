import { Text, View } from "react-native";
import { ScreenLayout } from "../../layouts/screen.layout";
import { ItemsMenu } from "../../components/ItemsMenu";
import { mainstyles } from "../../assets/style/style";

export const Multiplayers = () => {
  const astronaut = require("../../assets/img/astronaut.jpg");

  return (
    <ScreenLayout>
      <Text style={[mainstyles.title, { marginBottom: 24 }]}>Multijoueur</Text>
      <View style={{ gap: 32 }}>
        <ItemsMenu
          title="Création de parties"
          image={astronaut}
          link="Create"
          textStyle={{ alignItems: "center" }}
        />
        <ItemsMenu
          title="Rejoindre un salon"
          image={astronaut}
          link="Join"
        />
      </View>
    </ScreenLayout>
  );
};
