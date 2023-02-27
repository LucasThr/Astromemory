import React from "react";
import { ScreenLayout } from "../../../layouts/screen.layout";
import { PlanetsSlide } from "./planets.slide";

type Props = {};

const Planets = (props: Props) => {
  const planets = [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
  ];
  return (
    <ScreenLayout>
      <PlanetsSlide planets={planets} />
    </ScreenLayout>
  );
};

export default Planets;
