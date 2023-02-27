import { View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { useDimensions } from "../hooks/useDimensions";

export const ScreenLayout = ({
  children,
  noPadding,
}: {
  children: JSX.Element | JSX.Element[];
  noPadding?: boolean;
}) => {
  const inset = useSafeAreaInsets();
  const { width } = useDimensions();
  return (
    <View
      style={{
        flex: 1,
        paddingTop: inset.top,
        paddingHorizontal: noPadding ? 0 : width(8),
      }}
    >
      {children}
    </View>
  );
};
