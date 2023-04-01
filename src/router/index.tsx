import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Home } from "../views/home.index";
import PlanetPage from "../views/lessons/planets/planet.page";
import { Solo } from "../views/solo/solo.index";
import { Multiplayers } from "../views/multiplayers/multiplayers.index";
import Lessons from "../views/lessons/lessons.index";
import Constellations from "../views/lessons/constellations/constellations.index";
import ConstellationPage from "../views/lessons/constellations/constellation.page";
import { Planets } from "../views/lessons/planets/planets.index";
import { Join } from "../views/multiplayers/join/join";
import { Wait } from "../views/multiplayers/join/wait";
import { Create } from "../views/multiplayers/create/create";
import { Launch } from "../views/multiplayers/create/launch";
import { Questions } from "../views/multiplayers/quiz/questions";

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
          name="Join"
          component={Join}
        />
        <Stack.Screen
          options={{ headerShown: false }}
          name="Wait"
          component={Wait}
        />
        <Stack.Screen
          options={{ headerShown: false }}
          name="Create"
          component={Create}
        />
        <Stack.Screen
          options={{ headerShown: false }}
          name="Launch"
          component={Launch}
        />
        <Stack.Screen
          options={{ headerShown: false }}
          name="Solo"
          component={Solo}
        />
        <Stack.Screen
          options={{ headerShown: false }}
          name="Questions"
          component={Questions}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
