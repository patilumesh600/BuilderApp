/* eslint-disable react/no-unused-prop-types */
/**
 *
 * PaymentHistory
 *
 */

import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import { useInjectSaga } from 'utils/injectSaga';
import { useInjectReducer } from 'utils/injectReducer';

import AddPayment from 'components/AddPayment';

import * as RBS from 'react-bootstrap';
import { faDownload, faPlus, faRupeeSign, faSearch } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import saga from './saga';
import reducer from './reducer';
import makeSelectPaymentHistory from './selectors';
import './payHistory.css';

export function PaymentHistory() {
  useInjectReducer({ key: 'paymentHistory', reducer });
  useInjectSaga({ key: 'paymentHistory', saga });


  const [modalShow, setModalShow] = useState(false);

  return <div id="payContainer">
    <RBS.Container fluid>
      <RBS.Row className="payHdr">
        <RBS.Col md={12}>
          <RBS.Row>
            <RBS.Col md={4}>
              <div className="payTitle">Total Payment Done</div>
              <div className="clearfix" />
              <div className="totalPaidAmt"><FontAwesomeIcon icon={faRupeeSign} className="totalPaidIcon" /> 10,00,000/-</div>
              <div className="clearfix" />
              <div className="totalPaidFooter">Till 23-May-2021</div>
            </RBS.Col>
            <RBS.Col md={8} className="payDetailsSmall d-none d-md-block">
              <RBS.Row className="text-left">
                <RBS.Col md={6}>

                </RBS.Col>
                <RBS.Col md={2} xs={4} className="pad-2">
                  <div className="payTitleSmall">Sanction Amount</div>
                  <div className="clearfix" />
                  <div className="payAmtSmall">33,00,000/-</div>
                </RBS.Col>
                <RBS.Col md={2} xs={4} className="pad-2">
                  <div className="payTitleSmall">Last Payment Date</div>
                  <div className="clearfix" />
                  <div className="payAmtSmall">22-Feb-2021</div>
                </RBS.Col>
                <RBS.Col md={2} xs={4} className="pad-2">
                  <div className="payTitleSmall">Remaining Amount</div>
                  <div className="clearfix" />
                  <div className="payAmtSmall">13,00,000/-</div>
                </RBS.Col>
              </RBS.Row>
            </RBS.Col>
          </RBS.Row>
        </RBS.Col>
      </RBS.Row>
      <RBS.Row className="payHistory">
        <RBS.Col md={{ span: 10, offset: 1 }}>
          <RBS.Row>
            <RBS.Col md={12} className="pad-2">
              <h6>Transaction History</h6>
              <hr className="hrgray" />
            </RBS.Col>
          </RBS.Row>
          <RBS.Row>
            <RBS.Col md={5} xs={11} className="pad-2">
              <RBS.InputGroup size="sm">
                <RBS.FormControl
                  placeholder="Search by Transaction Type, Date etc."
                  aria-label="Search by Transaction Type, Date etc."
                  aria-describedby="basic-addon2"
                />
                <RBS.InputGroup.Append>
                  <RBS.InputGroup.Text id="basic-addon2"><FontAwesomeIcon icon={faSearch} /> </RBS.InputGroup.Text>
                </RBS.InputGroup.Append>
              </RBS.InputGroup>
            </RBS.Col>
            <RBS.Col md={7} xs={1} className="pad-2 text-right">
              <RBS.Button variant="outline-primary" size="sm"  onClick={() => setModalShow(true)} ><FontAwesomeIcon icon={faPlus} /> <div className="d-none d-md-inline" >Add</div></RBS.Button>
            </RBS.Col>
          </RBS.Row>
          <br />
          <RBS.Row className="txnRow">
            <RBS.Col md={5} xs={7} className="TxnType">
              <div className="txnNm">3rd Bank Payment </div>
              <div className="clearfix" />
              <div className="txnMobDetails d-block d-md-none"><small>12-Jan-2021</small></div>
            </RBS.Col>
            <RBS.Col md={3} className="TxnDate d-none d-md-block  pad-0">
              12-Jan-2021
            </RBS.Col>
            <RBS.Col md={1} xs={3} className="TxnAmt text-right text-danger  pad-5">
              02,00,000
            </RBS.Col>
            <RBS.Col md={3} xs={2} className="TxnAction text-right pad-5">
              <RBS.Button variant="outline-primary" size="sm"><FontAwesomeIcon icon={faDownload} /> <div className="d-none d-md-inline" >Download Files</div></RBS.Button>
            </RBS.Col>
          </RBS.Row>
          <RBS.Row className="txnRow">
            <RBS.Col md={5} xs={7} className="TxnType">
              <div className="txnNm">2nd Bank Payment</div>
              <div className="clearfix" />
              <div className="txnMobDetails d-block d-md-none"><small>12-Dec-2020</small></div>
            </RBS.Col>
            <RBS.Col md={3} className="TxnDate d-none d-md-block  pad-0">
              12-Dec-2020
            </RBS.Col>
            <RBS.Col md={1} xs={3} className="TxnAmt text-right text-danger  pad-5">
              05,00,000
            </RBS.Col>
            <RBS.Col md={3} xs={2} className="TxnAction text-right pad-5">
              <RBS.Button variant="outline-primary" size="sm"><FontAwesomeIcon icon={faDownload} /> <div className="d-none d-md-inline" >Download Files</div></RBS.Button>
            </RBS.Col>
          </RBS.Row>

          <RBS.Row className="txnRow">
            <RBS.Col md={5} xs={7} className="TxnType">
              <div className="txnNm">1st Bank Payment</div>
              <div className="clearfix" />
              <div className="txnMobDetails d-block d-md-none"><small>12-Oct-2020</small></div>
            </RBS.Col>
            <RBS.Col md={3} className="TxnDate d-none d-md-block  pad-0">
              12-Oct-2020
            </RBS.Col>
            <RBS.Col md={1} xs={3} className="TxnAmt text-right text-danger  pad-5">
              02,00,000
            </RBS.Col>
            <RBS.Col md={3} xs={2} className="TxnAction text-right pad-5">
              <RBS.Button variant="outline-primary" size="sm"><FontAwesomeIcon icon={faDownload} /> <div className="d-none d-md-inline" >Download Files</div></RBS.Button>
            </RBS.Col>
          </RBS.Row>

          <RBS.Row className="txnRow">
            <RBS.Col md={5} xs={7} className="TxnType">
              <div className="txnNm">Agreement + Stamp Duty</div>
              <div className="clearfix" />
              <div className="txnMobDetails d-block d-md-none"><small>12-Jul-2020</small></div>
            </RBS.Col>
            <RBS.Col md={3} className="TxnDate d-none d-md-block  pad-0">
              12-Jul-2020
            </RBS.Col>
            <RBS.Col md={1} xs={3} className="TxnAmt text-right text-danger  pad-5">
              01,50,000
            </RBS.Col>
            <RBS.Col md={3} xs={2} className="TxnAction text-right pad-5">
              <RBS.Button variant="outline-primary" size="sm"><FontAwesomeIcon icon={faDownload} /> <div className="d-none d-md-inline" >Download Files</div></RBS.Button>
            </RBS.Col>
          </RBS.Row>
          <RBS.Row className="txnRow">
            <RBS.Col md={5} xs={7} className="TxnType">
              <div className="txnNm">Booking And Registration</div>
              <div className="clearfix" />
              <div className="txnMobDetails d-block d-md-none"><small>12-May-2020</small></div>
            </RBS.Col>
            <RBS.Col md={3} className="TxnDate d-none d-md-block  pad-0">
              12-May-2020
            </RBS.Col>
            <RBS.Col md={1} xs={3} className="TxnAmt text-right text-danger  pad-5">
              50,000
            </RBS.Col>
            <RBS.Col md={3} xs={2} className="TxnAction text-right pad-5">
              <RBS.Button variant="outline-primary" size="sm"><FontAwesomeIcon icon={faDownload} /> <div className="d-none d-md-inline" >Download Files</div></RBS.Button>
            </RBS.Col>
          </RBS.Row>

        </RBS.Col>
      </RBS.Row>
    </RBS.Container>
    <div>
      <AddPayment show={modalShow} onHide={() => setModalShow(false)} />
    </div>
  </div>;
}

PaymentHistory.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  paymentHistory: makeSelectPaymentHistory(),
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

export default compose(withConnect)(PaymentHistory);
