import { put, takeEvery } from 'redux-saga/effects';

import { moveTop, moveLeft, moveRight, moveBottom } from './actions';
import { ON_KEYDOWN } from './constants';

function* handleKeydownEvent({ payload }) {
  const { code } = payload;

  switch (code) {
    case 'KeyA':
      yield put(moveLeft());
      break;
    case 'KeyW':
      yield put(moveTop());
      break;
    case 'KeyD':
      yield put(moveRight());
      break;
    case 'KeyS':
      yield put(moveBottom());
      break;
    default:
      break;
  }
}

// Individual exports for testing
export default function* controlsSaga() {
  yield takeEvery(ON_KEYDOWN, handleKeydownEvent);
}
