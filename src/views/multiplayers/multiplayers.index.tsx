import { Text, View, StyleSheet } from "react-native";
import { ScreenLayout } from "../../layouts/screen.layout";
import { ItemsMenu } from "../../components/ItemsMenu";

export const Multiplayers = () => {
  const astronaut = require("../../assets/img/astronaut.jpg");

  return (
    <ScreenLayout>
      <Text>Multijoueur</Text>
      <ItemsMenu
        title="Création de parties"
        image={astronaut}
        link="Planets"
        textStyle={{ alignItems: "center" }}
      />
      <ItemsMenu
        title="Rejoindre un salon"
        image={astronaut}
        link="Planets"
      />
    </ScreenLayout>
  );
};
