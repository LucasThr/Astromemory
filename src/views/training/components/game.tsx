import { View, Text, StyleSheet, KeyboardAvoidingView } from "react-native";
import { mainstyles } from "../../../assets/style/style";
import { Video } from "expo-av";
import { useRef } from "react";
import { useDimensions } from "../../../hooks/useDimensions";

export const Game = ({
  name,
  description,
  video,
}: {
  name?: string;
  description?: string;
  video?: string;
}) => {
  const videoRef = useRef(null);
  const { height, width } = useDimensions();
  return (
    <View>
      <View>
        <Video
          ref={videoRef}
          style={{ height: height(50), width: width(80) }}
          source={{
            uri: "https://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4",
          }}
          useNativeControls={false}
          resizeMode="contain"
          isLooping
          // onPlaybackStatusUpdate={status => setStatus(() => status)}
        />
      </View>
      <View style={{ alignItems: "center" }}>
        <Text style={style.titleGame}>{name}</Text>
        <Text style={style.infosGame}>{description}</Text>
      </View>
    </View>
  );
};

const style = StyleSheet.create({
  titleGame: {
    textTransform: "uppercase",
    fontWeight: "bold",
    fontSize: 20,
    textAlign: "center",
    marginBottom: 12,
  },
  infosGame: {
    textAlign: "center",
    width: 160,
    alignItems: "center",
  },
});
