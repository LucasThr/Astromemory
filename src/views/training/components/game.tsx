import { View, Text, Pressable, StyleSheet } from "react-native";
import { mainstyles } from "../../../assets/style/style";
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
  index: number,
  maxIndex: number,
  name?: string;
  description?: string;
  video?: string;
}) => {
  const videoRef = useRef(null);
  const { height, width } = useDimensions();

  return (
    <View style={{ flexDirection: "column", width: width(80),  
    marginLeft: index === 0 ? width(10) : 0,
          marginRight: index === maxIndex ? width(10) : 0}}>
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
        <Text style={style.titleGame}>{name}</Text>
        <Text style={style.infosGame}>{description}</Text>
      </View>
      <View>
        <Pressable>
          <Text>START</Text>
        </Pressable>
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
