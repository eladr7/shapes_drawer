import { Box, Button, Paper } from "@mui/material";
import React, { useContext } from "react";
import {
  buttonWrapper,
  buttonsContainer,
  mainBox,
} from "./consts/InlineStyles";
import { ShapesCanvas } from "./ShapesCanvas";
import { buttonsOptions } from "./consts/definitions";
import { ShapesContext } from "./context/ShapesContext";
import { CanvasHeader } from "./CanvasHeader";
import { buttonDispatcher } from "./canvasHelpers";

interface DrawingCanvasProps {}
export const DrawingCanvas: React.FC<DrawingCanvasProps> = ({}) => {
  const { shapesData, dispatch } = useContext(ShapesContext);
  return (
    <Box sx={mainBox}>
      <CanvasHeader
        title="Shapes drawer"
        color={shapesData.awaitingServer ? "black" : shapesData.currentColor}
        shape={
          shapesData.awaitingServer ? "Loading..." : shapesData.currentShape
        }
      />
      <ShapesCanvas />
      <Box sx={buttonsContainer}>
        {buttonsOptions.map((buttonOption) => (
          <Paper elevation={3} sx={buttonWrapper}>
            <Button
              onClick={() =>
                buttonDispatcher(buttonOption, dispatch, shapesData)
              }
            >
              {buttonOption.TEXT}
            </Button>
          </Paper>
        ))}
      </Box>
    </Box>
  );
};
