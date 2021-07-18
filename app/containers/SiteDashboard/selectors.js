import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the siteDashboard state domain
 */

const selectSiteDashboardDomain = state => state.siteDashboard || initialState;

/**
 * Other specific selectors
 */

/**
 * Default selector used by SiteDashboard
 */

const makeSelectSiteDashboard = () =>
  createSelector(
    selectSiteDashboardDomain,
    substate => substate,
  );

export default makeSelectSiteDashboard;
export { selectSiteDashboardDomain };
