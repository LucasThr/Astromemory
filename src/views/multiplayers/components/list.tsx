import { Image, Text, View } from "react-native";
import { images } from "../../../assets/img";
import { TRoomUsers } from "../result.multi";

export const List = ({ users }: { users: TRoomUsers[] }) => {
  return (
    <>
      <View
        style={{
          backgroundColor: "#303747",
          borderColor: "#818585",
          borderWidth: 1,
          borderRadius: 10,
          //   alignItems: "center",
          paddingVertical: 24,
          paddingHorizontal: 20,
        }}
      >
        <Text
          style={{
            fontSize: 20,
            fontWeight: "bold",
            textAlign: "center",
            marginBottom: 24,
            color: "white",
          }}
        >
          Liste des joueurs
        </Text>
        <View style={{ gap: 10 }}>
          {users?.map((user) => (
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                gap: 10,
                marginBottom: 10,
              }}
            >
              {user?.owner && (
                <Image style={{ width: 24, height: 24 }} source={images.star} />
              )}
              <Text
                style={{
                  fontSize: 18,
                  fontWeight: "bold",
                  color: "white",
                }}
              >
                {user?.users?.name}
              </Text>
            </View>
          ))}
        </View>
      </View>
    </>
  );
};
