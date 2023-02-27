import { Text, View, StyleSheet } from "react-native";
import { ScreenLayout } from "../layouts/screen.layout";
import { mainstyles } from "../assets/style/style";
import { ItemsMenu } from "../components/ItemsMenu";

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
            padding={mainstyles.pl8}
          />

          <View style={styles.flexbox}>
            <ItemsMenu
              title="Solo"
              image={training}
              link="Planets"
              style={mainstyles.wmid}
              align={mainstyles.textcenter}
            />
            <ItemsMenu
              title="Multijoueur"
              image={training}
              link="Planets"
              style={mainstyles.wmid}
              align={mainstyles.textcenter}
            />
          </View>

          <ItemsMenu
            title="Entrainement"
            image={training}
            link="Planets"
            padding={mainstyles.pl8}
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
