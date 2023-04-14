import { View, Text, Pressable } from "react-native";
import React from "react";
import { useDimensions } from "../../../hooks/useDimensions";
import { ScreenLayout } from "../../../layouts/screen.layout";
import { useNavigation } from "@react-navigation/native";
import { GreatOurs } from "./components/grandeourse";

type Props = {};

const Constellations = (props: Props) => {
  const navigation = useNavigation();
  return (
    <ScreenLayout>
      <Text>Constellations</Text>
      <Pressable onPress={() => navigation.navigate("ConstellationPage")}>
        <Text>Pressable</Text>
      </Pressable>
      <GreatOurs />
    </ScreenLayout>
  );
};

export default Constellations;
