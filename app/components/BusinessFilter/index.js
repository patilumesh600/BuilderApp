/**
 *
 * BusinessFilter
 *
 */

import React from 'react';
import * as RBS from 'react-bootstrap';
import { faFilter, faSadTear } from '@fortawesome/free-solid-svg-icons';
import { faAddressBook, faStar } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './filters.css';

function BusinessFilter() {
  return <div id="filterSecMain">
    <RBS.Container>
      <RBS.Row>
        <RBS.Col md={12}>
          <h6><FontAwesomeIcon icon={faFilter} /> Filters</h6>
          <hr className="hrgray" />
        </RBS.Col>
        <RBS.Col md={12} className="mb-1">
          <div className="filterHeading mb-1">Distance</div>
          <div className="clearfix" />
          <RBS.Form.Group className="mb-0">
            <RBS.Form.Check type="checkbox" label="Less Than 5 km" />
          </RBS.Form.Group>
          <RBS.Form.Group className="mb-0">
            <RBS.Form.Check type="checkbox" label="5-10 Km" />
          </RBS.Form.Group>
          <RBS.Form.Group className="mb-0">
            <RBS.Form.Check type="checkbox" label="10-25 Km" />
          </RBS.Form.Group>
          <RBS.Form.Group className="mb-0">
            <RBS.Form.Check type="checkbox" label="25 Km and Above" />
          </RBS.Form.Group>
        </RBS.Col>
        <RBS.Col md={12}>
          <div className="filterHeading  mb-1">Rating</div>
          <div className="clearfix" />
          <RBS.Form.Group className="mb-0">
            <RBS.Form.Check type="checkbox" />
            <label htmlFor="fltCat2">
              &nbsp; <FontAwesomeIcon icon={faStar} />
            </label>
          </RBS.Form.Group>
          <RBS.Form.Group className="mb-0">
            <RBS.Form.Check type="checkbox" />
            <label htmlFor="fltCat2">
              &nbsp; <FontAwesomeIcon icon={faStar} />
              &nbsp; <FontAwesomeIcon icon={faStar} />
            </label>
          </RBS.Form.Group>
          <RBS.Form.Group className="mb-0">
            <RBS.Form.Check type="checkbox" />
            <label htmlFor="fltCat2">
              &nbsp; <FontAwesomeIcon icon={faStar} />
              &nbsp; <FontAwesomeIcon icon={faStar} />
              &nbsp; <FontAwesomeIcon icon={faStar} />
            </label>
          </RBS.Form.Group>
          <RBS.Form.Group className="mb-0">
            <RBS.Form.Check type="checkbox" />
            <label htmlFor="fltCat2">
              &nbsp; <FontAwesomeIcon icon={faStar} />
              &nbsp; <FontAwesomeIcon icon={faStar} />
              &nbsp; <FontAwesomeIcon icon={faStar} />
              &nbsp; <FontAwesomeIcon icon={faStar} />
            </label>
          </RBS.Form.Group>
          <RBS.Form.Group className="mb-0">
            <RBS.Form.Check type="checkbox" />
            <label htmlFor="fltCat2">
              &nbsp; <FontAwesomeIcon icon={faStar} />
              &nbsp; <FontAwesomeIcon icon={faStar} />
              &nbsp; <FontAwesomeIcon icon={faStar} />
              &nbsp; <FontAwesomeIcon icon={faStar} />
              &nbsp; <FontAwesomeIcon icon={faStar} />
            </label>
          </RBS.Form.Group>
        </RBS.Col>

        <RBS.Col md={12}>
          <div className="filterHeading  mb-1">Visit Type</div>
          <div className="clearfix" />
          <RBS.Form.Group className="mb-0">
            <RBS.Form.Check type="checkbox" label="Online Services" />
          </RBS.Form.Group>
          <RBS.Form.Group className="mb-0">
            <RBS.Form.Check type="checkbox" label="Offline Services" />
          </RBS.Form.Group>
        </RBS.Col>
      </RBS.Row>
    </RBS.Container>
  </div>;
}

BusinessFilter.propTypes = {};

export default BusinessFilter;
