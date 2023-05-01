export enum ShapeType {
  Line = "line",
  Triangle = "triangle",
  Rectangle = "rectangle",
  Circle = "circle",
}

export enum Color {
  Red = "red",
  Orange = "orange",
  Yellow = "yellow",
  Green = "green",
  Blue = "blue",
  Indigo = "indigo",
  Violet = "violet",
}

export interface Shape {
  type: ShapeType;
  color: Color;
  startX: number;
  startY: number;
  endX: number;
  endY: number;
}

export interface ShapesData {
  shapes: Shape[];
  currentShape: ShapeType;
  currentColor: Color;
  awaitingServer: boolean;
}

export type ShapesDispatcher = ({
  type,
  newShape,
  rndColor,
  rndShape,
}: {
  type: string;
  newShape?: Shape;
  rndColor?: Color;
  rndShape?: ShapeType;
}) => void;

export interface IShapesContext {
  shapesData: ShapesData;
  dispatch: ShapesDispatcher;
}

export const DRAWER_ACTIONS = {
  SET_RANDOM_SHAPE: "SET_RANDOM_SHAPE",
  SET_RANDOM_COLOR: "SET_RANDOM_COLOR",
  APPEND_SHAPE: "APPEND_SHAPE",
  RESET: "RESET",
  SET_WAITING: "SET_WAITING",
};

export const buttonsOptions = [
  { TEXT: "Reset", ACTION: DRAWER_ACTIONS.RESET },
  { TEXT: "Choose Random Shape", ACTION: DRAWER_ACTIONS.SET_RANDOM_SHAPE },
  { TEXT: "Choose Random Color", ACTION: DRAWER_ACTIONS.SET_RANDOM_COLOR },
];
