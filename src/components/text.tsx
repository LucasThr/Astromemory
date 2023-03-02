import { View, Text as DefaultText, StyleProp, TextStyle } from "react-native";
import React from "react";

type Props = {
  style?: StyleProp<TextStyle>;
  children: React.ReactNode;
};

const Text = ({ style, children }: Props) => {
  return (
    <DefaultText style={[{ color: "white" }, style]}>{children}</DefaultText>
  );
};

export default Text;
