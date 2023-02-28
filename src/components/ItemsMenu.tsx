import { ImageBackground, Pressable, Text, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { mainstyles } from "../assets/style/style";
import { LinearGradient } from "expo-linear-gradient";

export const ItemsMenu = ({
  title,
  image,
  link,
  viewStyle,
  textStyle,
}: {
  title: string;
  image: string;
  link: string;
  viewStyle?: string;
  textStyle?: string;
}) => {
  const navigation = useNavigation();

  return (
    <Pressable
      onPress={() => navigation.navigate(link)}
      style={[styles.content, viewStyle]}
    >
      <ImageBackground style={styles.image} source={image} resizeMode="cover">
        <LinearGradient
          colors={["transparent", "rgba(0,0,0,0.8)"]}
          // start = {{x: 0, y: 1}}
          // end = {{x: 1, y: 1}}
          style={[mainstyles.wfull, { paddingVertical: 16 }]}
        >
          <Text style={[styles.text, textStyle]}>{title}</Text>
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
