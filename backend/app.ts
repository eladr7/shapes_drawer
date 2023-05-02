import { Color, ShapeType } from "./definitions";

const express = require("express");
const app = express();
const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Listening on port ${port}`));

const getRandomValue = (values, valueToDismiss) => {
  const filteredValues = values.filter((color) => color !== valueToDismiss);
  return filteredValues[Math.floor(Math.random() * filteredValues.length)];
};

app.get("/random_color:curr", (req, res) => {
  res.send({ answer: getRandomValue(Object.values(Color), req.params.curr) });
});

app.get("/random_shape:curr", (req, res) => {
  res.send({
    answer: getRandomValue(Object.values(ShapeType), req.params.curr),
  });
});
