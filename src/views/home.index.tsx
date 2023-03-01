import { Text, View, StyleSheet } from "react-native";
import { ScreenLayout } from "../layouts/screen.layout";
import { ItemsMenu } from "../components/ItemsMenu";
import { mainstyles } from "../assets/style/style";
import { useDimensions } from "../hooks/useDimensions";

export const Home = () => {
  const astronaut = require("../assets/img/astronaut.jpg");
  const training = require("../assets/img/training.png");
  const { width } = useDimensions();

  return (
    <ScreenLayout>
      <Text style={mainstyles.title}>Bonjour Diroshow</Text>

      <View key="menu" style={{ gap: 32 }}>
        <ItemsMenu
          title="Cours"
          image={astronaut}
          link="Lessons"
          textStyle={{ paddingLeft: 32 }}
        />

        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <ItemsMenu
            title="Solo"
            image={astronaut}
            link="Planets"
            viewStyle={{ width: width(44) - 16 }}
            textStyle={{ textAlign: "center" }}
          />
          <ItemsMenu
            title="Multijoueur"
            image={training}
            link="Multiplayers"
            viewStyle={{ width: width(44) - 16 }}
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
    </ScreenLayout>
  );
};
