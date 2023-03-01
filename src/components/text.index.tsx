import { View, Text, StyleProp, TextStyle } from "react-native";
import React from "react";

type Props = {
  style?: StyleProp<TextStyle>;
  children: React.ReactNode;
};

const MainText = ({ style, children }: Props) => {
  return <Text style={[{ color: "white" }, style]}>{children}</Text>;
};

export default MainText;
