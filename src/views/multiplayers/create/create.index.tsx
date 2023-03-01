import { StyleSheet, Text, View } from "react-native";
import { ScreenLayout } from "../../../layouts/screen.layout";
import { Input } from "../components/input";
import { mainstyles } from "../../../assets/style/style";
import { Button } from "../../../components/button";

export const Create = () => {
  const style = StyleSheet.create({
    block: {
      backgroundColor: "#D9D9D9",
      borderRadius: 10,
      paddingVertical: 24,
      paddingHorizontal: 20,
    },
  });

  return (
    <ScreenLayout>
      <Text
        style={[mainstyles.title, mainstyles.textcenter, { marginBottom: 40 }]}
      >
        Création de parties
      </Text>
      <View style={{ gap: 32 }}>
        <Input title="Pseudo" value="Diroshow" />
        <View style={style.block}>
          <Text style={{ fontSize: 24, fontWeight: "bold", marginBottom: 20 }}>
            Thème abordé
          </Text>
        </View>
        <View style={style.block}>
          <Text style={{ fontSize: 24, fontWeight: "bold", marginBottom: 20 }}>
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
      <Button name="Valider" />
    </ScreenLayout>
  );
};
