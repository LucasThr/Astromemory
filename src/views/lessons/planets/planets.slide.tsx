import { ScrollView, Text, View } from "react-native";
import PlanetCard from "./components/planet.card";

export const PlanetsSlide = ({ planets }: { planets: any }) => {
  return (
    <View>
      <Text style={{ alignSelf: "center", fontSize: 30, marginVertical: 30 }}>
        Planets Slide
      </Text>

      <ScrollView horizontal={true}>
        {planets.map((planet: any) => (
          <PlanetCard key={planet.id} />
        ))}
      </ScrollView>
    </View>
  );
};
