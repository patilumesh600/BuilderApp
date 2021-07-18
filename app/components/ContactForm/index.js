/* eslint-disable react/prop-types */
/* eslint-disable no-undef */
/**
 *
 * ContactForm
 *
 */

import React from 'react';
import * as RBS from 'react-bootstrap';
import { faSave } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function ContactForm() {
  return <RBS.Modal
    {...props}
    size="lg"
    aria-labelledby="contained-modal-title-vcenter"
  >
    <RBS.Modal.Header closeButton>
      <RBS.Modal.Title id="contained-modal-title-vcenter">
        Add Case Note
      </RBS.Modal.Title>
    </RBS.Modal.Header>
    <RBS.Modal.Body>
      <RBS.Form>
        <RBS.Form.Row>
          <RBS.Col md={7} xs={12}>
            <RBS.Form.Label >Note Title</RBS.Form.Label>
            <RBS.Form.Control placeholder="Title" size="sm" />
          </RBS.Col>
          <RBS.Col md={3} xs={12}>
            <RBS.Form.Label >Case Number</RBS.Form.Label>
            <RBS.Form.Control placeholder="Case Number" size="sm" />
          </RBS.Col>
          <RBS.Col md={2} xs={12}>
            <RBS.Form.Label >Note Date</RBS.Form.Label>
            <RBS.Form.Control placeholder="Date" size="sm" />
          </RBS.Col>
        </RBS.Form.Row>
        <RBS.Form.Row>
          <RBS.Col md={12} xs={12}>
            <RBS.Form.Group controlId="exampleForm.ControlTextarea1">
              <RBS.Form.Label>Notes</RBS.Form.Label>
              <RBS.Form.Control className="notesArea" as="textarea" rows={12} />
            </RBS.Form.Group>
          </RBS.Col>
        </RBS.Form.Row>
      </RBS.Form>
    </RBS.Modal.Body>
    <RBS.Modal.Footer>
      <RBS.Button variant="warning" onClick={props.onHide}><FontAwesomeIcon icon={faSave} /> Save</RBS.Button>
      <RBS.Button variant="dark" onClick={props.onHide}>Cancel</RBS.Button>
    </RBS.Modal.Footer>
  </RBS.Modal>
}

ContactForm.propTypes = {};

export default ContactForm;
