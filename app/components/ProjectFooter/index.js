/**
 *
 * ProjectFooter
 *
 */

import React from 'react';
// import PropTypes from 'prop-types';
// import styled from 'styled-components';
import * as RBS from 'react-bootstrap';
import './footer.css';
import { faFacebook, faInstagram, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function ProjectFooter() {
  return <div id="ftrContainer">
    <RBS.Container fluid>
      <RBS.Row>
        <RBS.Col md={3}>
          Powered by : <a className="ftSocialLink" href="linkedIn.in">SpanApp India ltd.</a>
        </RBS.Col>
        <RBS.Col md={{ span: 4, offset: 5 }}> Contact Us on &nbsp;
        <a className="ftSocialLink" href="fb.com"><FontAwesomeIcon icon={faFacebook} /> </a> | <a className="ftSocialLink" href="instagram.com">  <FontAwesomeIcon icon={faInstagram} /> </a>
        | <a className="ftSocialLink" href="linkedIn.in">  <FontAwesomeIcon icon={faLinkedinIn} /> </a>
        </RBS.Col>
      </RBS.Row>
    </RBS.Container>
  </div>;
}

ProjectFooter.propTypes = {};

export default ProjectFooter;
