/* eslint-disable react/prop-types */
/**
 *
 * AddPayment
 *
 */

import React, { useState } from 'react';
import * as RBS from 'react-bootstrap';
import { faSave } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWallet } from '@fortawesome/free-solid-svg-icons';

import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";

function AddPayment(props) {
  const [startDate, setStartDate] = useState(new Date());
  return <RBS.Modal
    {...props}
    size="md"
    aria-labelledby="contained-modal-title-vcenter"
  >
    <RBS.Modal.Header closeButton>
      <RBS.Modal.Title id="contained-modal-title-vcenter">
        <FontAwesomeIcon icon={faWallet} /> Add Payment Details
      </RBS.Modal.Title>
    </RBS.Modal.Header>
    <RBS.Modal.Body>
      <RBS.Form>
        <RBS.Form.Row>
          <RBS.Col md={6}>
            <RBS.Form.Group controlId="formBasicEmail">
              <RBS.Form.Label>Transaction Number</RBS.Form.Label>
              <RBS.Form.Control type="text" placeholder="Transaction Number" size="sm" />
            </RBS.Form.Group>
          </RBS.Col>
          <RBS.Col md={6}>
            <RBS.Form.Group controlId="formBasicEmail">
              <RBS.Form.Label>Transaction Date</RBS.Form.Label>
              {/* <RBS.Form.Control type="text" placeholder="Transaction Date" size="sm" /> */}
              <DatePicker
                selected={startDate} onChange={(date) => setStartDate(date)} className="form-control form-control-sm"
                dateFormat="dd-MMM-yyyy"
                peekNextMonth
                showMonthDropdown
                showYearDropdown
                dropdownMode="select"
              />
            </RBS.Form.Group>
          </RBS.Col>
        </RBS.Form.Row>
        <RBS.Form.Row>
          <RBS.Col md={12}>
            <RBS.Form.Group controlId="formBasicEmail">
              <RBS.Form.Label>Payment Related To</RBS.Form.Label>
              <RBS.Form.Control type="email" placeholder="Payment Title" size="sm" />
            </RBS.Form.Group>
          </RBS.Col>
        </RBS.Form.Row>
        <RBS.Form.Row>
          <RBS.Col md={7}>
            <RBS.Form.Group controlId="formBasicEmail">
              <RBS.Form.Label>Paid To</RBS.Form.Label>
              <RBS.Form.Control type="text" placeholder="Payment Paid To " size="sm" />
            </RBS.Form.Group>
          </RBS.Col>
          <RBS.Col md={5}>
            <RBS.Form.Group controlId="formBasicEmail">
              <RBS.Form.Label>Amount</RBS.Form.Label>
              <RBS.Form.Control type="text" placeholder="Amount" size="sm" />
            </RBS.Form.Group>
          </RBS.Col>
        </RBS.Form.Row>
        <RBS.Form.Row>
          <RBS.Col md={12}>
            <RBS.Form.Group controlId="formBasicEmail">
              <RBS.Form.File id="exampleFormControlFile1" label="Files" />
            </RBS.Form.Group>
          </RBS.Col>
        </RBS.Form.Row>

      </RBS.Form>
    </RBS.Modal.Body>
    <RBS.Modal.Footer>
      <RBS.Button variant="outline-primary" size="sm" onClick={props.onHide}><FontAwesomeIcon icon={faSave} /> Submit</RBS.Button>
      <RBS.Button variant="outline-secondary" size="sm" onClick={props.onHide}>Cancel</RBS.Button>
    </RBS.Modal.Footer>
  </RBS.Modal>;
}

AddPayment.propTypes = {};

export default AddPayment;
