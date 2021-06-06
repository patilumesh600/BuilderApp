/**
 *
 * MyContacts
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import { useInjectSaga } from 'utils/injectSaga';
import { useInjectReducer } from 'utils/injectReducer';
import makeSelectMyContacts from './selectors';
import reducer from './reducer';
import saga from './saga';

import * as RBS from 'react-bootstrap';
import { faCalendarPlus, faCloudDownloadAlt, faEllipsisV, faHome, faHouseUser, faPlus, faSearch, faStar, faUsers } from '@fortawesome/free-solid-svg-icons';
import { faFileExcel, faBuilding } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import userImg from '../../images/icons/UserIcon.jpg';
import ProgressBar from 'react-customizable-progressbar';
import Avatar, { ConfigProvider } from 'react-avatar';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import './contacts.css';

export function MyContacts() {
  useInjectReducer({ key: 'myContacts', reducer });
  useInjectSaga({ key: 'myContacts', saga });

  return <div id="contactContainer">
    <RBS.Container fluid>
      <RBS.Row>
        <RBS.Col md={{ span: 8, offset: 2 }} className="contactListCont">
          <RBS.Row>
            <RBS.Col md={5} xs={10}>
              <RBS.InputGroup size="sm">
                <RBS.InputGroup.Prepend>
                  <RBS.InputGroup.Text id="basic-addon2" className="bg-light"> <FontAwesomeIcon icon={faSearch} /> </RBS.InputGroup.Text>
                </RBS.InputGroup.Prepend>
                <RBS.FormControl
                  placeholder="Search by Name, Contact Number or Flat Number"
                  aria-label="Search by Name, Contact Number or Flat Number"
                  aria-describedby="basic-addon2"
                />

              </RBS.InputGroup>

            </RBS.Col>
            <RBS.Col md={5} className="d-none d-md-inline"></RBS.Col>
            <RBS.Col md={2} className="text-right" xs={2}>
              <RBS.Button variant="outline-primary" size="sm"> <FontAwesomeIcon icon={faPlus} /> <span className="d-none d-md-inline">Add</span></RBS.Button>
            </RBS.Col>
          </RBS.Row>
          <hr className="hrgray" />
          <RBS.Row>
            <RBS.Col md={12} className="contactListHdr">
              <FontAwesomeIcon icon={faStar} className="text-warning" /> Important Contacts
            </RBS.Col>
            <RBS.Col md={12} className="contactList">
              <RBS.Accordion>
                <RBS.Card>
                  <RBS.Accordion.Toggle as={RBS.Card.Header} eventKey="0">
                    <RBS.Row>
                      <RBS.Col md={1} xs={2} className="contactAvatar">
                        <Avatar size="40" round={true} name="Sanket Deshmukh" color="#364675" />
                      </RBS.Col>
                      <RBS.Col md={10} xs={8} className="pad-5">
                        <div className="contactNm">Sanket Deshmukh</div>
                        <div className="contactDetails"><RBS.Badge pill variant="secondary">A-306</RBS.Badge> | 9028900973</div>
                      </RBS.Col>
                      <RBS.Col md={1} xs={2} className="pad-5 text-right contactActn">
                        <div className=""><FontAwesomeIcon icon={faEllipsisV} /></div>

                      </RBS.Col>
                    </RBS.Row>
                  </RBS.Accordion.Toggle>
                  <RBS.Accordion.Collapse eventKey="0">
                    <RBS.Card.Body>Hello! I'm the body</RBS.Card.Body>
                  </RBS.Accordion.Collapse>
                </RBS.Card>
                <RBS.Card>
                  <RBS.Accordion.Toggle as={RBS.Card.Header} eventKey="1">
                    <RBS.Row>
                      <RBS.Col md={1} xs={2} className="contactAvatar">
                        <Avatar size="40" round={true} name="Mahesh Chavan" color="#900973" />
                      </RBS.Col>
                      <RBS.Col md={10} xs={8} className="pad-5">
                        <div className="contactNm">Mahesh Chavan</div>
                        <div className="contactDetails"><RBS.Badge pill variant="primary">Builder office</RBS.Badge> | 9975463675</div>
                      </RBS.Col>
                      <RBS.Col md={1} xs={2} className="pad-5 text-right contactActn">
                        <div className=""><FontAwesomeIcon icon={faEllipsisV} /></div>

                      </RBS.Col>
                    </RBS.Row>
                  </RBS.Accordion.Toggle>
                  <RBS.Accordion.Collapse eventKey="1">
                    <RBS.Card.Body>Hello! I'm another body</RBS.Card.Body>
                  </RBS.Accordion.Collapse>
                </RBS.Card>
                <RBS.Card>
                  <RBS.Accordion.Toggle as={RBS.Card.Header} eventKey="2">
                    <RBS.Row>
                      <RBS.Col md={1} xs={2} className="contactAvatar">
                        <Avatar size="40" round={true} name="Snehal Deshmukh" color="#279408" />
                      </RBS.Col>
                      <RBS.Col md={10} xs={8} className="pad-5">
                        <div className="contactNm">Snehal Deshmukh</div>
                        <div className="contactDetails"><RBS.Badge pill variant="warning">Bank Officer</RBS.Badge>  | 9028279408</div>
                      </RBS.Col>
                      <RBS.Col md={1} xs={2} className="pad-5 text-right contactActn">
                        <div className=""><FontAwesomeIcon icon={faEllipsisV} /></div>

                      </RBS.Col>
                    </RBS.Row>
                  </RBS.Accordion.Toggle>
                  <RBS.Accordion.Collapse eventKey="2">
                    <RBS.Card.Body>Hello! I'm another body</RBS.Card.Body>
                  </RBS.Accordion.Collapse>
                </RBS.Card>
                <RBS.Card>
                  <RBS.Accordion.Toggle as={RBS.Card.Header} eventKey="3">
                    <RBS.Row>
                      <RBS.Col md={1} xs={2} className="contactAvatar">
                        <Avatar size="40" round={true} name="Umesh Patil" color="#286638" />
                      </RBS.Col>
                      <RBS.Col md={10} xs={8} className="pad-5">
                        <div className="contactNm">Umesh Patil</div>
                        <div className="contactDetails"><RBS.Badge pill variant="dark">Interior Designer</RBS.Badge>  | 9028279408</div>
                      </RBS.Col>
                      <RBS.Col md={1} xs={2} className="pad-5 text-right contactActn">
                        <div className=""><FontAwesomeIcon icon={faEllipsisV} /></div>

                      </RBS.Col>
                    </RBS.Row>
                  </RBS.Accordion.Toggle>
                  <RBS.Accordion.Collapse eventKey="3">
                    <RBS.Card.Body>Hello! I'm another body</RBS.Card.Body>
                  </RBS.Accordion.Collapse>
                </RBS.Card>

              </RBS.Accordion>
            </RBS.Col>
            <RBS.Col md={12} className="contactListHdr">
              <FontAwesomeIcon icon={faHouseUser} className="text-secondary" /> Your Neighbourhood
            </RBS.Col>
            <RBS.Col md={12} className="contactList">
              <RBS.Accordion>
                <RBS.Card>
                  <RBS.Accordion.Toggle as={RBS.Card.Header} eventKey="0">
                    <RBS.Row>
                      <RBS.Col md={1} xs={2} className="contactAvatar">
                        <Avatar size="40" round={true} name="Ashwini Undale" color="#898989" />
                      </RBS.Col>
                      <RBS.Col md={10} xs={8} className="pad-5">
                        <div className="contactNm">Ashwini Undale</div>
                        <div className="contactDetails"><RBS.Badge pill variant="secondary">A-306</RBS.Badge> | 9028900973</div>
                      </RBS.Col>
                      <RBS.Col md={1} xs={2} className="pad-5 text-right contactActn">
                        <div className=""><FontAwesomeIcon icon={faEllipsisV} /></div>

                      </RBS.Col>
                    </RBS.Row>
                  </RBS.Accordion.Toggle>
                  <RBS.Accordion.Collapse eventKey="0">
                    <RBS.Card.Body>Hello! I'm the body</RBS.Card.Body>
                  </RBS.Accordion.Collapse>
                </RBS.Card>
                <RBS.Card>
                  <RBS.Accordion.Toggle as={RBS.Card.Header} eventKey="1">
                    <RBS.Row>
                      <RBS.Col md={1} xs={2} className="contactAvatar">
                        <Avatar size="40" round={true} name="Dhairya Gupta" color="#098765" />
                      </RBS.Col>
                      <RBS.Col md={10} xs={8} className="pad-5">
                        <div className="contactNm">Dhairya Gupta</div>
                        <div className="contactDetails"><RBS.Badge pill variant="secondary">A-102</RBS.Badge>  | 9975463675</div>
                      </RBS.Col>
                      <RBS.Col md={1} xs={2} className="pad-5 text-right contactActn">
                        <div className=""><FontAwesomeIcon icon={faEllipsisV} /></div>

                      </RBS.Col>
                    </RBS.Row>
                  </RBS.Accordion.Toggle>
                  <RBS.Accordion.Collapse eventKey="1">
                    <RBS.Card.Body>Hello! I'm another body</RBS.Card.Body>
                  </RBS.Accordion.Collapse>
                </RBS.Card>
                <RBS.Card>
                  <RBS.Accordion.Toggle as={RBS.Card.Header} eventKey="2">
                    <RBS.Row>
                      <RBS.Col md={1} xs={2} className="contactAvatar">
                        <Avatar size="40" round={true} name="Gaurav Vij" color="#987654" />
                      </RBS.Col>
                      <RBS.Col md={10} xs={8} className="pad-5">
                        <div className="contactNm">Gaurav Vij</div>
                        <div className="contactDetails"><RBS.Badge pill variant="secondary">A-102</RBS.Badge>  | 9975463675</div>
                      </RBS.Col>
                      <RBS.Col md={1} xs={2} className="pad-5 text-right contactActn">
                        <div className=""><FontAwesomeIcon icon={faEllipsisV} /></div>

                      </RBS.Col>
                    </RBS.Row>
                  </RBS.Accordion.Toggle>
                  <RBS.Accordion.Collapse eventKey="2">
                    <RBS.Card.Body>Hello! I'm another body</RBS.Card.Body>
                  </RBS.Accordion.Collapse>
                </RBS.Card>
                <RBS.Card>
                  <RBS.Accordion.Toggle as={RBS.Card.Header} eventKey="3">
                    <RBS.Row>
                      <RBS.Col md={1} xs={2} className="contactAvatar">
                        <Avatar size="40" round={true} name="Chinmoy Mishra" color="#123456" />
                      </RBS.Col>
                      <RBS.Col md={10} xs={8} className="pad-5">
                        <div className="contactNm">Chinmoy Mishra</div>
                        <div className="contactDetails"><RBS.Badge pill variant="secondary">A-105</RBS.Badge>  | 9975463675</div>
                      </RBS.Col>
                      <RBS.Col md={1} xs={2} className="pad-5 text-right contactActn">
                        <div className=""><FontAwesomeIcon icon={faEllipsisV} /></div>

                      </RBS.Col>
                    </RBS.Row> </RBS.Accordion.Toggle>
                  <RBS.Accordion.Collapse eventKey="3">
                    <RBS.Card.Body>Hello! I'm another body</RBS.Card.Body>
                  </RBS.Accordion.Collapse>
                </RBS.Card>
                <RBS.Card>
                  <RBS.Accordion.Toggle as={RBS.Card.Header} eventKey="3">
                    <RBS.Row>
                      <RBS.Col md={1} xs={2} className="contactAvatar">
                        <Avatar size="40" round={true} name="Chinmoy Mishra" color="#123416" />
                      </RBS.Col>
                      <RBS.Col md={10} xs={8} className="pad-5">
                        <div className="contactNm">Chinmoy Mishra</div>
                        <div className="contactDetails"><RBS.Badge pill variant="secondary">A-105</RBS.Badge>  | 9975463675</div>
                      </RBS.Col>
                      <RBS.Col md={1} xs={2} className="pad-5 text-right contactActn">
                        <div className=""><FontAwesomeIcon icon={faEllipsisV} /></div>

                      </RBS.Col>
                    </RBS.Row> </RBS.Accordion.Toggle>
                  <RBS.Accordion.Collapse eventKey="3">
                    <RBS.Card.Body>Hello! I'm another body</RBS.Card.Body>
                  </RBS.Accordion.Collapse>
                </RBS.Card>
                <RBS.Card>
                  <RBS.Accordion.Toggle as={RBS.Card.Header} eventKey="3">
                    <RBS.Row>
                      <RBS.Col md={1} xs={2} className="contactAvatar">
                        <Avatar size="40" round={true} name="Chinmoy Mishra" color="#244267" />
                      </RBS.Col>
                      <RBS.Col md={10} xs={8} className="pad-5">
                        <div className="contactNm">Chinmoy Mishra</div>
                        <div className="contactDetails"><RBS.Badge pill variant="secondary">A-105</RBS.Badge>  | 9975463675</div>
                      </RBS.Col>
                      <RBS.Col md={1} xs={2} className="pad-5 text-right contactActn">
                        <div className=""><FontAwesomeIcon icon={faEllipsisV} /></div>

                      </RBS.Col>
                    </RBS.Row> </RBS.Accordion.Toggle>
                  <RBS.Accordion.Collapse eventKey="3">
                    <RBS.Card.Body>Hello! I'm another body</RBS.Card.Body>
                  </RBS.Accordion.Collapse>
                </RBS.Card>
                <RBS.Card>
                  <RBS.Accordion.Toggle as={RBS.Card.Header} eventKey="3">
                    <RBS.Row>
                      <RBS.Col md={1} xs={2} className="contactAvatar">
                        <Avatar size="40" round={true} name="Chinmoy Mishra" color="#645663" />
                      </RBS.Col>
                      <RBS.Col md={10} xs={8} className="pad-5">
                        <div className="contactNm">Chinmoy Mishra</div>
                        <div className="contactDetails"><RBS.Badge pill variant="secondary">A-105</RBS.Badge>  | 9975463675</div>
                      </RBS.Col>
                      <RBS.Col md={1} xs={2} className="pad-5 text-right contactActn">
                        <div className=""><FontAwesomeIcon icon={faEllipsisV} /></div>

                      </RBS.Col>
                    </RBS.Row> </RBS.Accordion.Toggle>
                  <RBS.Accordion.Collapse eventKey="3">
                    <RBS.Card.Body>Hello! I'm another body</RBS.Card.Body>
                  </RBS.Accordion.Collapse>
                </RBS.Card>
                <RBS.Card>
                  <RBS.Accordion.Toggle as={RBS.Card.Header} eventKey="3">
                    <RBS.Row>
                      <RBS.Col md={1} xs={2} className="contactAvatar">
                        <Avatar size="40" round={true} name="Chinmoy Mishra" color="#754439" />
                      </RBS.Col>
                      <RBS.Col md={10} xs={8} className="pad-5">
                        <div className="contactNm">Chinmoy Mishra</div>
                        <div className="contactDetails"><RBS.Badge pill variant="secondary">A-105</RBS.Badge>  | 9975463675</div>
                      </RBS.Col>
                      <RBS.Col md={1} xs={2} className="pad-5 text-right contactActn">
                        <div className=""><FontAwesomeIcon icon={faEllipsisV} /></div>

                      </RBS.Col>
                    </RBS.Row> </RBS.Accordion.Toggle>
                  <RBS.Accordion.Collapse eventKey="3">
                    <RBS.Card.Body>Hello! I'm another body</RBS.Card.Body>
                  </RBS.Accordion.Collapse>
                </RBS.Card>
                <RBS.Card>
                  <RBS.Accordion.Toggle as={RBS.Card.Header} eventKey="3">
                    <RBS.Row>
                      <RBS.Col md={1} xs={2} className="contactAvatar">
                        <Avatar size="40" round={true} name="Chinmoy Mishra" color="#967993" />
                      </RBS.Col>
                      <RBS.Col md={10} xs={8} className="pad-5">
                        <div className="contactNm">Chinmoy Mishra</div>
                        <div className="contactDetails"><RBS.Badge pill variant="secondary">A-105</RBS.Badge>  | 9975463675</div>
                      </RBS.Col>
                      <RBS.Col md={1} xs={2} className="pad-5 text-right contactActn">
                        <div className=""><FontAwesomeIcon icon={faEllipsisV} /></div>

                      </RBS.Col>
                    </RBS.Row> </RBS.Accordion.Toggle>
                  <RBS.Accordion.Collapse eventKey="3">
                    <RBS.Card.Body>Hello! I'm another body</RBS.Card.Body>
                  </RBS.Accordion.Collapse>
                </RBS.Card>

              </RBS.Accordion>
            </RBS.Col>
          </RBS.Row>
        </RBS.Col>
     
     
      </RBS.Row>
    </RBS.Container>
  </div>;
}

MyContacts.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  myContacts: makeSelectMyContacts(),
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

export default compose(withConnect)(MyContacts);
