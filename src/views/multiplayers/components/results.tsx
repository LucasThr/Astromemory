import { Image, Text, View } from "react-native";
import { images } from "../../../assets/img";
import { TRoomUsers } from "../result.multi";

export const Results = ({ users }: { users: TRoomUsers[] }) => {
  if (users?.length > 0) {
    users?.map((user: TRoomUsers) => {
      return (
        <View
          style={{
            paddingHorizontal: 24,
            paddingVertical: 10,
            backgroundColor: "#0D2A3A",
            borderRadius: 5,
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              gap: 12,
            }}
          >
            <Image source={images.second} style={{ width: 40, height: 40 }} />
            <Text style={{ fontSize: 20, color: "white" }}>
              {user.users.name}
            </Text>
          </View>
          <View>
            <Text style={{ fontSize: 20, fontWeight: "bold", color: "white" }}>
              {user.score}
            </Text>
          </View>
        </View>
      );
    });
  } else {
    return <View></View>;
  }
};
