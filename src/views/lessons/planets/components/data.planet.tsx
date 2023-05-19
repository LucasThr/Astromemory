import { View, Text } from "react-native";
import React from "react";
import { useDimensions } from "../../../../hooks/useDimensions";
import Icon from "../../../../components/icon";

type Props = {
  title: string;
  data: string | null;
  iconName: string;
};

const DataPlanet = ({ title, data, iconName }: Props) => {
  const { width, height } = useDimensions();
  return (
    <View
      style={{
        width: width(90),
        height: 60,
        flexDirection: "row",
        alignSelf: "center",
        borderRadius: 12,
        backgroundColor: "#111441",
        alignItems: "center",
        marginVertical: 10,
      }}
    >
      <View
        style={{
          height: 40,
          width: 40,
          backgroundColor: "#FFFFFF44",
          borderRadius: 999,
          justifyContent: "center",
          marginLeft: 10,
          alignItems: "center",
        }}
      >
        <Icon name={iconName} size={22} color={"white"} />
      </View>
      <View style={{ marginLeft: 10 }}>
        <Text style={{ fontSize: 14, color: "#ffffff99", fontWeight: "400" }}>
          {title}
        </Text>
        <Text style={{ fontSize: 18, color: "white" }}>{data}</Text>
      </View>
    </View>
  );
};

export default DataPlanet;
