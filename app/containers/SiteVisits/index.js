/**
 *
 * SiteVisits
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import { useInjectSaga } from 'utils/injectSaga';
import { useInjectReducer } from 'utils/injectReducer';
import makeSelectSiteVisits from './selectors';
import reducer from './reducer';
import saga from './saga';

export function SiteVisits() {
  useInjectReducer({ key: 'siteVisits', reducer });
  useInjectSaga({ key: 'siteVisits', saga });

  return <div />;
}

SiteVisits.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  siteVisits: makeSelectSiteVisits(),
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

export default compose(withConnect)(SiteVisits);
