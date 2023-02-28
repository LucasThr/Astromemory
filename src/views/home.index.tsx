import { Text, View, StyleSheet } from "react-native";
import { ScreenLayout } from "../layouts/screen.layout";
import { ItemsMenu } from "../components/ItemsMenu";
import { mainstyles } from "../assets/style/style";

export const Home = () => {
  const astronaut = require("../assets/img/astronaut.jpg");
  const training = require("../assets/img/training.png");

  return (
    <ScreenLayout>
      <View style={mainstyles.container}>
        <Text style={styles.title}>Bonjour Diroshow</Text>

        <View key="menu" style={styles.grid}>
          <ItemsMenu
            title="Cours"
            image={astronaut}
            link="Planets"
            textStyle={{ paddingLeft: 32 }}
          />

          <View style={styles.flexbox}>
            <ItemsMenu
              title="Solo"
              image={astronaut}
              link="Planets"
              viewStyle={{ width: "50%" }}
              textStyle={{ textAlign: "center" }}
            />
            <ItemsMenu
              title="Multijoueur"
              image={training}
              link="Planets"
              viewStyle={{ width: "50%" }}
              textStyle={{ textAlign: "center" }}
            />
          </View>

          <ItemsMenu
            title="Entrainement"
            image={training}
            link="Training"
            textStyle={{ paddingLeft: 32 }}
          />
        </View>
      </View>
    </ScreenLayout>
  );
};

const styles = StyleSheet.create({
  grid: {
    gap: 32,
  },
  title: {
    fontWeight: "bold",
    fontSize: 25,
  },
  flexbox: {
    flexDirection: "row",
    gap: 32,
  },
});
