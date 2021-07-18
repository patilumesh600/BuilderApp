import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the siteVisits state domain
 */

const selectSiteVisitsDomain = state => state.siteVisits || initialState;

/**
 * Other specific selectors
 */

/**
 * Default selector used by SiteVisits
 */

const makeSelectSiteVisits = () =>
  createSelector(
    selectSiteVisitsDomain,
    substate => substate,
  );

export default makeSelectSiteVisits;
export { selectSiteVisitsDomain };
