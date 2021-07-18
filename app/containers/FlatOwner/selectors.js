import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the flatOwner state domain
 */

const selectFlatOwnerDomain = state => state.flatOwner || initialState;

/**
 * Other specific selectors
 */

/**
 * Default selector used by FlatOwner
 */

const makeSelectFlatOwner = () =>
  createSelector(
    selectFlatOwnerDomain,
    substate => substate,
  );

export default makeSelectFlatOwner;
export { selectFlatOwnerDomain };
