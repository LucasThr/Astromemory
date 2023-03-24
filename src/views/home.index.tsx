import { Text, View, Image } from "react-native";
import { ScreenLayout } from "../layouts/screen.layout";
import { ItemsMenu } from "../components/ItemsMenu";
import { mainstyles } from "../assets/style/style";
import { useDimensions } from "../hooks/useDimensions";
import { Infos } from "../components/infos";
import { images } from "../assets/img";

export const Home = () => {
  const { width } = useDimensions();

  return (
    <ScreenLayout>
      <View style={{ alignItems: "center", marginTop: 40, marginBottom: 60 }}>
        <Image style={{ width: 190, height: 130 }} source={images.logo} />
      </View>
      <View style={{ flex: 1 }}>
        <Text style={[mainstyles.title, { marginBottom: 24 }]}>Bienvenue</Text>

        <View key="menu" style={{ gap: 32 }}>
          <ItemsMenu
            title="Cours"
            image={images.background_cours}
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
              image={images.background_solo}
              link="Solo"
              viewStyle={{ width: width(44) - 16 }}
              textStyle={{ textAlign: "center" }}
            />
            <ItemsMenu
              title="Multijoueur"
              image={images.background_multi}
              link="Multiplayers"
              viewStyle={{ width: width(44) - 16 }}
              textStyle={{ textAlign: "center" }}
            />
          </View>
        </View>
      </View>
      <Infos />
    </ScreenLayout>
  );
};
