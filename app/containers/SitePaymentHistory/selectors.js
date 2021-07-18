import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the sitePaymentHistory state domain
 */

const selectSitePaymentHistoryDomain = state =>
  state.sitePaymentHistory || initialState;

/**
 * Other specific selectors
 */

/**
 * Default selector used by SitePaymentHistory
 */

const makeSelectSitePaymentHistory = () =>
  createSelector(
    selectSitePaymentHistoryDomain,
    substate => substate,
  );

export default makeSelectSitePaymentHistory;
export { selectSitePaymentHistoryDomain };
