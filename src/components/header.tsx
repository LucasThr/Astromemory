import { View, Pressable, Image } from "react-native";
import Icon from "./icon";
import { useNavigation } from "@react-navigation/native";
import { images } from "../assets/img";

export const Header = ({ isAbsolute }: { isAbsolute?: Boolean }) => {
  const navigation = useNavigation();

  return (
    <View
      style={{
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        paddingTop: 20,
        paddingHorizontal: 16,
        position: isAbsolute && "absolute",
        top: isAbsolute ? 30 : 0,
        width: "100%",
        zIndex: 999,
      }}
    >
      <Pressable
        onPress={() => navigation.goBack()}
        hitSlop={10}
        style={{
          height: 40,
          width: 40,
          backgroundColor: "white",
          borderRadius: 999,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Icon name="chevron-back" size={28} color={"black"} />
      </Pressable>
      <View>
        <Image style={{ width: 40, height: 40 }} source={images.logo_image} />
      </View>
    </View>
  );
};
