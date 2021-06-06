import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the documentVault state domain
 */

const selectDocumentVaultDomain = state => state.documentVault || initialState;

/**
 * Other specific selectors
 */

/**
 * Default selector used by DocumentVault
 */

const makeSelectDocumentVault = () =>
  createSelector(
    selectDocumentVaultDomain,
    substate => substate,
  );

export default makeSelectDocumentVault;
export { selectDocumentVaultDomain };
