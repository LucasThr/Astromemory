import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Home } from "../views/home.index";
import PlanetPage from "../views/lessons/planets/planet.page";
import { Training } from "../views/training/training.index";
import { Multiplayers } from "../views/multiplayers/multiplayers.index";
import Lessons from "../views/lessons/lessons.index";
import Constellations from "../views/lessons/constellations/constellations.index";
import ConstellationPage from "../views/lessons/constellations/constellation.page";
import { Planets } from "../views/lessons/planets/planets.index";

export const Router = () => {
  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          options={{ headerShown: false }}
          name="Home"
          component={Home}
        />
        <Stack.Screen
          options={{ headerShown: false }}
          name="Planets"
          component={Planets}
        />
        <Stack.Screen
          options={{ headerShown: false }}
          name="PlanetPage"
          component={PlanetPage}
        />
        <Stack.Screen
          options={{ headerShown: false }}
          name="Lessons"
          component={Lessons}
        />
        <Stack.Screen
          options={{ headerShown: false }}
          name="Constellations"
          component={Constellations}
        />
        <Stack.Screen
          options={{ headerShown: false }}
          name="ConstellationPage"
          component={ConstellationPage}
        />
        <Stack.Screen
          options={{ headerShown: false }}
          name="Multiplayers"
          component={Multiplayers}
        />
        <Stack.Screen
          options={{ headerShown: false }}
          name="Training"
          component={Training}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
