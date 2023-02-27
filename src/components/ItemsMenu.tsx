import {
  ImageBackground,
  Pressable,
  Text,
  StyleSheet,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { mainstyles } from "../assets/style/style";
import { LinearGradient } from "expo-linear-gradient";

export const ItemsMenu = ({style, align, padding, title, image, link}:{style?: string, align?: string, padding?: string, title:string,image:string,link:string}) => {
  const navigation = useNavigation();

  return (
      <Pressable
        onPress={() => navigation.navigate(link)}
        style={[styles.content, style]}
      >
        <ImageBackground
          style={styles.image}
          source={image}
          resizeMode="cover"
        >
          <LinearGradient
            colors={["transparent", "rgba(0,0,0,0.8)"]}
            // start = {{x: 0, y: 1}}
            // end = {{x: 1, y: 1}}
            style={[mainstyles.wfull, { paddingVertical: 16 }]}
          >
            <Text style={[styles.text, align, padding]}>{title}</Text>
          </LinearGradient>
        </ImageBackground>
      </Pressable>
  );
};

const styles = StyleSheet.create({
  image: {
    width: "100%",
    height: "100%",
    borderRadius: 12,
    overflow: "hidden",
    justifyContent: "flex-end",
    alignItems: "flex-start",
  },
  content: {
    borderWidth: 1,
    borderColor: "white",
    borderRadius: 10,
    height: 170,
    justifyContent: "flex-end",
  },
  text: {
    fontSize: 20,
    fontWeight: "bold",
    color: "white",
    width: "100%",
  },
});
