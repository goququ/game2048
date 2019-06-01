import { getRandomInt } from './other';

export const getEmptyTilesArr = playground => {
  const result = [];
  playground.forEach((row, rowIndex) => {
    row.forEach((tile, tileIndex) => {
      if (!tile) result.push([rowIndex, tileIndex]);
    });
  });
  return result;
};

export const getRandomEmptyTile = playground => {
  const emptyCells = getEmptyTilesArr(playground);
  return emptyCells[getRandomInt(emptyCells.length)];
};

/* eslint-disable no-param-reassign */
export const addRandomTileToDraft = (playground, draft) => {
  const emptyCell = getRandomEmptyTile(playground);

  if (!emptyCell) {
    return;
  }

  const [row, col] = emptyCell;
  const value = getRandomInt(2) === 1 ? 2 : 4;
  draft[row][col] = value;
};
