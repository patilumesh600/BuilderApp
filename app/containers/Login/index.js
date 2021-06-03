/**
 *
 * Login
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import { useInjectSaga } from 'utils/injectSaga';
import { useInjectReducer } from 'utils/injectReducer';
import makeSelectLogin from './selectors';
import reducer from './reducer';
import saga from './saga';

import * as RBS from 'react-bootstrap';
import { faSearch, faBuilding } from '@fortawesome/free-solid-svg-icons';
import { faUserCircle, faQuestionCircle, faBell } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import "../Login/login.css";

export function Login() {
  useInjectReducer({ key: 'login', reducer });
  useInjectSaga({ key: 'login', saga });

  return <div id="loginContainer">
    <RBS.Container fluid>
      <RBS.Row>
        <RBS.Col md={7} className="infoTxtSec">
         <div className="infoHeading">We Helps you out with</div>
         <hr className="hrWarning-2x"/>
         <h4>
           <ul>
             <li>Bringing transparancy in the construction process.</li>
             <li>Track the progess of your own home.</li>
             <li>Plan and schedule a site visits.</li>
             <li>Explore the nearby service providers.</li>
           </ul>
         </h4>
    </RBS.Col>
        <RBS.Col md={4} className="loginBox">
          <h3 className="loginHeading3">Login</h3>
          <hr className="hrSecondary" />
          <RBS.Container>
            <RBS.Form>
              <RBS.Form.Group controlId="formBasicEmail">
                <RBS.Form.Label>Email address</RBS.Form.Label>
                <RBS.Form.Control type="email" placeholder="Enter email" />
              </RBS.Form.Group>

              <RBS.Form.Group controlId="formBasicPassword">
                <RBS.Form.Label>Password</RBS.Form.Label>
                <RBS.Form.Control type="password" placeholder="Password" />
              </RBS.Form.Group>
              <RBS.Form.Group controlId="formBasicCheckbox">
                <RBS.Form.Check type="checkbox" label="I accepts the terms and conditions" />
              </RBS.Form.Group>
              <RBS.Button variant="dark" block type="button">Login</RBS.Button>
              <RBS.FormGroup>
                <br />
                <RBS.Form.Text className="text-center regText">
                  Forgot password? <a className="regLink" href="javascript:;"> Reset here</a>
                </RBS.Form.Text>
              
                <RBS.Form.Text className="text-center regText">
                  New user? <a className="regLink" href="javascript:;"> Register</a>
                </RBS.Form.Text>

              </RBS.FormGroup>

            </RBS.Form>
          </RBS.Container>
        </RBS.Col>
      </RBS.Row>
    </RBS.Container>
  </div>

    ;
}

Login.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  login: makeSelectLogin(),
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

export default compose(withConnect)(Login);
