import React, { createContext, useReducer } from "react";
import { Color, IShapesContext, ShapeType } from "../consts/definitions";
import ShapesReducer from "./ShapesReducer";

export const ShapesContext = createContext({} as IShapesContext);

interface ShapesContextProviderProps {
  children?: React.ReactNode;
}

export const ShapesContextProvider: React.FC<ShapesContextProviderProps> = ({
  children,
}) => {
  const [shapesData, dispatch] = useReducer(ShapesReducer, {}, () => ({
    shapes: [],
    currentShape: ShapeType.Line,
    currentColor: Color.Red,
    awaitingServer: false,
  }));

  return (
    <ShapesContext.Provider value={{ shapesData, dispatch }}>
      {children}
    </ShapesContext.Provider>
  );
};
