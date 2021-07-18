/* eslint-disable react/prop-types */
/**
 *
 * CallbackRequest
 *
 */

import React from 'react';
import * as RBS from 'react-bootstrap';
import { faSave } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhoneSquareAlt } from '@fortawesome/free-solid-svg-icons';

function CallbackRequest(props) {
  return <RBS.Modal
    {...props}
    size="md"
    aria-labelledby="contained-modal-title-vcenter"
  >
    <RBS.Modal.Header closeButton>
      <RBS.Modal.Title id="contained-modal-title-vcenter">
        <FontAwesomeIcon icon={faPhoneSquareAlt} /> Request for Callback.
      </RBS.Modal.Title>
    </RBS.Modal.Header>
    <RBS.Modal.Body>
      <RBS.Form>
        <RBS.Form.Row>
          <RBS.Col md={12}>
            <RBS.Form.Group controlId="formBasicEmail">
              <RBS.Form.Label>Name</RBS.Form.Label>
              <RBS.Form.Control type="text" placeholder="Your Name" size="sm" />
            </RBS.Form.Group>
          </RBS.Col>
        </RBS.Form.Row>
        <RBS.Form.Row>
          <RBS.Col md={12}>
            <RBS.Form.Group controlId="formBasicEmail">
              <RBS.Form.Label>Email address</RBS.Form.Label>
              <RBS.Form.Control type="email" placeholder="Email Address"  size="sm" />
            </RBS.Form.Group>
          </RBS.Col>
        </RBS.Form.Row>
        <RBS.Form.Row>
          <RBS.Col md={12}>
            <RBS.Form.Group controlId="formBasicEmail">
              <RBS.Form.Label>Phone Number</RBS.Form.Label>
              <RBS.Form.Control type="text" placeholder="Phone Number"  size="sm"/>
            </RBS.Form.Group>
          </RBS.Col>
        </RBS.Form.Row>
        <RBS.Form.Row>
          <RBS.Col md={12}>
            <RBS.Form.Group controlId="formBasicEmail">
              <RBS.Form.Label>Your Query</RBS.Form.Label>
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

CallbackRequest.propTypes = {};

export default CallbackRequest;
