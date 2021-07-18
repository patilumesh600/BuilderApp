import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the visits state domain
 */

const selectVisitsDomain = state => state.visits || initialState;

/**
 * Other specific selectors
 */

/**
 * Default selector used by Visits
 */

const makeSelectVisits = () =>
  createSelector(
    selectVisitsDomain,
    substate => substate,
  );

export default makeSelectVisits;
export { selectVisitsDomain };
