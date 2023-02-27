import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { Router } from "./src/router";
import { SafeAreaProvider } from "react-native-safe-area-context";

export default function App() {
  return (
    <SafeAreaProvider>
      <Router />
    </SafeAreaProvider>
  );
}
