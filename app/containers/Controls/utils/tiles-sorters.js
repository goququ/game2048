export const sortTilesFromBottomToTop = arr =>
  arr.sort(([y1], [y2]) => y1 - y2);

export const sortTilesFromTopToBottom = arr =>
  arr.sort(([y1], [y2]) => y2 - y1);

export const sortTilesFromLeftToRight = arr =>
  arr.sort(([, x1], [, x2]) => x1 - x2);

export const sortTilesFromRightToLeft = arr =>
  arr.sort(([, x1], [, x2]) => x2 - x1);

export const sortersMapper = {
  left: sortTilesFromLeftToRight,
  right: sortTilesFromRightToLeft,
  bottom: sortTilesFromBottomToTop,
  top: sortTilesFromTopToBottom,
};
