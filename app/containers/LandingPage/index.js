/**
 *
 * LandingPage
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import { useInjectSaga } from 'utils/injectSaga';
import { useInjectReducer } from 'utils/injectReducer';
import makeSelectLandingPage from './selectors';
import reducer from './reducer';
import saga from './saga';


import * as RBS from 'react-bootstrap';
import { faSearch, faBuilding } from '@fortawesome/free-solid-svg-icons';
import { faUserCircle, faQuestionCircle, faBell } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './landing.css';

import banImg1 from '../../images/backgrounds/bg1.jpg';
import banImg2 from '../../images/backgrounds/bg4.jpg';
import banImg3 from '../../images/backgrounds/bg5.jpg';

export function LandingPage() {
  useInjectReducer({ key: 'landingPage', reducer });
  useInjectSaga({ key: 'landingPage', saga });

  return <div id="landingContainer">
<RBS.Container fluid>
  <RBS.Row>
<RBS.Col md={12} className="searchContainer">
  dshdjskhk dhsjkhd kh
</RBS.Col>
  </RBS.Row>
</RBS.Container>

    {/* <RBS.Carousel>
      <RBS.Carousel.Item>
        <img
          className="d-block w-100"
          src={banImg1}
          alt="First slide"
          height="580"
        />
        <RBS.Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </RBS.Carousel.Caption>
      </RBS.Carousel.Item>
      <RBS.Carousel.Item>
        <img
          className="d-block w-100"
          src={banImg2}
          alt="Second slide"
          height="580"
        />

        <RBS.Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </RBS.Carousel.Caption>
      </RBS.Carousel.Item>
      <RBS.Carousel.Item>
        <img
          className="d-block w-100"
          src={banImg3}
          alt="Third slide"
          height="580"
        />

        <RBS.Carousel.Caption>
          <h3>Third slide label</h3>
          <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
        </RBS.Carousel.Caption>
      </RBS.Carousel.Item>
    </RBS.Carousel> */}
  </div>;
}

LandingPage.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  landingPage: makeSelectLandingPage(),
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

export default compose(withConnect)(LandingPage);
