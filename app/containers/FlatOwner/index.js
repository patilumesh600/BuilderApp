/* eslint-disable import/order */
/* eslint-disable no-unused-vars */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable no-script-url */
/* eslint-disable react/no-unused-prop-types */
/**
 *
 * FlatOwner
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';


import * as RBS from 'react-bootstrap';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck, faClipboardList, faCloudDownloadAlt, faEllipsisV, faFileDownload, faPlusCircle, faRupeeSign, faSave, faTimes } from '@fortawesome/free-solid-svg-icons';
import { faCalendarPlus, faClock } from '@fortawesome/free-regular-svg-icons';
import ProgressBar from 'react-customizable-progressbar';

import Avatar, { ConfigProvider } from 'react-avatar';

import { Chrono } from "react-chrono";

import { useInjectSaga } from 'utils/injectSaga';
import { useInjectReducer } from 'utils/injectReducer';
import makeSelectFlatOwner from './selectors';
import reducer from './reducer';
import saga from './saga';
import './flatOwner.css';


export function FlatOwner() {
  useInjectReducer({ key: 'flatOwner', reducer });
  useInjectSaga({ key: 'flatOwner', saga });

  return <div id="flatOwnerContainer">
    <RBS.Container fluid>
      <RBS.Row>
        <RBS.Col md={4}>
          <div className="profSec secBlue">
            <RBS.Row>
              <RBS.Col md={4} xs={12} className="text-center pad-t-10">
                <Avatar round="95px" name="Sanket Deshmukh" size="95" color="#bebe2d" />
              </RBS.Col>
              <RBS.Col md={8} xs={12}>
                <div className="userNm">Sanket Deshmukh</div>
                <hr className="hrgray" />
                <div className="flatProf">A-306</div>
                <div className="purchaseDt">Phone: 9975463675</div>
                <div className="completionDt">Email: sanketdeshmukh40@gmail.com</div>
              </RBS.Col>
            </RBS.Row>
          </div>
        </RBS.Col>
        <RBS.Col md={4}>
          <div className="profSec secRed">
            <RBS.Row>
              <RBS.Col md={4}>
                {/* <RBS.ProgressBar variant="success" now={60} /> */}

                <div className="item ">
                  <ProgressBar
                    radius={40}
                    progress={60}
                    strokeWidth={7}
                    strokeColor="#58feab"
                    trackStrokeWidth={1}
                    trackStrokeColor="#dddddd"
                    strokeLinecap="round"
                    pointerRadius={0}
                    initialAnimation
                    transition="1.5s ease 0.5s"
                    trackTransition="0s ease"
                  >
                  </ProgressBar>
                </div>
              </RBS.Col>
              <RBS.Col md={8}>
                <div className="flatCompDetails"> 60% Work Completed </div>
                <hr className="hrgray" />
                <div className="flatDetails"> Flat Details: 962 Sq. Ft., 2BHK </div>
                <div className="flatDetails"> Purchase Date: 12-JAN-2016 </div>
                <div className="flatDetails"> Completion Date: 12-APR-2021 </div>
              </RBS.Col>
            </RBS.Row>
          </div>
        </RBS.Col>
        <RBS.Col md={4}>
          <div className="profSec secVoilet">
            <RBS.Row>
              <RBS.Col md={4}>
                {/* <RBS.ProgressBar variant="success" now={60} /> */}

                <div className="item ">
                  <ProgressBar
                    radius={40}
                    progress={55}
                    strokeWidth={7}
                    strokeColor="#be50f2"
                    trackStrokeWidth={1}
                    trackStrokeColor="#dddddd"
                    strokeLinecap="round"
                    pointerRadius={0}
                    initialAnimation
                    transition="1.5s ease 0.5s"
                    trackTransition="0s ease"
                  >
                  </ProgressBar>
                </div>
              </RBS.Col>
              <RBS.Col md={8}>
                <div className="flatCompDetails"> 55% Payment Paid </div>
                <hr className="hrgray" />
                <div className="flatDetails"> Total Amount: 38,00,000/- </div>
                <div className="flatDetails"> Purchase Date: 12-JAN-2016 </div>
                <div className="flatDetails"> Completion Date: 12-APR-2021 </div>
              </RBS.Col>
            </RBS.Row>

          </div>
        </RBS.Col>
      </RBS.Row>
      <RBS.Row>
        <RBS.Col md={12}>
          <br />
          <RBS.Tab.Container id="left-tabs-example" defaultActiveKey="first">
            <RBS.Row>
              <RBS.Col md={12} sm={12} className="text-center tabHdr">
                <RBS.Row>
                  <RBS.Col md={{ span: 6, offset: 3 }} xs={12}>
                    <RBS.Nav className="tabCont">
                      <RBS.Row>
                        <RBS.Col md={3} xs={3} className="pad-0">
                          <RBS.Nav.Item>
                            <RBS.Nav.Link eventKey="first">Visit History</RBS.Nav.Link>
                          </RBS.Nav.Item>
                        </RBS.Col>
                        <RBS.Col md={3} xs={3} className="pad-0">
                          <RBS.Nav.Item>
                            <RBS.Nav.Link eventKey="second">Payment History</RBS.Nav.Link>
                          </RBS.Nav.Item>
                        </RBS.Col>
                        <RBS.Col md={3} xs={3} className="pad-0">
                          <RBS.Nav.Item>
                            <RBS.Nav.Link eventKey="third">Flat Progress</RBS.Nav.Link>
                          </RBS.Nav.Item>
                        </RBS.Col>
                        <RBS.Col md={3} xs={3} className="pad-0">
                          <RBS.Nav.Item>
                            <RBS.Nav.Link eventKey="forth">User Details</RBS.Nav.Link>
                          </RBS.Nav.Item>
                        </RBS.Col>
                      </RBS.Row>
                    </RBS.Nav>
                  </RBS.Col>
                </RBS.Row>


                {/*  */}
              </RBS.Col>
              <RBS.Col md={12}>
                <RBS.Tab.Content>
                  <RBS.Tab.Pane eventKey="first">
                    <RBS.Container fluid>
                      <RBS.Row>
                        <RBS.Col md={12}>
                          <div className="secHdr">Upcoming Visits</div>
                          <hr className="hrgray" />
                          <div className="clearfix" />
                        </RBS.Col>
                        <RBS.Col md={12}>
                          <div className="visitCard">
                            <RBS.Row>
                              <RBS.Col md={1}>
                                <div className="visitDt text-center">
                                  <div className="dtSec">01</div>
                                  <div className="clearfix" />
                                  <div className="monthSec">AUG-2021</div>
                                </div>
                                <div className="clearfix" />
                                <div className="visitTime"></div>
                              </RBS.Col>
                              <RBS.Col md={3} className="visitRelatedToSec pad-t-15">Interior Designer Visits</RBS.Col>
                              <RBS.Col md={1} className="visitTimeSec  pad-t-15">01:30 PM</RBS.Col>
                              <RBS.Col md={6} className="visitQuerySec  pad-t-15">Visiting for interior discussion and Planning. Visiting for interior discussion and Planning.</RBS.Col>
                              <RBS.Col md={1} className="visitAction pad-t-15">
                                <RBS.Row>
                                  <RBS.Col md={4}>
                                    <FontAwesomeIcon icon={faCheck} className="text-success" />
                                  </RBS.Col>
                                  <RBS.Col md={4}>
                                    <FontAwesomeIcon icon={faTimes} className="text-danger" />
                                  </RBS.Col>
                                  <RBS.Col md={4}>
                                    <FontAwesomeIcon icon={faClock} className="text-primary" />
                                  </RBS.Col>
                                </RBS.Row>
                              </RBS.Col>
                            </RBS.Row>
                          </div>
                        </RBS.Col>
                        <RBS.Col md={12}>
                          <div className="visitCard">
                            <RBS.Row>
                              <RBS.Col md={1}>
                                <div className="visitDt text-center">
                                  <div className="dtSec">29</div>
                                  <div className="clearfix" />
                                  <div className="monthSec">JUL-2021</div>
                                </div>
                                <div className="clearfix" />
                                <div className="visitTime"></div>
                              </RBS.Col>
                              <RBS.Col md={3} className="visitRelatedToSec pad-t-15">Interior Designer Visits</RBS.Col>
                              <RBS.Col md={1} className="visitTimeSec  pad-t-15">01:30 PM</RBS.Col>
                              <RBS.Col md={6} className="visitQuerySec  pad-t-15">Visiting for interior discussion and Planning. Visiting for interior discussion and Planning.</RBS.Col>
                              <RBS.Col md={1} className="visitAction pad-t-15">
                                <RBS.Row>
                                  <RBS.Col md={4}>
                                    <FontAwesomeIcon icon={faCheck} className="text-success" />
                                  </RBS.Col>
                                  <RBS.Col md={4}>
                                    <FontAwesomeIcon icon={faTimes} className="text-danger" />
                                  </RBS.Col>
                                  <RBS.Col md={4}>
                                    <FontAwesomeIcon icon={faClock} className="text-primary" />
                                  </RBS.Col>
                                </RBS.Row>
                              </RBS.Col>
                            </RBS.Row>
                          </div>
                        </RBS.Col>
                      </RBS.Row>
                      <div className="clearfix" />
                      <br />
                      <RBS.Row>
                        <RBS.Col md={12}>
                          <div className="secHdr">Past Visits</div>
                          <hr className="hrgray" />
                          <div className="clearfix" />
                        </RBS.Col>
                        <RBS.Col md={12}>
                          <div className="visitCard">
                            <RBS.Row>
                              <RBS.Col md={1}>
                                <div className="visitDt text-center">
                                  <div className="dtSec">01</div>
                                  <div className="clearfix" />
                                  <div className="monthSec">JUL-2021</div>
                                </div>
                                <div className="clearfix" />
                                <div className="visitTime"></div>
                              </RBS.Col>
                              <RBS.Col md={3} className="visitRelatedToSec pad-t-15">Bank Disburstment discussion</RBS.Col>
                              <RBS.Col md={1} className="visitTimeSec  pad-t-15">04:30 PM</RBS.Col>
                              <RBS.Col md={6} className="visitQuerySec  pad-t-15">Visiting for Bank disbustment letter discussion and planning.</RBS.Col>
                              <RBS.Col md={1} className="visitAction pad-t-15">
                                <RBS.Row>
                                  <RBS.Col md={6}>
                                    <FontAwesomeIcon icon={faFileDownload} className="text-success" />
                                  </RBS.Col>
                                  <RBS.Col md={6}>
                                    <FontAwesomeIcon icon={faClipboardList} className="text-info" />
                                  </RBS.Col>

                                </RBS.Row>
                              </RBS.Col>
                            </RBS.Row>
                          </div>
                        </RBS.Col>
                        <RBS.Col md={12}>
                          <div className="visitCard">
                            <RBS.Row>
                              <RBS.Col md={1}>
                                <div className="visitDt text-center">
                                  <div className="dtSec">20</div>
                                  <div className="clearfix" />
                                  <div className="monthSec">JUN-2021</div>
                                </div>
                                <div className="clearfix" />
                                <div className="visitTime"></div>
                              </RBS.Col>
                              <RBS.Col md={3} className="visitRelatedToSec pad-t-15">Bank Disburstment discussion</RBS.Col>
                              <RBS.Col md={1} className="visitTimeSec  pad-t-15">04:30 PM</RBS.Col>
                              <RBS.Col md={6} className="visitQuerySec  pad-t-15">Visiting for Bank disbustment letter discussion and planning.</RBS.Col>
                              <RBS.Col md={1} className="visitAction pad-t-15">
                                <RBS.Row>
                                  <RBS.Col md={6}>
                                    <FontAwesomeIcon icon={faFileDownload} className="text-success" />
                                  </RBS.Col>
                                  <RBS.Col md={6}>
                                    <FontAwesomeIcon icon={faClipboardList} className="text-info" />
                                  </RBS.Col>

                                </RBS.Row>
                              </RBS.Col>
                            </RBS.Row>
                          </div>
                        </RBS.Col>
                        <RBS.Col md={12}>
                          <div className="visitCard">
                            <RBS.Row>
                              <RBS.Col md={1}>
                                <div className="visitDt text-center">
                                  <div className="dtSec">01</div>
                                  <div className="clearfix" />
                                  <div className="monthSec">MAY-2021</div>
                                </div>
                                <div className="clearfix" />
                                <div className="visitTime"></div>
                              </RBS.Col>
                              <RBS.Col md={3} className="visitRelatedToSec pad-t-15">Bank Disburstment discussion</RBS.Col>
                              <RBS.Col md={1} className="visitTimeSec  pad-t-15">04:30 PM</RBS.Col>
                              <RBS.Col md={6} className="visitQuerySec  pad-t-15">Visiting for Bank disbustment letter discussion and planning.</RBS.Col>
                              <RBS.Col md={1} className="visitAction pad-t-15">
                                <RBS.Row>
                                  <RBS.Col md={6}>
                                    <FontAwesomeIcon icon={faFileDownload} className="text-success" />
                                  </RBS.Col>
                                  <RBS.Col md={6}>
                                    <FontAwesomeIcon icon={faClipboardList} className="text-info" />
                                  </RBS.Col>

                                </RBS.Row>
                              </RBS.Col>
                            </RBS.Row>
                          </div>
                        </RBS.Col>
                      </RBS.Row>


                    </RBS.Container>
                  </RBS.Tab.Pane>
                  <RBS.Tab.Pane eventKey="second">
                    <RBS.Container fluid>
                      <RBS.Row>
                        <RBS.Col md={12}>
                          <div className="inline-block" >Past Payments</div>
                          <RBS.Button variant="outline-primary" className="float-right" size="sm" ><FontAwesomeIcon icon={faRupeeSign} /> Request Payment</RBS.Button>
                          <div className="clearfix" />
                          <hr className="hrgray" />
                        </RBS.Col>
                        <RBS.Col md={12}>
                          <div className="visitCard text-center">
                            <RBS.Row>
                              <RBS.Col md={1}>
                                <div className="visitDt text-center">
                                  <div className="dtSec">01</div>
                                  <div className="clearfix" />
                                  <div className="monthSec">AUG-2021</div>
                                </div>
                                <div className="clearfix" />
                                <div className="visitTime"></div>
                              </RBS.Col>
                              <RBS.Col md={3} className="visitRelatedToSec pad-t-15"><b>ICIC00093847584847373</b></RBS.Col>

                              <RBS.Col md={2} className="visitQuerySec  pad-t-15">14,00,560 /-</RBS.Col>
                              <RBS.Col md={2} className="visitQuerySec  pad-t-15">Cheque</RBS.Col>
                              <RBS.Col md={1} className="visitTimeSec  pad-t-15">01:30 PM</RBS.Col>
                              <RBS.Col md={2} className="visitTimeSec  pad-t-15 text-success">Received</RBS.Col>
                              <RBS.Col md={1} className="visitAction pad-t-15 text-right">
                                <FontAwesomeIcon icon={faEllipsisV} />
                              </RBS.Col>
                            </RBS.Row>
                          </div>
                        </RBS.Col>
                        <RBS.Col md={12}>
                          <div className="visitCard text-center">
                            <RBS.Row>
                              <RBS.Col md={1}>
                                <div className="visitDt text-center">
                                  <div className="dtSec">01</div>
                                  <div className="clearfix" />
                                  <div className="monthSec">AUG-2021</div>
                                </div>
                                <div className="clearfix" />
                                <div className="visitTime"></div>
                              </RBS.Col>
                              <RBS.Col md={3} className="visitRelatedToSec pad-t-15"><b>ICIC00093847584847373</b></RBS.Col>

                              <RBS.Col md={2} className="visitQuerySec  pad-t-15">14,00,560 /-</RBS.Col>
                              <RBS.Col md={2} className="visitQuerySec  pad-t-15">Cheque</RBS.Col>
                              <RBS.Col md={1} className="visitTimeSec  pad-t-15">01:30 PM</RBS.Col>
                              <RBS.Col md={2} className="visitTimeSec  pad-t-15 text-success">Received</RBS.Col>
                              <RBS.Col md={1} className="visitAction pad-t-15 text-right">
                                <FontAwesomeIcon icon={faEllipsisV} />
                              </RBS.Col>
                            </RBS.Row>
                          </div>
                        </RBS.Col>
                        <RBS.Col md={12}>
                          <div className="visitCard text-center">
                            <RBS.Row>
                              <RBS.Col md={1}>
                                <div className="visitDt text-center">
                                  <div className="dtSec">01</div>
                                  <div className="clearfix" />
                                  <div className="monthSec">AUG-2021</div>
                                </div>
                                <div className="clearfix" />
                                <div className="visitTime"></div>
                              </RBS.Col>
                              <RBS.Col md={3} className="visitRelatedToSec pad-t-15"><b>ICIC00093847584847373</b></RBS.Col>

                              <RBS.Col md={2} className="visitQuerySec  pad-t-15">14,00,560 /-</RBS.Col>
                              <RBS.Col md={2} className="visitQuerySec  pad-t-15">Cheque</RBS.Col>
                              <RBS.Col md={1} className="visitTimeSec  pad-t-15">01:30 PM</RBS.Col>
                              <RBS.Col md={2} className="visitTimeSec  pad-t-15 text-success">Received</RBS.Col>
                              <RBS.Col md={1} className="visitAction pad-t-15 text-right">
                                <FontAwesomeIcon icon={faEllipsisV} />
                              </RBS.Col>
                            </RBS.Row>
                          </div>
                        </RBS.Col>
                        <RBS.Col md={12}>
                          <div className="visitCard text-center">
                            <RBS.Row>
                              <RBS.Col md={1}>
                                <div className="visitDt text-center">
                                  <div className="dtSec">01</div>
                                  <div className="clearfix" />
                                  <div className="monthSec">AUG-2021</div>
                                </div>
                                <div className="clearfix" />
                                <div className="visitTime"></div>
                              </RBS.Col>
                              <RBS.Col md={3} className="visitRelatedToSec pad-t-15"><b>ICIC00093847584847373</b></RBS.Col>

                              <RBS.Col md={2} className="visitQuerySec  pad-t-15">14,00,560 /-</RBS.Col>
                              <RBS.Col md={2} className="visitQuerySec  pad-t-15">Cheque</RBS.Col>
                              <RBS.Col md={1} className="visitTimeSec  pad-t-15">01:30 PM</RBS.Col>
                              <RBS.Col md={2} className="visitTimeSec  pad-t-15 text-success">Received</RBS.Col>
                              <RBS.Col md={1} className="visitAction pad-t-15 text-right">
                                <FontAwesomeIcon icon={faEllipsisV} />
                              </RBS.Col>
                            </RBS.Row>
                          </div>
                        </RBS.Col>
                        <RBS.Col md={12}>
                          <div className="visitCard text-center">
                            <RBS.Row>
                              <RBS.Col md={1}>
                                <div className="visitDt text-center">
                                  <div className="dtSec">01</div>
                                  <div className="clearfix" />
                                  <div className="monthSec">AUG-2021</div>
                                </div>
                                <div className="clearfix" />
                                <div className="visitTime"></div>
                              </RBS.Col>
                              <RBS.Col md={3} className="visitRelatedToSec pad-t-15"><b>ICIC00093847584847373</b></RBS.Col>

                              <RBS.Col md={2} className="visitQuerySec  pad-t-15">14,00,560 /-</RBS.Col>
                              <RBS.Col md={2} className="visitQuerySec  pad-t-15">Cheque</RBS.Col>
                              <RBS.Col md={1} className="visitTimeSec  pad-t-15">01:30 PM</RBS.Col>
                              <RBS.Col md={2} className="visitTimeSec  pad-t-15 text-success">Received</RBS.Col>
                              <RBS.Col md={1} className="visitAction pad-t-15 text-right">
                                <FontAwesomeIcon icon={faEllipsisV} />
                              </RBS.Col>
                            </RBS.Row>
                          </div>
                        </RBS.Col>
                        <RBS.Col md={12}>
                          <div className="visitCard text-center">
                            <RBS.Row>
                              <RBS.Col md={1}>
                                <div className="visitDt text-center">
                                  <div className="dtSec">01</div>
                                  <div className="clearfix" />
                                  <div className="monthSec">AUG-2021</div>
                                </div>
                                <div className="clearfix" />
                                <div className="visitTime"></div>
                              </RBS.Col>
                              <RBS.Col md={3} className="visitRelatedToSec pad-t-15"><b>ICIC00093847584847373</b></RBS.Col>

                              <RBS.Col md={2} className="visitQuerySec  pad-t-15">14,00,560 /-</RBS.Col>
                              <RBS.Col md={2} className="visitQuerySec  pad-t-15">Cheque</RBS.Col>
                              <RBS.Col md={1} className="visitTimeSec  pad-t-15">01:30 PM</RBS.Col>
                              <RBS.Col md={2} className="visitTimeSec  pad-t-15 text-success">Received</RBS.Col>
                              <RBS.Col md={1} className="visitAction pad-t-15 text-right">
                                <FontAwesomeIcon icon={faEllipsisV} />
                              </RBS.Col>
                            </RBS.Row>
                          </div>
                        </RBS.Col>
                      </RBS.Row>

                    </RBS.Container>

                  </RBS.Tab.Pane>
                  <RBS.Tab.Pane eventKey="third">
                    <RBS.Container fluid>
                      <RBS.Row>
                        <RBS.Col md={12}>
                          <RBS.Button variant="outline-primary" size="sm" className="float-right">
                            <FontAwesomeIcon icon={faPlusCircle} /> &nbsp; Add Progress
                          </RBS.Button>
                        </RBS.Col>
                        <RBS.Col md={12} className="pad-2">
                          <div className="timelineCard">
                            <Chrono
                              mode="VERTICAL"
                              theme={{ primary: "#34656d", secondary: "#d3d3d3" }}
                              hideControls >
                              <RBS.Row className="timeLineSec">
                                <RBS.Col md={9} xs={10} className="timeLineDt">20-May-2021</RBS.Col>
                                <RBS.Col md={3} xs={2} className="timeLineActBtn text-right">
                                  <RBS.Button size="sm" variant="outline-danger"><FontAwesomeIcon icon={faRupeeSign} /><span className="d-none d-md-inline"> Request Payment</span></RBS.Button>
                                </RBS.Col>
                                <div className="clearfix" />

                                <RBS.Col md={12}>
                                  <hr className="hrgray" />
                                  <div className="timeLineHdr text-info">Brick work completed.</div>
                                  <div className="clearfix" />
                                  <smal>Brick work completed for Living room, 2 bedrooms and kitchen.</smal>
                                </RBS.Col>


                              </RBS.Row>
                              <RBS.Row className="timeLineSec">
                                <RBS.Col md={9} xs={10} className="timeLineDt">20-May-2021</RBS.Col>
                                <RBS.Col md={3} xs={2} className="timeLineActBtn text-right">
                                  <RBS.Button size="sm" variant="outline-danger"><FontAwesomeIcon icon={faRupeeSign} /><span className="d-none d-md-inline"> Request Payment</span></RBS.Button>
                                </RBS.Col>
                                <div className="clearfix" />

                                <RBS.Col md={12}>
                                  <hr className="hrgray" />
                                  <div className="timeLineHdr text-info">Brick work completed.</div>
                                  <div className="clearfix" />
                                  <smal>Brick work completed for Living room, 2 bedrooms and kitchen.</smal>
                                </RBS.Col>


                              </RBS.Row>
                              <RBS.Row className="timeLineSec">
                                <RBS.Col md={9} xs={10} className="timeLineDt">20-May-2021</RBS.Col>
                                <RBS.Col md={3} xs={2} className="timeLineActBtn text-right">
                                  <RBS.Button size="sm" variant="outline-danger"><FontAwesomeIcon icon={faRupeeSign} /><span className="d-none d-md-inline"> Request Payment</span></RBS.Button>
                                </RBS.Col>
                                <div className="clearfix" />

                                <RBS.Col md={12}>
                                  <hr className="hrgray" />
                                  <div className="timeLineHdr text-info">Brick work completed.</div>
                                  <div className="clearfix" />
                                  <smal>Brick work completed for Living room, 2 bedrooms and kitchen.</smal>
                                </RBS.Col>


                              </RBS.Row>
                              <RBS.Row className="timeLineSec">
                                <RBS.Col md={9} xs={10} className="timeLineDt">20-May-2021</RBS.Col>
                                <RBS.Col md={3} xs={2} className="timeLineActBtn text-right">
                                  <RBS.Button size="sm" variant="outline-danger"><FontAwesomeIcon icon={faRupeeSign} /><span className="d-none d-md-inline"> Request Payment</span></RBS.Button>
                                </RBS.Col>
                                <div className="clearfix" />

                                <RBS.Col md={12}>
                                  <hr className="hrgray" />
                                  <div className="timeLineHdr text-primary">Agreement Completed</div>
                                  <div className="clearfix" />
                                  <div>Stap duty and aggreement process has been done. time to request for payment.</div>
                                </RBS.Col>


                              </RBS.Row>
                              <RBS.Row className="timeLineSec">
                                <RBS.Col md={9} xs={10} className="timeLineDt">20-May-2021</RBS.Col>
                                <RBS.Col md={3} xs={2} className="timeLineActBtn text-right">
                                  <RBS.Button size="sm" variant="outline-success"><FontAwesomeIcon icon={faCloudDownloadAlt} /><span className="d-none d-md-inline"> Download Files</span></RBS.Button>
                                </RBS.Col>
                                <div className="clearfix" />

                                <RBS.Col md={12}>
                                  <hr className="hrgray" />
                                  <div className="timeLineHdr text-success">Flat booked.</div>
                                  <div className="clearfix" />
                                  <div>Flat booked with intial amount paid</div>
                                </RBS.Col>


                              </RBS.Row>


                            </Chrono>
                          </div>
                        </RBS.Col>
                      </RBS.Row>
                    </RBS.Container>

                  </RBS.Tab.Pane>

                  <RBS.Tab.Pane eventKey="forth">
                    <RBS.Container fluid>
                      <div>
                        <h5>Personal Profile</h5>
                        <hr className="hrgray" />
                        <div className="clearfix" />
                        <RBS.Row>
                          <RBS.Col md={12}>
                            <RBS.Row>
                              <RBS.Col md={3}>
                                <RBS.Form.Group controlId="">
                                  <RBS.Form.Label>First Name <span className="reqSign">*</span></RBS.Form.Label>
                                  <RBS.Form.Control size="sm" type="text" placeholder="First Name" />
                                </RBS.Form.Group>
                              </RBS.Col>
                              <RBS.Col md={3}>
                                <RBS.Form.Group controlId="">
                                  <RBS.Form.Label>Last Name <span className="reqSign">*</span></RBS.Form.Label>
                                  <RBS.Form.Control size="sm" type="text" placeholder="First Name" />
                                </RBS.Form.Group>
                              </RBS.Col>
                              <RBS.Col md={3}>
                                <RBS.Form.Group controlId="">
                                  <RBS.Form.Label>Email Address<span className="reqSign">*</span></RBS.Form.Label>
                                  <RBS.Form.Control size="sm" type="text" placeholder="Email Address" />
                                </RBS.Form.Group>
                              </RBS.Col>
                              <RBS.Col md={3}>
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
                              {/* <RBS.Col md={12} className="text-right formBtnSec">
                                <RBS.Form.Group controlId="">
                                  <RBS.Button size="sm" variant="outline-primary"><FontAwesomeIcon icon={faSave} /> Submit</RBS.Button>
                                  &nbsp; &nbsp;
                                  <RBS.Button size="sm" variant="outline-dark"><FontAwesomeIcon icon={faTimes} /> Cancel</RBS.Button>
                                </RBS.Form.Group>
                              </RBS.Col> */}
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
                              {/* <RBS.Col md={12} className="text-right formBtnSec">
                                <RBS.Form.Group controlId="">
                                  <RBS.Button size="sm" variant="outline-primary"><FontAwesomeIcon icon={faSave} /> Submit</RBS.Button>
                                  &nbsp; &nbsp;
                                  <RBS.Button size="sm" variant="outline-dark"><FontAwesomeIcon icon={faTimes} /> Cancel</RBS.Button>
                                </RBS.Form.Group>
                              </RBS.Col> */}
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
                              {/* <RBS.Col md={12} className="text-right formBtnSec">
                                <RBS.Form.Group controlId="">
                                  <RBS.Button size="sm" variant="outline-primary"><FontAwesomeIcon icon={faSave} /> Submit</RBS.Button>
                                  &nbsp; &nbsp;
                                  <RBS.Button size="sm" variant="outline-dark"><FontAwesomeIcon icon={faTimes} /> Cancel</RBS.Button>
                                </RBS.Form.Group>
                              </RBS.Col> */}
                            </RBS.Row>

                          </RBS.Col>
                        </RBS.Row>
                      </div>

                    </RBS.Container>

                  </RBS.Tab.Pane>

                </RBS.Tab.Content>
              </RBS.Col>
            </RBS.Row>
          </RBS.Tab.Container>
        </RBS.Col>
      </RBS.Row>
    </RBS.Container>
  </div>;
}

FlatOwner.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  flatOwner: makeSelectFlatOwner(),
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

export default compose(withConnect)(FlatOwner);
