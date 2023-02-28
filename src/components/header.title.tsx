import { View, Text, Pressable } from "react-native";
import React from "react";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import Icon from "./icon";
import { useNavigation } from "@react-navigation/native";

type Props = {
  title: string;
};

const HeaderTitle = ({ title }: Props) => {
  const inset = useSafeAreaInsets();
  const navigation = useNavigation();

  return (
    <View
      style={{
        height: 60,
        width: "100%",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
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
      <Text style={{ fontSize: 30 }}>{title}</Text>
      <View
        style={{
          height: 35,
          width: 35,
        }}
      />
    </View>
  );
};

export default HeaderTitle;
