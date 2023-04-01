import { StyleSheet, Text, View } from "react-native";
import { ScreenLayout } from "../../../layouts/screen.layout";
import { Input } from "../components/input";
import { mainstyles } from "../../../assets/style/style";
import { Button } from "../../../components/button";
import { Header } from "../../../components/header";
import { useState } from "react";
import { roomService } from "../../../services/room.service";
import { useNavigation } from "@react-navigation/native";

export const Create = () => {
  const navigation = useNavigation();

  const [user, setUser] = useState([])

  const createRoom = async () => {
    // let user = await roomService.create();
    navigation.navigate("Launch")
  }

  return (
    <ScreenLayout>
      <Header />
      <View style={{ flex: 1, justifyContent: "center" }}>
        <Text
          style={[
            mainstyles.title,
            mainstyles.textcenter,
            { marginBottom: 40 },
          ]}
        >
          Création de parties
        </Text>
        <View style={{ gap: 32 }}>
        <Input
            title="Pseudo"
            placeholder="Diroshow"
          />
          <View
            style={[
              style.block,
              {
                backgroundColor: "#303747",
                borderRadius: 10,
                borderColor: "#818585",
                borderWidth: 1,
              },
            ]}
          >
            <Text
              style={{
                fontSize: 24,
                fontWeight: "bold",
                marginBottom: 20,
                color: "white",
              }}
            >
              Thème abordé
            </Text>
          </View>
          <View
            style={[
              style.block,
              {
                backgroundColor: "#303747",
                borderRadius: 10,
                borderColor: "#818585",
                borderWidth: 1,
              },
            ]}
          >
            <Text
              style={{ fontSize: 24, fontWeight: "bold", marginBottom: 20, color: "white" }}
            >
              Nombre de questions
            </Text>
            <View style={{ flexDirection: "row" }}>
              <View
                style={{
                  borderRadius: 10,
                  borderWidth: 1,
                  paddingHorizontal: 10,
                  paddingVertical: 5,
                }}
              >
                <Text style={{ fontSize: 24, fontWeight: "bold" }}>7</Text>
              </View>
            </View>
          </View>
        </View>
        <Button name="Valider" onPress={createRoom}/>
      </View>
    </ScreenLayout>
  );
};

const style = StyleSheet.create({
  block: {
    backgroundColor: "#D9D9D9",
    borderRadius: 10,
    paddingVertical: 24,
    paddingHorizontal: 20,
  },
});