import { View, Text, Pressable } from "react-native";
import React from "react";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import Icon from "./icon";
import { useNavigation } from "@react-navigation/native";

type Props = {};

const HeaderLesson = (props: Props) => {
  const navigation = useNavigation();

  return (
    <View
      style={{
        height: 60,
        zIndex: 999,

        width: "100%",
        position: "absolute",
        justifyContent: "center",
        paddingLeft: 10,
      }}
    >
      <Pressable
        onPress={() => navigation.goBack()}
        hitSlop={10}
        style={{
          height: 35,
          width: 35,
          backgroundColor: "white",
          borderRadius: 999,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Icon name="arrow-back" size={28} color={"black"} />
      </Pressable>
    </View>
  );
};

export default HeaderLesson;
