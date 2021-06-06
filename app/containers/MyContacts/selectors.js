import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the myContacts state domain
 */

const selectMyContactsDomain = state => state.myContacts || initialState;

/**
 * Other specific selectors
 */

/**
 * Default selector used by MyContacts
 */

const makeSelectMyContacts = () =>
  createSelector(
    selectMyContactsDomain,
    substate => substate,
  );

export default makeSelectMyContacts;
export { selectMyContactsDomain };
