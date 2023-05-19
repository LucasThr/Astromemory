import {
  View,
  Text,
  Image,
  ImageProps,
  ImageSourcePropType,
} from "react-native";
import React from "react";
import { useDimensions } from "../../../../hooks/useDimensions";
import { images } from "../../../../assets/img";

type Props = {
  planet_images: string[] | null;
};

const PlanetImages = ({ planet_images }: Props) => {
  const { width, height } = useDimensions();
  return (
    <View style={{ alignSelf: "center", marginBottom: 40 }}>
      <View
        style={{
          height: 8,
          width: 35,
          borderRadius: 20,
          marginBottom: 10,
          alignSelf: "center",
        }}
      />
      <View
        style={{
          width: width(90),
          height: height(18),
          backgroundColor: "#FFFFFF",
          borderRadius: 22,
          alignSelf: "center",
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
          paddingHorizontal: 16,
          gap: 16,
        }}
      >
        {planet_images?.map((image: string) => {
          return (
            <Image
              // @ts-ignore
              source={images[image]}
              style={{
                flex: 1,
                height: height(14),
                borderRadius: 12,
              }}
            />
          );
        })}
      </View>
    </View>
  );
};

export default PlanetImages;
