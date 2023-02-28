import { Text, View, Pressable, StyleSheet } from "react-native";
import { ScreenLayout } from "../../layouts/screen.layout";
import { Game } from "./components/game";
import { mainstyles } from "../../assets/style/style";

export const Training = () => {
  return (
    <ScreenLayout>
      <View style={mainstyles.container}>
        <View>
          <Text style={mainstyles.titleView}>Entrainement</Text>
        </View>
        <View>
          <Game
            name="Space Stars"
            description="Relie les étoiles correspondantes le plus rapidement possible "
          />
        </View>
        <View>
          <Pressable>
            <Text>START</Text>
          </Pressable>
        </View>
      </View>
    </ScreenLayout>
  );
};
