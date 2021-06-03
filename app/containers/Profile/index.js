/**
 *
 * Profile
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import { useInjectSaga } from 'utils/injectSaga';
import { useInjectReducer } from 'utils/injectReducer';
import makeSelectProfile from './selectors';
import reducer from './reducer';
import saga from './saga';
import "./profile.css";

import * as RBS from 'react-bootstrap';
import { faExpandAlt, faPencilAlt, faWallet, faHouseUser, faRupeeSign, faEllipsisV, faFilePdf, faFileWord, faCouch, faPaintRoller, faCarrot, faTruckLoading, faCapsules, faShoppingBasket, faWrench, faCar, faCocktail, faClinicMedical, faGavel, faPhoneAlt, faPlusCircle, faChevronCircleRight, faSave, faTimes } from '@fortawesome/free-solid-svg-icons';
import { faFileExcel } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import userImg from '../../images/icons/UserIcon.jpg';
import ProgressBar from 'react-customizable-progressbar';
import Avatar, { ConfigProvider } from 'react-avatar';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';

export function Profile() {
  useInjectReducer({ key: 'profile', reducer });
  useInjectSaga({ key: 'profile', saga });

  return <RBS.Container fluid id="profContainer">
    <RBS.Row>
      <RBS.Col md={{ span: 10, offset: 1 }} xs={12}>
        <div>
          <h5>Personal Profile</h5>
          <hr className="hrgray" />
          <div className="clearfix" />
          <RBS.Row>
            <RBS.Col xs={12} md={3} className="text-center">
              <RBS.Image src={userImg} roundedCircle height="100" width="100" />
              <div className="clearfix" />
              <small><a href="javascript:;" >Change photo</a></small>
            </RBS.Col>
            <RBS.Col md={9}>
              <RBS.Row>
                <RBS.Col md={6}>
                  <RBS.Form.Group controlId="">
                    <RBS.Form.Label>First Name <span className="reqSign">*</span></RBS.Form.Label>
                    <RBS.Form.Control size="sm" type="text" placeholder="First Name" />
                  </RBS.Form.Group>
                </RBS.Col>
                <RBS.Col md={6}>
                  <RBS.Form.Group controlId="">
                    <RBS.Form.Label>Last Name <span className="reqSign">*</span></RBS.Form.Label>
                    <RBS.Form.Control size="sm" type="text" placeholder="First Name" />
                  </RBS.Form.Group>
                </RBS.Col>
                <RBS.Col md={6}>
                  <RBS.Form.Group controlId="">
                    <RBS.Form.Label>Email Address<span className="reqSign">*</span></RBS.Form.Label>
                    <RBS.Form.Control size="sm" type="text" placeholder="Email Address" />
                  </RBS.Form.Group>
                </RBS.Col>
                <RBS.Col md={6}>
                  <RBS.Form.Group controlId="">
                    <RBS.Form.Label>Phone Number<span className="reqSign">*</span></RBS.Form.Label>
                    <RBS.Form.Control size="sm" type="text" placeholder="Phone Number" />
                    <RBS.Form.Text className="text-muted">
                      <RBS.FormCheck type="checkbox" label="Use same for Whatsapp communication." />
                    </RBS.Form.Text>
                  </RBS.Form.Group>
                </RBS.Col>
                <RBS.Col md={12}>
                  <RBS.Form.Group controlId="">
                    <RBS.Form.Label>Current Address</RBS.Form.Label>
                    <RBS.Form.Control size="sm" type="text" placeholder="Phone Number" />
                  </RBS.Form.Group>
                </RBS.Col>
                <RBS.Col md={12} className="text-right formBtnSec">
                  <RBS.Form.Group controlId="">
                    <RBS.Button size="sm" variant="outline-primary"><FontAwesomeIcon icon={faSave} /> Submit</RBS.Button>
                  &nbsp; &nbsp;
                  <RBS.Button size="sm" variant="outline-dark"><FontAwesomeIcon icon={faTimes} /> Cancel</RBS.Button>
                  </RBS.Form.Group>
                </RBS.Col>
              </RBS.Row>
            </RBS.Col>
          </RBS.Row>
          <div className="clearfix" />
          <h5>Flat Profile</h5>
          <hr className="hrgray" />
          <div className="clearfix" />
          <RBS.Row>
            <RBS.Col md={12} >
              <RBS.Row>
                <RBS.Col md={3} xs={6}>
                  <RBS.Form.Group controlId="">
                    <RBS.Form.Label>Flat Number<span className="reqSign">*</span></RBS.Form.Label>
                    <RBS.Form.Control size="sm" type="text" placeholder="Flat Number" />
                  </RBS.Form.Group>
                </RBS.Col>
                <RBS.Col md={3} xs={6}>
                  <RBS.Form.Group controlId="">
                    <RBS.Form.Label>Floor</RBS.Form.Label>
                    <RBS.Form.Control size="sm" as="select">
                      <option>--Select--</option>
                      <option>1st Floor</option>
                      <option>2nd Floor</option>
                      <option>3rd Floor</option>
                      <option>4th Floor</option>
                      <option>5th Floor</option>
                      <option>6th Floor</option>
                      <option>7th Floor</option>
                      <option>8th Floor</option>
                      <option>9th Floor</option>
                      <option>10th Floor</option>
                      <option>11th Floor</option>
                    </RBS.Form.Control>
                  </RBS.Form.Group>
                </RBS.Col>
                <RBS.Col md={3} xs={6}>
                  <RBS.Form.Group controlId="">
                    <RBS.Form.Label>Type</RBS.Form.Label>
                    <RBS.Form.Control size="sm" as="select">
                      <option>--Select--</option>
                      <option>1BHK</option>
                      <option>2BHK</option>
                      <option>3BHK</option>
                    </RBS.Form.Control>
                  </RBS.Form.Group>
                </RBS.Col>
                <RBS.Col md={3} xs={6}>
                  <RBS.Form.Group controlId="">
                    <RBS.Form.Label>Area <small>(sq.ft.)</small></RBS.Form.Label>
                    <RBS.Form.Control size="sm" type="text" placeholder="Flat Area" />
                  </RBS.Form.Group>
                </RBS.Col>

              </RBS.Row>
              <RBS.Row>
                <RBS.Col md={3} xs={6}>
                  <RBS.Form.Group controlId="">
                    <RBS.Form.Label>Rera Number <span className="reqSign">*</span></RBS.Form.Label>
                    <RBS.Form.Control size="sm" type="text" placeholder="Rera Number" value="098765432109" disabled />
                  </RBS.Form.Group>
                </RBS.Col>
                <RBS.Col md={3} xs={6}>
                  <RBS.Form.Group controlId="">
                    <RBS.Form.Label>Purchase Date<span className="reqSign">*</span></RBS.Form.Label>
                    <RBS.Form.Control size="sm" type="text" placeholder="Purchase Date" value="12-Jun-2018" />
                  </RBS.Form.Group>
                </RBS.Col>
                <RBS.Col md={3} xs={6}>
                  <RBS.Form.Group controlId="">
                    <RBS.Form.Label>Agreement Date<span className="reqSign">*</span></RBS.Form.Label>
                    <RBS.Form.Control size="sm" type="text" placeholder="Agreement Date" value="12-Aug-2018" />
                  </RBS.Form.Group>
                </RBS.Col>
                <RBS.Col md={3} xs={6}>
                  <RBS.Form.Group controlId="">
                    <RBS.Form.Label>Completion Date<span className="reqSign">*</span> <small> Exp.</small></RBS.Form.Label>
                    <RBS.Form.Control size="sm" type="text" placeholder="Completion Date" value="01-Aug-2022" />
                  </RBS.Form.Group>
                </RBS.Col>
              </RBS.Row>
              <RBS.Row>
                <RBS.Col md={4} xs={12}>
                  <RBS.Form.Group controlId="">
                    <RBS.Form.Label>Project Name <span className="reqSign">*</span></RBS.Form.Label>
                    <RBS.Form.Control size="sm" type="text" placeholder="Project Name" value="[00910] Silver City" disabled />
                  </RBS.Form.Group>
                </RBS.Col>
                <RBS.Col md={4} xs={12}>
                  <RBS.Form.Group controlId="">
                    <RBS.Form.Label>Project By <span className="reqSign">*</span></RBS.Form.Label>
                    <RBS.Form.Control size="sm" type="text" placeholder="Project By" value="Silver Group" disabled />
                  </RBS.Form.Group>
                </RBS.Col>
                <RBS.Col md={4} xs={12}>
                  <RBS.Form.Group controlId="">
                    <RBS.Form.Label>Location <span className="reqSign">*</span></RBS.Form.Label>
                    <RBS.Form.Control size="sm" type="text" placeholder="Locationr" value="Jadhavwadi, Wadacha mala, Chikhali, Pune-411062." />
                  </RBS.Form.Group>
                </RBS.Col>
                <RBS.Col md={12} className="text-right formBtnSec">
                  <RBS.Form.Group controlId="">
                    <RBS.Button size="sm" variant="outline-primary"><FontAwesomeIcon icon={faSave} /> Submit</RBS.Button>
                  &nbsp; &nbsp;
                  <RBS.Button size="sm" variant="outline-dark"><FontAwesomeIcon icon={faTimes} /> Cancel</RBS.Button>
                  </RBS.Form.Group>
                </RBS.Col>
              </RBS.Row>

            </RBS.Col>
          </RBS.Row>
          <div className="clearfix" />
          <h5>Loan Profile</h5>
          <hr className="hrgray" />
          <div className="clearfix" />
          <RBS.Row>
            <RBS.Col md={12} >
              <RBS.Row>
                <RBS.Col md={3} xs={12}>
                  <RBS.Form.Group controlId="">
                    <RBS.Form.Label>Loan Account Number<span className="reqSign">*</span></RBS.Form.Label>
                    <RBS.Form.Control size="sm" type="text" placeholder="Loan Account Number" />
                  </RBS.Form.Group>
                </RBS.Col>
                <RBS.Col md={3} xs={12}>
                  <RBS.Form.Group controlId="">
                    <RBS.Form.Label>Bank</RBS.Form.Label>
                    <RBS.Form.Control size="sm" type="text" placeholder="Bank" /></RBS.Form.Group>
                </RBS.Col>
                <RBS.Col md={3} xs={12}>
                  <RBS.Form.Group controlId="">
                    <RBS.Form.Label>Branch</RBS.Form.Label>
                    <RBS.Form.Control size="sm" type="text" placeholder="Branch" />
                  </RBS.Form.Group>
                </RBS.Col>
                <RBS.Col md={3} xs={12}>
                  <RBS.Form.Group controlId="">
                    <RBS.Form.Label>Sanction Date</RBS.Form.Label>
                    <RBS.Form.Control size="sm" type="text" placeholder="Sanction Date" value="12-Dec-2018" />
                  </RBS.Form.Group>
                </RBS.Col>

              </RBS.Row>
              <RBS.Row>
                <RBS.Col md={3} xs={12}>
                  <RBS.Form.Group controlId="">
                    <RBS.Form.Label>Contact Person</RBS.Form.Label>
                    <RBS.Form.Control size="sm" type="text" placeholder="Contact Person" />
                  </RBS.Form.Group>
                </RBS.Col>
                <RBS.Col md={3} xs={12}>
                  <RBS.Form.Group controlId="">
                    <RBS.Form.Label>Email Address</RBS.Form.Label>
                    <RBS.Form.Control size="sm" type="text" placeholder="Email Address" />
                  </RBS.Form.Group>
                </RBS.Col>
                <RBS.Col md={3} xs={12}>
                  <RBS.Form.Group controlId="">
                    <RBS.Form.Label>Phone Number</RBS.Form.Label>
                    <RBS.Form.Control size="sm" type="text" placeholder="Phone Number" />
                  </RBS.Form.Group>
                </RBS.Col>
                <RBS.Col md={3} xs={12}>
                  <RBS.Form.Group controlId="">
                    <RBS.Form.Label>Whatsapp Number</RBS.Form.Label>
                    <RBS.Form.Control size="sm" type="text" placeholder="Whatsapp Number" />
                  </RBS.Form.Group>
                </RBS.Col>
              </RBS.Row>
              <RBS.Row>
                <RBS.Col md={12} className="text-right formBtnSec">
                  <RBS.Form.Group controlId="">
                    <RBS.Button size="sm" variant="outline-primary"><FontAwesomeIcon icon={faSave} /> Submit</RBS.Button>
                  &nbsp; &nbsp;
                  <RBS.Button size="sm" variant="outline-dark"><FontAwesomeIcon icon={faTimes} /> Cancel</RBS.Button>
                  </RBS.Form.Group>
                </RBS.Col>
              </RBS.Row>

            </RBS.Col>
          </RBS.Row>
        </div>
      </RBS.Col>
    </RBS.Row>
  </RBS.Container>
    ;
}

Profile.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  profile: makeSelectProfile(),
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

export default compose(withConnect)(Profile);
