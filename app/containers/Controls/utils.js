// import _ from 'lodash';

export const getEmptyCellsArr = playground => {
  const result = [];
  playground.forEach((row, rowIndex) => {
    row.forEach((tile, tileIndex) => {
      if (!tile) result.push([rowIndex, tileIndex]);
    });
  });
  return result;
};

export function getRandomInt(max) {
  return Math.floor(Math.random() * (max - 0)) + 0;
}

export const getRandomEmptyTile = playground => {
  const emptyCells = getEmptyCellsArr(playground);
  return emptyCells[getRandomInt(emptyCells.length)];
};

/* eslint-disable no-param-reassign */
export const addRandomTileToDraft = (playground, draft) => {
  const [row, col] = getRandomEmptyTile(playground);
  draft[row][col] = 2;
};
