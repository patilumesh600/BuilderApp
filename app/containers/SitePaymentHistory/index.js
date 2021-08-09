/* eslint-disable react/no-unused-prop-types */
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



import * as RBS from 'react-bootstrap';
import { faCheck, faClock, faEnvelope, faFileDownload, faListAlt, faPlus, faPlusCircle, faSearch, faShare } from '@fortawesome/free-solid-svg-icons';
import { } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { Chart } from 'react-charts';
import Avatar, { ConfigProvider } from 'react-avatar';
import './sitePayment.css';

export function SitePaymentHistory() {
  useInjectReducer({ key: 'sitePaymentHistory', reducer });
  useInjectSaga({ key: 'sitePaymentHistory', saga });


  const data = React.useMemo(
    () => [
      {
        label: 'Amount',
        data: [['JUN-2020', 145000], ['JUL-2020', 250000], ['AUG-2020', 477700], ['SEP-2020', 245000], ['OCT-2020', 375900], ['NOV-2020', 230000], ['DEC-2020', 675900], ['JAN-2021', 145000], ['FEB-2021', 250000], ['MAR-2021', 477700], ['APR-2021', 245000], ['MAY-2021', 375900], ['JUN-2021', 675900]],
        color: '#CE1F6A'
      }
    ],
    []
  );
  const series = React.useMemo(
    () => ({
      type: 'line',
    }),
    []
  )
  const axes = React.useMemo(
    () => [
      { primary: true, type: 'ordinal', position: 'bottom' },
      { type: 'linear', position: 'left', show: false }
    ],
    []
  )
  const tooltip = React.useMemo(
    () => ({
      align: "left",
      anchor: "center"
    }),
    []
  )
  return <div id="sitePayContainer">
    <RBS.Container fluid>
      <RBS.Row>
        <RBS.Col md={12} xs={12} >
          <div className="tblCard tblContianer grad-blue">

            <RBS.Col md={12} className="cardHeader pad-5">
              <div className="cardTitle" >
                <div>
                  <span className="titleHdr">Total Collection :</span>
                  <span className="titleAmt"> 90,19,992/- </span>
                  <span className="titleSep">|</span> &nbsp;
                  <span className="titleHdrMth">Monthly Collection :</span>
                  <span className="titleAmt"> 09,19,992/- </span>
                </div>
              </div>
              <div className="cardAction">
                <RBS.DropdownButton
                  menuAlign="right"
                  title="Chart Type"
                  id="dropdown-menu-align-right"
                  size="sm"
                  variant="light"
                >
                  <RBS.Dropdown.Item eventKey="1">Weekly</RBS.Dropdown.Item>
                  <RBS.Dropdown.Item eventKey="2">Monthly</RBS.Dropdown.Item>
                  <RBS.Dropdown.Item eventKey="3">Yearly</RBS.Dropdown.Item>
                </RBS.DropdownButton>
              </div>
              <div className="clearfix" />
              <br />
            </RBS.Col>
            <RBS.Col md={12}>
              <div style={{ flex: 2, height: '220px' }}>
                <Chart data={data} series={series} axes={axes} tooltip={tooltip} />
              </div>
            </RBS.Col>

          </div>

        </RBS.Col>
        <div className="clearfix" />
        <RBS.Col md={12} xs={12}>
          <br />
          <RBS.Row>
            <RBS.Col md={{ span: 4, offset: 7 }} >
              <RBS.InputGroup className="mb-3" size="sm">
                <RBS.FormControl
                  placeholder="Search by Transection Number,Flat No or Status"
                  aria-label="Search by Transection Number,Flat No or Status"
                  aria-describedby="basic-addon2"
                />
                <RBS.InputGroup.Append>
                  <RBS.Button variant="secondary"><FontAwesomeIcon icon={faSearch} /> </RBS.Button>
                </RBS.InputGroup.Append>
              </RBS.InputGroup>
            </RBS.Col>
            <RBS.Col md={1}>
              <RBS.Button block variant="outline-primary" size="sm" ><FontAwesomeIcon icon={faPlus} /> New</RBS.Button>
            </RBS.Col>
          </RBS.Row>
          <hr className="hrgray" />

        </RBS.Col>
        <RBS.Col md={12} xs={12}>
          <div className="txnTblHdr">
            <RBS.Row className="text-center">

              <RBS.Col md={1}>FlatNo.</RBS.Col>
              <RBS.Col md={2}>Transection Number</RBS.Col>
              <RBS.Col md={2}>Date & Time</RBS.Col>
              <RBS.Col md={2}>Transection Mode</RBS.Col>
              <RBS.Col md={2}>RelatedTo</RBS.Col>
              <RBS.Col md={1}>Status</RBS.Col>
              <RBS.Col md={2}>Action</RBS.Col>
            </RBS.Row>
          </div>
          <div className="clearfix" />
          <div className=" txnTblRow">
            <RBS.Row className="text-center">
              <RBS.Col md={1}>A-306</RBS.Col>
              <RBS.Col md={2}><b>CC09883737272712</b></RBS.Col>
              <RBS.Col md={2}>12-Jun-2021 01:30pm</RBS.Col>
              <RBS.Col md={2}>Cash Payment</RBS.Col>
              <RBS.Col md={2}>Agreement cost</RBS.Col>
              <RBS.Col md={1} className="text-success">Paid</RBS.Col>
              <RBS.Col md={2}>
                <FontAwesomeIcon icon={faFileDownload} className="text-primary" /> &nbsp;&nbsp;
                <FontAwesomeIcon icon={faCheck} className="text-success" /> &nbsp;&nbsp;
                <FontAwesomeIcon icon={faEnvelope} className="text-danger" /> &nbsp;&nbsp;
                <FontAwesomeIcon icon={faShare} className="text-secondary" /> &nbsp;&nbsp;
                <FontAwesomeIcon icon={faListAlt} className="text-dark" /> &nbsp;&nbsp;
              </RBS.Col>
            </RBS.Row>
          </div>
          <div className="clearfix" />
          <div className=" txnTblRow">
            <RBS.Row className="text-center">
              <RBS.Col md={1}>A-306</RBS.Col>
              <RBS.Col md={2}><b>CC09883737272712</b></RBS.Col>
              <RBS.Col md={2}>12-Jun-2021 01:30pm</RBS.Col>
              <RBS.Col md={2}>Cash Payment</RBS.Col>
              <RBS.Col md={2}>Agreement cost</RBS.Col>
              <RBS.Col md={1} className="text-success">Paid</RBS.Col>
              <RBS.Col md={2}>  <FontAwesomeIcon icon={faFileDownload} className="text-primary" /> &nbsp;&nbsp;
                <FontAwesomeIcon icon={faCheck} className="text-success" /> &nbsp;&nbsp;
                <FontAwesomeIcon icon={faEnvelope} className="text-danger" /> &nbsp;&nbsp;
                <FontAwesomeIcon icon={faShare} className="text-secondary" /> &nbsp;&nbsp;
                <FontAwesomeIcon icon={faListAlt} className="text-dark" /> &nbsp;&nbsp;</RBS.Col>
            </RBS.Row>
          </div>
          <div className="clearfix" />
          <div className=" txnTblRow">
            <RBS.Row className="text-center">
              <RBS.Col md={1}>A-306</RBS.Col>
              <RBS.Col md={2}><b>CC09883737272712</b></RBS.Col>
              <RBS.Col md={2}>12-Jun-2021 01:30pm</RBS.Col>
              <RBS.Col md={2}></RBS.Col>
              <RBS.Col md={2}>Stamp Duty</RBS.Col>
              <RBS.Col md={1} className="text-primary">Pending</RBS.Col>
              <RBS.Col md={2}>  <FontAwesomeIcon icon={faFileDownload} className="text-primary" /> &nbsp;&nbsp;
                <FontAwesomeIcon icon={faCheck} className="text-success" /> &nbsp;&nbsp;
                <FontAwesomeIcon icon={faEnvelope} className="text-danger" /> &nbsp;&nbsp;
                <FontAwesomeIcon icon={faShare} className="text-secondary" /> &nbsp;&nbsp;
                <FontAwesomeIcon icon={faListAlt} className="text-dark" /> &nbsp;&nbsp;</RBS.Col>
            </RBS.Row>
          </div>
          <div className="clearfix" />
          <div className=" txnTblRow">
            <RBS.Row className="text-center">
              <RBS.Col md={1}>A-306</RBS.Col>
              <RBS.Col md={2}><b>CC09883737272712</b></RBS.Col>
              <RBS.Col md={2}>12-Jun-2021 01:30pm</RBS.Col>
              <RBS.Col md={2}></RBS.Col>
              <RBS.Col md={2}>Maintaince Charge</RBS.Col>
              <RBS.Col md={1} className="text-primary">Pending</RBS.Col>
              <RBS.Col md={2}>  <FontAwesomeIcon icon={faFileDownload} className="text-primary" /> &nbsp;&nbsp;
                <FontAwesomeIcon icon={faCheck} className="text-success" /> &nbsp;&nbsp;
                <FontAwesomeIcon icon={faEnvelope} className="text-danger" /> &nbsp;&nbsp;
                <FontAwesomeIcon icon={faShare} className="text-secondary" /> &nbsp;&nbsp;
                <FontAwesomeIcon icon={faListAlt} className="text-dark" /> &nbsp;&nbsp;</RBS.Col>
            </RBS.Row>
          </div>
          <div className="clearfix" />
          <div className=" txnTblRow">
            <RBS.Row className="text-center">
              <RBS.Col md={1}>A-306</RBS.Col>
              <RBS.Col md={2}><b>CC09883737272712</b></RBS.Col>
              <RBS.Col md={2}>12-Jun-2021 01:30pm</RBS.Col>
              <RBS.Col md={2}></RBS.Col>
              <RBS.Col md={2}>Bank Disburstment</RBS.Col>
              <RBS.Col md={1} className="text-primary">Pending</RBS.Col>
              <RBS.Col md={2}>  <FontAwesomeIcon icon={faFileDownload} className="text-primary" /> &nbsp;&nbsp;
                <FontAwesomeIcon icon={faCheck} className="text-success" /> &nbsp;&nbsp;
                <FontAwesomeIcon icon={faEnvelope} className="text-danger" /> &nbsp;&nbsp;
                <FontAwesomeIcon icon={faShare} className="text-secondary" /> &nbsp;&nbsp;
                <FontAwesomeIcon icon={faListAlt} className="text-dark" /> &nbsp;&nbsp;</RBS.Col>
            </RBS.Row>
          </div>
          <div className="clearfix" />
          <div className=" txnTblRow">
            <RBS.Row className="text-center">
              <RBS.Col md={1}>A-306</RBS.Col>
              <RBS.Col md={2}><b>CC09883737272712</b></RBS.Col>
              <RBS.Col md={2}>12-Jun-2021 01:30pm</RBS.Col>
              <RBS.Col md={2}></RBS.Col>
              <RBS.Col md={2}>Bank Disburstment</RBS.Col>
              <RBS.Col md={1} className="text-primary">Pending</RBS.Col>
              <RBS.Col md={2}>  <FontAwesomeIcon icon={faFileDownload} className="text-primary" /> &nbsp;&nbsp;
                <FontAwesomeIcon icon={faCheck} className="text-success" /> &nbsp;&nbsp;
                <FontAwesomeIcon icon={faEnvelope} className="text-danger" /> &nbsp;&nbsp;
                <FontAwesomeIcon icon={faShare} className="text-secondary" /> &nbsp;&nbsp;
                <FontAwesomeIcon icon={faListAlt} className="text-dark" /> &nbsp;&nbsp;</RBS.Col>
            </RBS.Row>
          </div>
          <div className="clearfix" />
          <div className=" txnTblRow">
            <RBS.Row className="text-center">
              <RBS.Col md={1}>A-306</RBS.Col>
              <RBS.Col md={2}><b>CC09883737272712</b></RBS.Col>
              <RBS.Col md={2}>12-Jun-2021 01:30pm</RBS.Col>
              <RBS.Col md={2}>Cash Payment</RBS.Col>
              <RBS.Col md={2}>Agreement cost</RBS.Col>
              <RBS.Col md={1} className="text-success">Paid</RBS.Col>
              <RBS.Col md={2}>  <FontAwesomeIcon icon={faFileDownload} className="text-primary" /> &nbsp;&nbsp;
                <FontAwesomeIcon icon={faCheck} className="text-success" /> &nbsp;&nbsp;
                <FontAwesomeIcon icon={faEnvelope} className="text-danger" /> &nbsp;&nbsp;
                <FontAwesomeIcon icon={faShare} className="text-secondary" /> &nbsp;&nbsp;
                <FontAwesomeIcon icon={faListAlt} className="text-dark" /> &nbsp;&nbsp;</RBS.Col>
            </RBS.Row>
          </div>
          <div className="clearfix" />
          <div className=" txnTblRow">
            <RBS.Row className="text-center">
              <RBS.Col md={1}>A-306</RBS.Col>
              <RBS.Col md={2}><b>CC09883737272712</b></RBS.Col>
              <RBS.Col md={2}>12-Jun-2021 01:30pm</RBS.Col>
              <RBS.Col md={2}>Cash Payment</RBS.Col>
              <RBS.Col md={2}>Agreement cost</RBS.Col>
              <RBS.Col md={1} className="text-success">Paid</RBS.Col>
              <RBS.Col md={2}>  <FontAwesomeIcon icon={faFileDownload} className="text-primary" /> &nbsp;&nbsp;
                <FontAwesomeIcon icon={faCheck} className="text-success" /> &nbsp;&nbsp;
                <FontAwesomeIcon icon={faEnvelope} className="text-danger" /> &nbsp;&nbsp;
                <FontAwesomeIcon icon={faShare} className="text-secondary" /> &nbsp;&nbsp;
                <FontAwesomeIcon icon={faListAlt} className="text-dark" /> &nbsp;&nbsp;</RBS.Col>
            </RBS.Row>
          </div>
          <div className="clearfix" />
          <div className=" txnTblRow">
            <RBS.Row className="text-center">
              <RBS.Col md={1}>A-306</RBS.Col>
              <RBS.Col md={2}><b>CC09883737272712</b></RBS.Col>
              <RBS.Col md={2}>12-Jun-2021 01:30pm</RBS.Col>
              <RBS.Col md={2}></RBS.Col>
              <RBS.Col md={2}>Stamp Duty</RBS.Col>
              <RBS.Col md={1} className="text-primary">Pending</RBS.Col>
              <RBS.Col md={2}>  <FontAwesomeIcon icon={faFileDownload} className="text-primary" /> &nbsp;&nbsp;
                <FontAwesomeIcon icon={faCheck} className="text-success" /> &nbsp;&nbsp;
                <FontAwesomeIcon icon={faEnvelope} className="text-danger" /> &nbsp;&nbsp;
                <FontAwesomeIcon icon={faShare} className="text-secondary" /> &nbsp;&nbsp;
                <FontAwesomeIcon icon={faListAlt} className="text-dark" /> &nbsp;&nbsp;</RBS.Col>
            </RBS.Row>
          </div>
          <div className="clearfix" />
          <div className=" txnTblRow">
            <RBS.Row className="text-center">
              <RBS.Col md={1}>A-306</RBS.Col>
              <RBS.Col md={2}><b>CC09883737272712</b></RBS.Col>
              <RBS.Col md={2}>12-Jun-2021 01:30pm</RBS.Col>
              <RBS.Col md={2}></RBS.Col>
              <RBS.Col md={2}>Maintaince Charge</RBS.Col>
              <RBS.Col md={1} className="text-primary">Pending</RBS.Col>
              <RBS.Col md={2}>  <FontAwesomeIcon icon={faFileDownload} className="text-primary" /> &nbsp;&nbsp;
                <FontAwesomeIcon icon={faCheck} className="text-success" /> &nbsp;&nbsp;
                <FontAwesomeIcon icon={faEnvelope} className="text-danger" /> &nbsp;&nbsp;
                <FontAwesomeIcon icon={faShare} className="text-secondary" /> &nbsp;&nbsp;
                <FontAwesomeIcon icon={faListAlt} className="text-dark" /> &nbsp;&nbsp;</RBS.Col>
            </RBS.Row>
          </div>
          <div className="clearfix" />
          <div className=" txnTblRow">
            <RBS.Row className="text-center">
              <RBS.Col md={1}>A-306</RBS.Col>
              <RBS.Col md={2}><b>CC09883737272712</b></RBS.Col>
              <RBS.Col md={2}>12-Jun-2021 01:30pm</RBS.Col>
              <RBS.Col md={2}></RBS.Col>
              <RBS.Col md={2}>Bank Disburstment</RBS.Col>
              <RBS.Col md={1} className="text-primary">Pending</RBS.Col>
              <RBS.Col md={2}>  <FontAwesomeIcon icon={faFileDownload} className="text-primary" /> &nbsp;&nbsp;
                <FontAwesomeIcon icon={faCheck} className="text-success" /> &nbsp;&nbsp;
                <FontAwesomeIcon icon={faEnvelope} className="text-danger" /> &nbsp;&nbsp;
                <FontAwesomeIcon icon={faShare} className="text-secondary" /> &nbsp;&nbsp;
                <FontAwesomeIcon icon={faListAlt} className="text-dark" /> &nbsp;&nbsp;</RBS.Col>
            </RBS.Row>
          </div>
          <div className="clearfix" />
          <div className=" txnTblRow">
            <RBS.Row className="text-center">
              <RBS.Col md={1}>A-306</RBS.Col>
              <RBS.Col md={2}><b>CC09883737272712</b></RBS.Col>
              <RBS.Col md={2}>12-Jun-2021 01:30pm</RBS.Col>
              <RBS.Col md={2}></RBS.Col>
              <RBS.Col md={2}>Bank Disburstment</RBS.Col>
              <RBS.Col md={1} className="text-primary">Pending</RBS.Col>
              <RBS.Col md={2}>  <FontAwesomeIcon icon={faFileDownload} className="text-primary" /> &nbsp;&nbsp;
                <FontAwesomeIcon icon={faCheck} className="text-success" /> &nbsp;&nbsp;
                <FontAwesomeIcon icon={faEnvelope} className="text-danger" /> &nbsp;&nbsp;
                <FontAwesomeIcon icon={faShare} className="text-secondary" /> &nbsp;&nbsp;
                <FontAwesomeIcon icon={faListAlt} className="text-dark" /> &nbsp;&nbsp;</RBS.Col>
            </RBS.Row>
          </div>
          <div className="clearfix" />
        </RBS.Col>
      </RBS.Row>
    </RBS.Container>

  </div >;
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
