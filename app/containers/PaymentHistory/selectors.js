import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the paymentHistory state domain
 */

const selectPaymentHistoryDomain = state =>
  state.paymentHistory || initialState;

/**
 * Other specific selectors
 */

/**
 * Default selector used by PaymentHistory
 */

const makeSelectPaymentHistory = () =>
  createSelector(
    selectPaymentHistoryDomain,
    substate => substate,
  );

export default makeSelectPaymentHistory;
export { selectPaymentHistoryDomain };
