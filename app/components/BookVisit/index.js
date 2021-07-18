/* eslint-disable react/prop-types */
/**
 *
 * BookVisit
 *
 */

import React, { useState } from 'react';
import * as RBS from 'react-bootstrap';
import { faSave } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendarAlt } from '@fortawesome/free-solid-svg-icons';

import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";

function BookVisit(props) {
  const [startDate, setStartDate] = useState(new Date());

  return <RBS.Modal
    {...props}
    aria-labelledby="contained-modal-title-vcenter"
    dialogClassName="modal-45w"
  >
    <RBS.Modal.Header closeButton>
      <RBS.Modal.Title id="contained-modal-title-vcenter">
        <FontAwesomeIcon icon={faCalendarAlt} /> Book A Visit
      </RBS.Modal.Title>
    </RBS.Modal.Header>
    <RBS.Modal.Body>
      <RBS.Form>
        <RBS.Form.Row>
          <RBS.Col md={5}>
            <RBS.Form.Group controlId="formBasicEmail">
              <RBS.Form.Label>Visit Related To</RBS.Form.Label>
              <RBS.Form.Control as="select" size="sm">
                <option>--Select--</option>
                <option>Flat Visit</option>
                <option>Payment Related</option>
                <option>Document Submission</option>
                <option>Other</option>
              </RBS.Form.Control>
            </RBS.Form.Group>
          </RBS.Col>

          <RBS.Col md={7}>
            <RBS.Form.Group controlId="formBasicEmail">
              <RBS.Form.Label>Visit Date And Time</RBS.Form.Label>
              {/* <RBS.Form.Control type="text" placeholder="Transaction Date" size="sm" /> */}
              <DatePicker
                selected={startDate} onChange={(date) => setStartDate(date)} className="form-control form-control-sm"
                dateFormat="dd-MMM-yyyy hh:mm aa"
                peekNextMonth
                showMonthDropdown
                showYearDropdown
                dropdownMode="select"
                showTimeSelect
              />
            </RBS.Form.Group>
          </RBS.Col>
        </RBS.Form.Row>
        <RBS.Form.Row>
          <RBS.Col md={12}>
            <RBS.Form.Group controlId="exampleForm.ControlTextarea1">
              <RBS.Form.Label>Query <small>(Optional)</small></RBS.Form.Label>
              <RBS.Form.Control as="textarea" rows={3} />
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

BookVisit.propTypes = {};

export default BookVisit;
