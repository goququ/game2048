/*
 *
 * Controls reducer
 *
 */
import {
  MOVE_TOP,
  MOVE_LEFT,
  MOVE_RIGHT,
  MOVE_BOTTOM,
  ADD_TILE,
} from './constants';
import utils from './utils';

const { addRandomTileToDraft, moveFilledTilesToSide } = utils.tilesUtils;
export const initialState = Array(5)
  .fill('')
  .map(() => Array(5).fill(null));

addRandomTileToDraft(initialState);
addRandomTileToDraft(initialState);

/* eslint-disable default-case, no-param-reassign */
const controlsReducer = (state = initialState, action) => {
  switch (action.type) {
    case MOVE_TOP:
      return moveFilledTilesToSide(state, 'bottom');
    case MOVE_LEFT:
      return moveFilledTilesToSide(state, 'left');
    case MOVE_RIGHT:
      return moveFilledTilesToSide(state, 'right');
    case MOVE_BOTTOM:
      return moveFilledTilesToSide(state, 'top');
    case ADD_TILE:
    default:
      return state;
  }
};

export default controlsReducer;
