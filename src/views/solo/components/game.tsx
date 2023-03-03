import { View, Text, Pressable } from "react-native";
import { Button } from "../../../components/button";
import { Video } from "expo-av";
import { useRef } from "react";
import { useDimensions } from "../../../hooks/useDimensions";

export const Game = ({
  index,
  maxIndex,
  name,
  description,
  video,
}: {
  index: number;
  maxIndex?: number;
  name: string;
  description: string;
  video: string;
}) => {
  const videoRef = useRef(null);
  const { height, width } = useDimensions();

  return (
    <View
      style={{
        flexDirection: "column",
        width: width(100),
      }}
    >
      <View style={{ alignItems: "center", marginBottom: 38 }}>
        <Video
          ref={videoRef}
          style={{ height: 226, width: 226 }}
          source={{
            uri: video,
          }}
          useNativeControls={false}
          resizeMode="cover"
          isLooping
          shouldPlay
          // onPlaybackStatusUpdate={status => setStatus(() => status)}
        />
      </View>
      <View style={{ alignItems: "center" }}>
        <Text
          style={{
            textTransform: "uppercase",
            fontWeight: "bold",
            fontSize: 20,
            textAlign: "center",
            marginBottom: 20,
          }}
        >
          {name}
        </Text>
        <Text style={{ textAlign: "center" }}>{description}</Text>
      </View>
      <Button name="Start" />
    </View>
  );
};
