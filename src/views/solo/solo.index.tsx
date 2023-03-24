import { Text, View, ScrollView } from "react-native";
import { ScreenLayout } from "../../layouts/screen.layout";
import { Game } from "./components/game";
import { mainstyles } from "../../assets/style/style";
import { Header } from "../../components/header";
import { Infos } from "../../components/infos";

export const Solo = () => {
  const games = [1, 2, 3, 4];

  return (
    <ScreenLayout>
      <Header />

      <View style={{ flex: 1, justifyContent: "center" }}>
        <View>
          <Text
            // style={[
            //   mainstyles.title,
            //   mainstyles.textcenter,
            //   { marginBottom: 40 },
            // ]}
          >
            Solo
          </Text>
        </View>
        <View>
          <ScrollView
            horizontal={true}
            snapToAlignment="center"
            pagingEnabled={true}
          >
            {games.map((game, index) => (
              <Game
                key={index.toString()}
                name="Space Stars"
                description="Relie les étoiles correspondantes le plus rapidement possible"
                video="https://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4"
                index={index}
                maxIndex={games.length - 1}
              />
            ))}
          </ScrollView>
        </View>
      </View>

      <Infos />
    </ScreenLayout>
  );
};
