import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the businessSearch state domain
 */

const selectBusinessSearchDomain = state =>
  state.businessSearch || initialState;

/**
 * Other specific selectors
 */

/**
 * Default selector used by BusinessSearch
 */

const makeSelectBusinessSearch = () =>
  createSelector(
    selectBusinessSearchDomain,
    substate => substate,
  );

export default makeSelectBusinessSearch;
export { selectBusinessSearchDomain };
