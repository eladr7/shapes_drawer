import { DRAWER_ACTIONS } from "../consts/definitions";

const ShapesReducer = (state, action) => {
  switch (action.type) {
    case DRAWER_ACTIONS.SET_RANDOM_SHAPE:
      return { ...state, currentShape: action.rndShape, awaitingServer: false };
    case DRAWER_ACTIONS.SET_RANDOM_COLOR:
      return { ...state, currentColor: action.rndColor, awaitingServer: false };
    case DRAWER_ACTIONS.APPEND_SHAPE:
      return { ...state, shapes: [...state.shapes, action.newShape] };
    case DRAWER_ACTIONS.RESET:
      return { ...state, shapes: [] };
    case DRAWER_ACTIONS.SET_WAITING:
      return { ...state, awaitingServer: true };
    default:
      return state;
  }
};

export default ShapesReducer;
