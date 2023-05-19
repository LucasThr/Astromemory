import { NavigationState, PartialState } from "@react-navigation/native";
import type { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { IRoom, IRoomUser } from "../interfaces/types";

export type { NativeStackScreenProps } from "@react-navigation/native-stack";

export type CommonNavigatorParams = {
  Home: undefined;
  Planets: undefined;
  PlanetPage: { id: number };
  Lessons: undefined;
  Constellations: undefined;
  ConstellationPage: undefined;
  Multiplayers: undefined;
  Join: undefined;
  ResultMulti: { room: IRoom };
  ResultSolo: {
    score: number;
    username: string;
  };
  Wait: { room_user: IRoomUser; room: IRoom; isOwner: boolean };
  Create: undefined;
  Solo: undefined;
  QuestionsSolo: {
    questions_list: number[];
    username: string;
  };
  Questions: {
    room: IRoom;
    room_user: IRoomUser;
    isOwner: boolean;
  };
};

export type NavigationProp = NativeStackNavigationProp<CommonNavigatorParams>;
