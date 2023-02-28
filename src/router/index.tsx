import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Home } from "../views/home.index";
import Planets from "../views/lessons/planets/planets.index";
import PlanetPage from "../views/lessons/planets/planet.page";
import { Training } from "../views/training/training.index";

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
          name="Training"
          component={Training}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
