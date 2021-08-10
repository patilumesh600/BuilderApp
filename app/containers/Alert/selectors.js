import { createSelector } from 'reselect';

/**
 * Direct selector to the alert state domain
 */
const selectAlertDomain = (state) => state.get('alert');

/**
 * Other specific selectors
 */


/**
 * Default selector used by Alert
 */

const makeSelectAlert = () => createSelector(
  selectAlertDomain,
  (substate) => substate.toJS()
);

export default makeSelectAlert;
export {
  selectAlertDomain,
};
