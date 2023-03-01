import { Text, View, Image } from "react-native";
import { ScreenLayout } from "../layouts/screen.layout";
import { ItemsMenu } from "../components/ItemsMenu";
import { mainstyles } from "../assets/style/style";
import { useDimensions } from "../hooks/useDimensions";
import { Infos } from "../components/infos";
import { images } from "../assets/img";

export const Home = () => {
  const astronaut = require("../assets/img/astronaut.jpg");
  const training = require("../assets/img/training.png");
  const { width } = useDimensions();

  return (
    <ScreenLayout>
      <View style={{ alignItems: "center", marginTop: 40, marginBottom: 24 }}>
        <Image style={{ width: 100, height: 100 }} source={images.logo} />
      </View>
      <View style={{ flex: 1 }}>
        <Text style={[mainstyles.title, { marginBottom: 24 }]}>
          Bonjour Diroshow
        </Text>

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
      </View>
      <Infos />
    </ScreenLayout>
  );
};
