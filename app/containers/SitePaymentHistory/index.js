/**
 *
 * SitePaymentHistory
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import { useInjectSaga } from 'utils/injectSaga';
import { useInjectReducer } from 'utils/injectReducer';
import makeSelectSitePaymentHistory from './selectors';
import reducer from './reducer';
import saga from './saga';

export function SitePaymentHistory() {
  useInjectReducer({ key: 'sitePaymentHistory', reducer });
  useInjectSaga({ key: 'sitePaymentHistory', saga });

  return <div />;
}

SitePaymentHistory.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  sitePaymentHistory: makeSelectSitePaymentHistory(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(withConnect)(SitePaymentHistory);
