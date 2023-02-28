import { View, Text, StyleSheet, KeyboardAvoidingView } from "react-native";
import { mainstyles } from "../../../assets/style/style";
import { Video } from "expo";

export const Game = ({
  name,
  description,
  video,
}: {
  name?: string;
  description?: string;
  video?: string;
}) => {
  return (
    <View style={mainstyles.container}>
      <View>
        {/* <Video
          source={{
            uri: "https://s3-eu-west-1.amazonaws.com/video.gallereplay.com/artistarea/Lighthouse%20stands%20in%20Istanbul%E2%80%99s%20harbour_0554659b-5dc1-43d6-8a93-b31ec6b67f63/Cinemagraph_plain/1920x1080/cinemagraph.mp4",
          }}
          rate={1}
          shouldPlay={true}
          isLooping={true}
          volume={1}
          muted={true}
          resizeMode="cover"
        /> */}
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
