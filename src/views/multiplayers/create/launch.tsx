import { View, Text } from "react-native";
import { ScreenLayout } from "../../../layouts/screen.layout";
import { mainstyles } from "../../../assets/style/style";
import { List } from "../components/list";
import { Header } from "../../../components/header";
import { Button } from "../../../components/button";
import { useNavigation } from "@react-navigation/native";

export const Launch = () => {
  const navigation = useNavigation();

  const Quiz = async () => {
    // let user = await roomService.create();
    navigation.navigate("Questions");
  };

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
          Session :
        </Text>
        <Text
          style={[
            mainstyles.title,
            mainstyles.textcenter,
            { marginBottom: 40 },
          ]}
        >
          123456
        </Text>
        <List />
        <Button name="Start" onPress={Quiz} />
      </View>
    </ScreenLayout>
  );
};
