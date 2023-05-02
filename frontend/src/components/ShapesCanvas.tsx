import React, { useState, useRef, useEffect, useContext } from "react";
import { DRAWER_ACTIONS } from "./consts/definitions";
import { ShapesContext } from "./context/ShapesContext";
import { redrawShapes } from "./canvasHelpers";
import { Paper } from "@mui/material";
import { canvas, canvasContainer } from "./consts/InlineStyles";

interface ShapesCanvasProps {}
export const ShapesCanvas: React.FC<ShapesCanvasProps> = () => {
  const { shapesData, dispatch } = useContext(ShapesContext);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [isDrawing, setIsDrawing] = useState(false);
  const [startX, setStartX] = useState(0);
  const [startY, setStartY] = useState(0);
  const [endX, setEndX] = useState(0);
  const [endY, setEndY] = useState(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas?.getContext("2d");
    if (ctx && canvas) {
      redrawShapes(ctx, canvas, shapesData);
    }
  }, [shapesData.shapes]);

  const handleMouseDown = (event: React.MouseEvent<HTMLCanvasElement>) => {
    setIsDrawing(true);
    setStartX(event.nativeEvent.offsetX);
    setStartY(event.nativeEvent.offsetY);
    setEndX(event.nativeEvent.offsetX);
    setEndY(event.nativeEvent.offsetY);
  };

  const handleMouseMove = (event: React.MouseEvent<HTMLCanvasElement>) => {
    if (isDrawing) {
      setEndX(event.nativeEvent.offsetX);
      setEndY(event.nativeEvent.offsetY);
    }
  };

  const handleMouseUp = () => {
    setIsDrawing(false);
    dispatch({
      type: DRAWER_ACTIONS.APPEND_SHAPE,
      newShape: {
        type: shapesData.currentShape,
        color: shapesData.currentColor,
        startX: startX,
        startY: startY,
        endX: endX,
        endY: endY,
      },
    });
  };

  return (
    <Paper elevation={10} sx={canvasContainer}>
      <canvas
        style={canvas}
        ref={canvasRef}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
      />
    </Paper>
  );
};
