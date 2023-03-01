import {
  ImageBackground,
  Pressable,
  Text,
  StyleProp,
  TextStyle,
  ViewStyle,
} from "react-native";
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
  viewStyle?: StyleProp<ViewStyle>;
  textStyle?: StyleProp<TextStyle>;
}) => {
  const navigation = useNavigation();

  return (
    <Pressable
      onPress={() => navigation.navigate(link)}
      style={[
        {
          borderWidth: 1,
          borderColor: "white",
          borderRadius: 10,
          height: 130,
          justifyContent: "flex-end",
        },
        viewStyle,
      ]}
    >
      <ImageBackground
        style={{
          width: "100%",
          height: "100%",
          borderRadius: 12,
          overflow: "hidden",
          justifyContent: "flex-end",
          alignItems: "flex-start",
        }}
        source={image}
        resizeMode="cover"
      >
        <LinearGradient
          colors={["transparent", "rgba(0,0,0,0.8)"]}
          // start = {{x: 0, y: 1}}
          // end = {{x: 1, y: 1}}
          style={[{ width: "100%" }, { paddingVertical: 16 }]}
        >
          <Text
            style={[
              {
                fontSize: 20,
                fontWeight: "bold",
                color: "white",
                width: "100%",
              },
              textStyle,
            ]}
          >
            {title}
          </Text>
        </LinearGradient>
      </ImageBackground>
    </Pressable>
  );
};
