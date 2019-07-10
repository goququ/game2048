import _ from 'lodash';
import { getRandomInt } from './other';
import { sortersMapper } from './tiles-sorters';

const getGroupedTilesArr = playground =>
  playground.reduce(
    (acc, row, rowIndex) => {
      row.forEach((tile, tileIndex) => {
        const group = !tile ? 'empty' : 'filled';
        acc[group].push([rowIndex, tileIndex]);
      });
      return acc;
    },
    { empty: [], filled: [] },
  );

const getRandomEmptyTile = playground => {
  const { empty } = getGroupedTilesArr(playground);
  return empty[getRandomInt(empty.length)];
};

const getNextTile = ([y, x], side) => {
  const mapper = {
    left: [y, x - 1],
    right: [y, x + 1],
    top: [y + 1, x],
    bottom: [y - 1, x],
  };

  return mapper[side];
};

const moveTileToSide = ([y, x], playground, side) => {
  const currentValue = playground[y][x];
  const [nextY, nextX] = getNextTile([y, x], side);
  const nextValue = playground[nextY] && playground[nextY][nextX];
  const isCantSum =
    nextValue === undefined ||
    (currentValue !== nextValue && typeof nextValue === 'number');

  if (isCantSum) {
    return playground;
  }

  const newPlayground = _.cloneDeep(playground);
  newPlayground[y][x] = null;
  newPlayground[nextY][nextX] = currentValue + nextValue;
  return moveTileToSide([nextY, nextX], newPlayground, side);
};

export const moveFilledTilesToSide = (playground, side) => {
  const { filled } = getGroupedTilesArr(playground);
  const sorted = sortersMapper[side](filled);

  const newPlayground = sorted.reduce(
    (acc, tile) => moveTileToSide(tile, acc, side),
    _.cloneDeep(playground),
  );

  return addRandomTileToDraft(newPlayground);
};

/* eslint-disable no-param-reassign */
export const addRandomTileToDraft = playground => {
  const emptyCell = getRandomEmptyTile(playground);

  if (emptyCell) {
    const [row, col] = emptyCell;
    const value = getRandomInt(2) === 1 ? 2 : 4;
    playground[row][col] = value;
  }

  return playground;
};
