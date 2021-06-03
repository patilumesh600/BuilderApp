import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the flatProfile state domain
 */

const selectFlatProfileDomain = state => state.flatProfile || initialState;

/**
 * Other specific selectors
 */

/**
 * Default selector used by FlatProfile
 */

const makeSelectFlatProfile = () =>
  createSelector(
    selectFlatProfileDomain,
    substate => substate,
  );

export default makeSelectFlatProfile;
export { selectFlatProfileDomain };
