/**
 *
 * FlatProfile
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import { useInjectSaga } from 'utils/injectSaga';
import { useInjectReducer } from 'utils/injectReducer';
import makeSelectFlatProfile from './selectors';
import reducer from './reducer';
import saga from './saga';
import './flatProfile.css';
import * as RBS from 'react-bootstrap';
import { faExpandAlt, faPencilAlt, faWallet, faHouseUser, faRupeeSign, faEllipsisV, faFilePdf, faFileWord, faCouch, faPaintRoller, faCarrot, faTruckLoading, faCapsules, faShoppingBasket, faWrench, faCar, faCocktail, faClinicMedical, faGavel, faPhoneAlt, faPlusCircle, faChevronCircleRight } from '@fortawesome/free-solid-svg-icons';
import { faFileExcel } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import userImg from '../../images/icons/UserIcon.jpg';
import ProgressBar from 'react-customizable-progressbar';
import Avatar, { ConfigProvider } from 'react-avatar';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { Chrono } from "react-chrono";


export function FlatProfile() {
  useInjectReducer({ key: 'flatProfile', reducer });
  useInjectSaga({ key: 'flatProfile', saga });

  return <div id="flatProfContainer">
    <RBS.Container fluid>
      <RBS.Row>
        <RBS.Col md={3} className="">
          <div className="flatDetailCard">
            dlkjskjdjsldkljsldkjjd
      </div>
        </RBS.Col>
        <RBS.Col md={9}>
          <div className="timelineCard">
            <Chrono mode="VERTICAL"
              theme={{ primary: "#34656d", secondary: "#d3d3d3" }}
              hideControls >
              <RBS.Row className="timeLineSec">
                <RBS.Col md={12} className="pad-0">
                  <div className="timeLineDt">20-May-2021</div>
                  <hr className="hrgray" />
                </RBS.Col>
                
              </RBS.Row>
              <RBS.Row className="timeLineSec">
                <RBS.Col md={12} className="pad-0">
                  <h6>20-May-2021</h6>
                  <hr className="hrgray" />
                </RBS.Col>
                
              </RBS.Row>
              <RBS.Row className="timeLineSec">
                <RBS.Col md={12} className="pad-0">
                  <h6>20-May-2021</h6>
                  <hr className="hrgray" />
                </RBS.Col>
                
              </RBS.Row>
              <RBS.Row className="timeLineSec">
                <RBS.Col md={12} className="pad-0">
                  <h6>20-May-2021</h6>
                  <hr className="hrgray" />
                </RBS.Col>
                
              </RBS.Row>
              <RBS.Row className="timeLineSec">
                <RBS.Col md={12} className="pad-0">
                  <h6>20-May-2021</h6>
                  <hr className="hrgray" />
                </RBS.Col>
                
              </RBS.Row>
            </Chrono>
          </div>
        </RBS.Col>
      </RBS.Row>
    </RBS.Container>
  </div>;
}

FlatProfile.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  flatProfile: makeSelectFlatProfile(),
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

export default compose(withConnect)(FlatProfile);
