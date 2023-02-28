import { View, Text, StyleProp, ViewStyle } from "react-native";
import React from "react";
import Ionicons from "@expo/vector-icons/Ionicons";

type Props = {
  size: number;
  color: string;
  name: string;
  style?: StyleProp<ViewStyle>;
};

const Icon = ({ size, color, name, style }: Props) => {
  return <Ionicons style={style} name={name} size={size} color={color} />;
};

export default Icon;
