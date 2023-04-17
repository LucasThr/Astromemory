import { Image, Text, View } from "react-native";
import { images } from "../assets/img";
import { useEffect, useState } from "react";
import { infosService } from "../services/infos.service";

export const Infos = () => {
  const [info, setInfo] = useState<string>("");
  const MAX_ROW_INFOS = 7;
  const getInfo = async () => {
    const randomInfoIndex = Math.floor(Math.random() * (MAX_ROW_INFOS - 1) + 1);
    console.log("randomInfoIndex", randomInfoIndex);

    const infoData = await infosService.getInfo(randomInfoIndex);
    console.log("first", infoData.data);
    if (infoData.error) return;
    setInfo(infoData?.data?.info);
  };

  useEffect(() => {
    getInfo();
  }, []);
  return (
    <View
      style={{
        flexDirection: "row",
        gap: 12,
        paddingHorizontal: 6,
        paddingVertical: 12,
        backgroundColor: "#354D71",
        borderRadius: 10,
        marginBottom: 40,
        alignItems: "center",
      }}
    >
      <Image source={images.astronaut_info} style={{ width: 28, height: 32 }} />

      <Text
        style={{
          fontSize: 12,
          fontWeight: "500",
          flexShrink: 1,
          color: "white",
        }}
      >
        {info}
      </Text>
    </View>
  );
};
