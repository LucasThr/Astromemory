import { View, Text } from "react-native";
import React from "react";
import Ionicons from "@expo/vector-icons/Ionicons";

type Props = {
  size: number;
  color: string;
  name: string;
};

const Icon = ({ size, color, name }: Props) => {
  return <Ionicons name={name} size={size} color={color} />;
};

export default Icon;
