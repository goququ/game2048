import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the controls state domain
 */

const selectControlsDomain = state => state.controls || initialState;

/**
 * Other specific selectors
 */

/**
 * Default selector used by Controls
 */

const makeSelectControls = () =>
  createSelector(
    selectControlsDomain,
    substate => substate,
  );

export default makeSelectControls;
export { selectControlsDomain };
