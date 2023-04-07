import { View, Text } from "react-native";
import React, { useEffect, useState } from "react";

type Props = {
  timerCount: number;
  setTimer: Function;
  stop: boolean;
  onFinish: Function;
};

const Timer = ({ timerCount, setTimer, stop, onFinish }: Props) => {
  useEffect(() => {
    let interval = setInterval(() => {
      setTimer((lastTimerCount) => {
        // console.log("lastTimerCount", lastTimerCount);
        if (stop) {
          console.log("stop", stop);
          clearInterval(interval);
          return lastTimerCount;
        }
        //your redirection to Quit screen
        if (lastTimerCount <= 1) {
          clearInterval(interval);
          onFinish();
        }
        return lastTimerCount - 1;
      });
    }, 100); //each count lasts for a second
    //cleanup the interval on complete
    return () => clearInterval(interval);
  }, [stop]);

  return (
    <View
      style={{
        width: "100%",
        height: 10,
        backgroundColor: "white",
        borderRadius: 10,
        marginVertical: 40,
      }}
    >
      <View
        style={{
          width: `${(timerCount / 200) * 100}%`,
          height: "100%",
          backgroundColor: "#8DCDCD",
          borderRadius: 10,
        }}
      ></View>
    </View>
  );
};

export default Timer;
