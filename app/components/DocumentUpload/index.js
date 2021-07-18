/* eslint-disable react/prop-types */
/* eslint-disable no-undef */
/**
 *
 * DocumentUpload
 *
 */

import React from 'react';
import * as RBS from 'react-bootstrap';
import { faSave, faTrashAlt } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFileUpload, faPlus} from '@fortawesome/free-solid-svg-icons';

function DocumentUpload(props) {
  return <RBS.Modal
    {...props}
    size="lg"
    aria-labelledby="contained-modal-title-vcenter"
  >
    <RBS.Modal.Header closeButton>
      <RBS.Modal.Title id="contained-modal-title-vcenter">
        <FontAwesomeIcon icon={faFileUpload} /> Upload Document
      </RBS.Modal.Title>
    </RBS.Modal.Header>
    <RBS.Modal.Body>
      <RBS.Form>
        <RBS.Row>
          <RBS.Col md={12} className="text-right">
            <RBS.Button size="sm" variant="outline-dark">
              <FontAwesomeIcon icon={faPlus} /> Add More
            </RBS.Button>
          </RBS.Col>
        </RBS.Row>
        <RBS.Form.Row className="fileRow">
          <RBS.Col md={3} xs={12}>
            <RBS.Form.Group  className="mb-1" controlId="exampleForm.ControlSelect1">
              <RBS.Form.Label>Related To</RBS.Form.Label>
              <RBS.Form.Control as="select" size="sm">
                <option>-- Select --</option>
                <option>Flat Documents</option>
                <option>Builder Documents</option>
                <option>Bank Documents</option>
                <option>Personal</option>
                <option>Others</option>
              </RBS.Form.Control>
            </RBS.Form.Group>
          </RBS.Col>
          <RBS.Col md={7} xs={12}>
            <RBS.Form.Label >Files</RBS.Form.Label>
            <RBS.Form.Control type="file" placeholder="Select Files" size="sm" />
          </RBS.Col>
          <RBS.Col md={2} xs={12} className="text-right">
            <RBS.Form.Label >&nbsp;</RBS.Form.Label>
            <RBS.Form.Text><FontAwesomeIcon icon={faTrashAlt} className="text-danger" /></RBS.Form.Text>
          </RBS.Col>

        </RBS.Form.Row>
        <RBS.Form.Row className="fileRow">
          <RBS.Col md={3} xs={12}>
            <RBS.Form.Group className="mb-1" controlId="exampleForm.ControlSelect1">
              <RBS.Form.Label>Related To</RBS.Form.Label>
              <RBS.Form.Control as="select" size="sm">
                <option>-- Select --</option>
                <option>Flat Documents</option>
                <option>Builder Documents</option>
                <option>Bank Documents</option>
                <option>Personal</option>
                <option>Others</option>
              </RBS.Form.Control>
            </RBS.Form.Group>
          </RBS.Col>
          <RBS.Col md={7} xs={12}>
            <RBS.Form.Label >Files</RBS.Form.Label>
            <RBS.Form.Control type="file" placeholder="Select Files" size="sm" />
          </RBS.Col>
          <RBS.Col md={2} xs={12} className="text-right">
            <RBS.Form.Label >&nbsp;</RBS.Form.Label>
            <RBS.Form.Text><FontAwesomeIcon icon={faTrashAlt} className="text-danger" /></RBS.Form.Text>
          </RBS.Col>

        </RBS.Form.Row>


      </RBS.Form>
    </RBS.Modal.Body>
    <RBS.Modal.Footer>
      <RBS.Button variant="outline-primary" size="sm" onClick={props.onHide}><FontAwesomeIcon icon={faSave} /> Save</RBS.Button>
      <RBS.Button variant="outline-secondary" size="sm" onClick={props.onHide}>Cancel</RBS.Button>
    </RBS.Modal.Footer>
  </RBS.Modal>;
}

DocumentUpload.propTypes = {};

export default DocumentUpload;
