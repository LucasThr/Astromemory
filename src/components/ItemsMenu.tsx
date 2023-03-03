import {
  ImageBackground,
  Pressable,
  Text,
  StyleProp,
  TextStyle,
  ViewStyle,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { LinearGradient } from "expo-linear-gradient";

export const ItemsMenu = ({
  title,
  image,
  link,
  viewStyle,
  imageStyle,
  textStyle,
}: {
  title: string;
  image: string;
  link: string;
  viewStyle?: StyleProp<ViewStyle>;
  imageStyle?: StyleProp<ViewStyle>;
  textStyle?: StyleProp<TextStyle>;
}) => {
  const navigation = useNavigation();

  return (
    <Pressable
      onPress={() => navigation.navigate(link)}
      style={[
        {
          borderWidth: 1,
          borderColor: "#818585",
          borderRadius: 10,
          height: 130,
          justifyContent: "flex-end",
        },
        viewStyle,
      ]}
    >
      <ImageBackground
        style={[
          {
            width: "100%",
            height: "100%",
            borderRadius: 12,
            overflow: "hidden",
            justifyContent: "flex-end",
            alignItems: "flex-start",
          },
          imageStyle,
        ]}
        source={image}
        resizeMode="cover"
      >
        <Text
          style={[
            {
              fontSize: 20,
              fontWeight: "bold",
              color: "white",
              width: "100%",
              paddingBottom: 16,
            },
            textStyle,
          ]}
        >
          {title}
        </Text>
      </ImageBackground>
    </Pressable>
  );
};
