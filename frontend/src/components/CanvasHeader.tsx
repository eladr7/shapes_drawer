import { Box, Button, Paper, Typography } from "@mui/material";
import React from "react";
import { announcement, canvasTitle } from "./consts/InlineStyles";
import { Color, ShapeType } from "./consts/definitions";

interface CanvasHeaderProps {
  title: string;
  color: string;
  shape: string;
}

export const CanvasHeader: React.FC<CanvasHeaderProps> = ({
  title,
  color,
  shape,
}) => {
  return (
    <Box>
      <Typography sx={canvasTitle} variant="h2">
        {title}
      </Typography>
      <Typography sx={{ ...announcement, color }} variant="h4">
        {shape}
      </Typography>
    </Box>
  );
};
