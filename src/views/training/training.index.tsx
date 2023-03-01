import { Text, View, Pressable, ScrollView, StyleSheet } from "react-native";
import { ScreenLayout } from "../../layouts/screen.layout";
import { Game } from "./components/game";
import { mainstyles } from "../../assets/style/style";

export const Training = () => {
  const games = [1, 2, 3, 4];
  return (
    <ScreenLayout>
      <View>
        <Text style={[mainstyles.title, mainstyles.textcenter]}>
          Entrainement
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
            />
          ))}
        </ScrollView>
      </View>
    </ScreenLayout>
  );
};
