/*
 *
 * Controls reducer
 *
 */
import produce from 'immer';
import {
  MOVE_TOP,
  MOVE_LEFT,
  MOVE_RIGHT,
  MOVE_BOTTOM,
  ADD_TILE,
} from './constants';
import utils from './utils';

const { addRandomTileToDraft } = utils.tilesUtils;
export const initialState = Array(5)
  .fill('')
  .map(() => Array(5).fill(null));

/* eslint-disable default-case, no-param-reassign */
const controlsReducer = (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      case MOVE_TOP:
      case MOVE_LEFT:
      case MOVE_RIGHT:
      case MOVE_BOTTOM:
      case ADD_TILE:
        addRandomTileToDraft(state, draft);
        break;
    }
  });

export default controlsReducer;
