import React from "react";

export const mainBox = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  gap: 4,
  pt: 4,
};

export const canvasTitle = { my: 2, textAlign: "center", color: "blueviolet" };
export const announcement = { textAlign: "center" };
export const canvasContainer = {
  width: { xs: "70%" },
  aspectRatio: "16/9",
  mx: 2,
};

export const canvas: React.CSSProperties = {
  width: "100%",
  height: "100%",
  objectFit: "contain",
};

export const buttonsContainer = {
  display: "flex",
  gap: 2,
  pt: 2,
  flexDirection: { xs: "column", md: "row" },
};

export const buttonWrapper = { mx: 0.5, my: { xs: 1 } };
