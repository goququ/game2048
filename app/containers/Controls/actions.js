/*
 *
 * Controls actions
 *
 */

import {
  ON_KEYDOWN,
  MOVE_TOP,
  MOVE_LEFT,
  MOVE_RIGHT,
  MOVE_BOTTOM,
  ADD_TILE,
} from './constants';

export const moveTop = () => ({ type: MOVE_TOP });
export const moveLeft = () => ({ type: MOVE_LEFT });
export const moveRight = () => ({ type: MOVE_RIGHT });
export const moveBottom = () => ({ type: MOVE_BOTTOM });
export const addTiles = () => ({ type: ADD_TILE });

export const onKeydown = event => ({ type: ON_KEYDOWN, payload: event });
