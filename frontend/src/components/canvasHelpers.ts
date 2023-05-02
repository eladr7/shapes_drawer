import {
  Color,
  DRAWER_ACTIONS,
  ShapesDispatcher,
  ShapesData,
  ShapeType,
} from "./consts/definitions";

const getRandom = async (route: string, curr: string) => {
  const response = await fetch(`/${route}${curr}`);
  const body = await response.json();

  if (response.status !== 200) {
    throw Error(body.message);
  }
  return body.answer;
};

export const buttonDispatcher = async (
  buttonOption: { TEXT: string; ACTION: string },
  dispatch: ShapesDispatcher,
  shapesData: ShapesData
) => {
  switch (buttonOption.ACTION) {
    case DRAWER_ACTIONS.SET_RANDOM_SHAPE:
      dispatch({
        type: DRAWER_ACTIONS.SET_WAITING,
      });
      const shapeFromServer: ShapeType = await getRandom(
        "random_shape",
        shapesData.currentShape
      );
      dispatch({
        type: buttonOption.ACTION,
        rndShape: shapeFromServer,
      });
      break;
    case DRAWER_ACTIONS.SET_RANDOM_COLOR:
      dispatch({
        type: DRAWER_ACTIONS.SET_WAITING,
      });
      const colorFromServer: Color = await getRandom(
        "random_color",
        shapesData.currentColor
      );
      dispatch({
        type: buttonOption.ACTION,
        rndColor: colorFromServer,
      });
      break;
    default:
      dispatch({
        type: buttonOption.ACTION,
      });
      break;
  }
};

export const redrawShapes = (
  ctx: CanvasRenderingContext2D,
  canvas: HTMLCanvasElement,
  shapesData: ShapesData
) => {
  ctx.canvas.width = canvas.offsetWidth;
  ctx.canvas.height = canvas.offsetHeight - 4;

  ctx.clearRect(0, 0, canvas.offsetWidth, canvas.offsetHeight);

  shapesData.shapes.forEach((shape) => {
    ctx.fillStyle = shape.color;
    ctx.strokeStyle = shape.color;
    switch (shape.type) {
      case ShapeType.Line:
        ctx.beginPath();
        ctx.moveTo(shape.startX, shape.startY);
        ctx.lineTo(shape.endX, shape.endY);
        ctx.stroke();
        break;
      case ShapeType.Triangle:
        ctx.beginPath();
        ctx.moveTo(shape.startX, shape.startY);
        ctx.lineTo((shape.startX + shape.endX) / 2, shape.endY);
        ctx.lineTo(shape.endX, shape.startY);
        ctx.closePath();
        ctx.fill();
        break;
      case ShapeType.Rectangle:
        ctx.fillRect(
          shape.startX,
          shape.startY,
          shape.endX - shape.startX,
          shape.endY - shape.startY
        );
        break;
      case ShapeType.Circle:
        const radius = Math.sqrt(
          Math.pow(shape.endX - shape.startX, 2) +
            Math.pow(shape.endY - shape.startY, 2)
        );
        ctx.beginPath();
        ctx.arc(shape.startX, shape.startY, radius, 0, 2 * Math.PI);
        ctx.fill();
        break;
      default:
        break;
    }
  });
};
