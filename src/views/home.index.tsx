import { ImageBackground, Text, View, StyleSheet } from "react-native";
import { ScreenLayout } from "../layouts/screen.layout";

export const Home = () => {
  return (
    <ScreenLayout>
      <View style={styles.container}>
        <Text style={styles.title}>Bonjour Diroshow</Text>

        <View key="menu" style={styles.grid}>
          <View style={[styles.content, styles.wfull]}>
            <Text style={styles.textcenter}>Cours</Text>
          </View>
          <View style={styles.flexbox}>
            <View style={[styles.content, styles.w50]}>
              <ImageBackground
                style={styles.wfull}
                source={require("../assets/img/astronaut.jpg")}
                resizeMode="cover"
              >
                <Text style={styles.textcenter}>Solo</Text>
              </ImageBackground>
            </View>
            <View style={[styles.content, styles.w50]}>
              <Text>MultiJoueur</Text>
            </View>
          </View>
          <View style={[styles.content, styles.wfull]}>
            <Text>Entrainement</Text>
          </View>
        </View>
      </View>
      </ScreenLayout>
  )
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    gap: 24,
  },
  grid: {
    gap: 32,
  },
  textcenter: {
    textAlign: "center",
  },
  title: {
    fontWeight: "bold",
    fontSize: 25,
  },
  content: {
    borderWidth: 1,
    borderColor: "white",
    borderRadius: 10,
    padding: 20,
    height: 130,
    alignItems: "center",
    justifyContent: "flex-end",
  },
  w50: {
    width: "45%",
  },
  wfull: {
    width: "100%",
  },
  hfull: {
    height: "100%",
  },
  flexbox: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  text: {
    fontSize: 25,
    fontWeight: "bold",
  },
});
