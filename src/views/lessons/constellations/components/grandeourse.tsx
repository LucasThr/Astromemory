import { View, Text } from "react-native";
import React from "react";
import { Canvas, Circle, Line, vec } from "@shopify/react-native-skia";

type Props = {};

export const GreatOurs = (props: Props) => {
  const stars = [
    [100, 200],
    [180, 240],
    [240, 200],
    [260, 120],
    [220, 60],
    [140, 40],
    [60, 60],
    [20, 120],
    [40, 180],
    [100, 200],
  ];

  const lines = [
    [0, 1],
    [1, 2],
    [2, 3],
    [3, 4],
    [4, 5],
    [5, 6],
    [6, 7],
    [7, 8],
    [8, 9],
  ];

  return (
    <Canvas style={{ flex: 1 }}>
      {stars.map(([x, y], index) => (
        <Circle
          key={index}
          cx={x}
          cy={y}
          r={5}
          color={index === 0 || index === 3 ? "yellow" : "white"} // Make some stars shine more
        />
      ))}
      {lines.map(([start, end], index) => (
        <Line
          key={index}
          p1={vec(stars[start][0], stars[start][1])}
          p2={vec(stars[end][0], stars[end][1])}
          strokeWidth={2}
          color="white"
        />
      ))}
    </Canvas>
  );
};
