import { View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

export const ScreenLayout = ({ children }: any) => {
  const inset = useSafeAreaInsets();
  return <View style={{ flex: 1, paddingTop: inset.top }}>{children}</View>;
};
