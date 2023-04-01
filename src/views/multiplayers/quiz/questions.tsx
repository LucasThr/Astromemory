import { ScreenLayout } from "../../../layouts/screen.layout";
import { Text, View } from "react-native";
import { Header } from "../../../components/header";
import { mainstyles } from "../../../assets/style/style";
import { Time } from "../components/time";
import { Bloc } from "../components/bloc";

export const Questions = () => {
  return (
    <ScreenLayout>
      <Header />
      <View style={{ flex: 1, justifyContent: "center" }}>
        <Text
          style={[
            mainstyles.title,
            mainstyles.textcenter,
            { fontWeight: "400" },
          ]}
        >
          Questions 1
        </Text>
        <Text
          style={[
            mainstyles.title,
            mainstyles.textcenter,
            { marginTop: 40 },
          ]}
        >
          Quel est la plus grande planète du système solaire ?
        </Text>
        <Time />
        <View style={{gap: 32}}>
          <Bloc title="Terre" />
          <Bloc title="Jupiter" />
          <Bloc title="Venus" />
        </View>
      </View>
    </ScreenLayout>
  );
};
