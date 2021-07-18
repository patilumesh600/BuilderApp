/* eslint-disable react/no-unused-prop-types */
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
import './flatProfile.css';
import * as RBS from 'react-bootstrap';
import { faCalendarPlus, faCloudDownloadAlt, faHome } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import ProgressBar from 'react-customizable-progressbar';
import { Chrono } from "react-chrono";
import saga from './saga';
import reducer from './reducer';
import makeSelectFlatProfile from './selectors';


export function FlatProfile() {
  useInjectReducer({ key: 'flatProfile', reducer });
  useInjectSaga({ key: 'flatProfile', saga });

  return <div id="flatProfContainer">
    <RBS.Container fluid>
      <RBS.Row>
        <RBS.Col md={3} className="pad-2">
          <div className="flatDetailCard pad-0">
            <RBS.Col md={12} className="flatDetailHdr text-Center">
              <div className="flatDetailsIcon">
                <div className="clearfix" />
                <ProgressBar
                  radius={80}
                  progress={75}
                  strokeWidth={4}
                  trackStrokeWidth={4}
                  pointerRadius={5}
                  pointerStrokeColor="#f55c47"
                  pointerStrokeWidth={1}
                  strokeColor="#4aa96c"
                  strokeLinecap="round"
                  trackStrokeColor="#d3d3d3"
                  trackStrokeLinecap="square"
                  initialAnimation
                  transition="1.5s ease 0.5s"
                  trackTransition="0s ease"
                >
                  <div className="indicator-volume">
                    <div className="inner">
                      <div className="icon">
                        <FontAwesomeIcon icon={faHome} />
                      </div>
                      <div className="percentage">{75}%</div>
                    </div>
                  </div>
                </ProgressBar>
                <div className="clearfix" />
              </div>
              <div className="clearfix" />
              <div className="flatOwnerNm">Flat No  - A 306 </div>
             
            </RBS.Col>
            <RBS.Col md={12} className="d-none d-md-block">
              <hr className="hrWarning" />
              <div className="flatDetailLbl"> Owner</div>
              <div className="flatDetailValue"> Sanket Sharadrao Deshmukh</div>
              <div className="clearfix" />
              <div className="flatDetailLbl"> Flat Number</div>
              <div className="flatDetailValue"> A-306</div>
              <div className="clearfix" />
              <div className="flatDetailLbl"> Floor Number</div>
              <div className="flatDetailValue"> 3rd Floor</div>
              <div className="clearfix" />
              <div className="flatDetailLbl"> Address</div>
              <div className="flatDetailValue"> Silver City, Jadhavwadi, Chikhali, Pune- 411062.</div>
              <div className="clearfix" />
              <div className="flatDetailLbl"> Purchase Date</div>
              <div className="flatDetailValue"> 12-Jan-2020</div>
              <div className="clearfix" />
              <div className="flatDetailLbl"> Agreement Date</div>
              <div className="flatDetailValue"> 12-Apr-2020</div>
              <div className="clearfix" />
            </RBS.Col>

          </div>
        </RBS.Col>
        <RBS.Col md={9} className="pad-2">
          <div className="timelineCard">
            <Chrono
              mode="VERTICAL"
              theme={{ primary: "#34656d", secondary: "#d3d3d3" }}
              hideControls >
              <RBS.Row className="timeLineSec">
                <RBS.Col md={9} xs={10} className="timeLineDt">20-May-2021</RBS.Col>
                <RBS.Col md={3} xs={2} className="timeLineActBtn text-right">
                  <RBS.Button size="sm" variant="outline-primary"><FontAwesomeIcon icon={faCalendarPlus} /><span className="d-none d-md-inline"> Schedule Visit</span></RBS.Button>
                </RBS.Col>
                <div className="clearfix" />

                <RBS.Col md={12}>
                  <hr className="hrgray" />
                  <div className="timeLineHdr">Brick work completed for 10<sup>th</sup> Floor of A-wing.</div>
                  <div className="clearfix" />
                  <smal>Brick work for flats A-1001,A-1002,A-1003,A-1004,A-1005,A-1006,A-1007,A-1008 completed. </smal>
                </RBS.Col>


              </RBS.Row>
              <RBS.Row className="timeLineSec">
                <RBS.Col md={9} xs={10} className="timeLineDt">17-Apr-2021</RBS.Col>
                <RBS.Col md={3} xs={2} className="timeLineActBtn text-right">
                  <RBS.Button size="sm" variant="outline-success"><FontAwesomeIcon icon={faCloudDownloadAlt} /><span className="d-none d-md-inline"> Download files</span></RBS.Button>
                </RBS.Col>
                <div className="clearfix" />

                <RBS.Col md={12}>
                  <hr className="hrgray" />
                  <div className="timeLineHdr">Payment cheque issued to the builder.</div>
                  <div className="clearfix" />
                  <smal>Payment cheque of Rs. 12,00,000 is approved and shared with the builder.</smal>
                </RBS.Col>


              </RBS.Row>
              <RBS.Row className="timeLineSec">
                <RBS.Col md={9} xs={10} className="timeLineDt">12-Apr-2021</RBS.Col>
                <RBS.Col md={3} xs={2} className="timeLineActBtn text-right">
                  <RBS.Button size="sm" variant="outline-success"><FontAwesomeIcon icon={faCloudDownloadAlt} /><span className="d-none d-md-inline"> Download files</span></RBS.Button>
                </RBS.Col>
                <div className="clearfix" />

                <RBS.Col md={12}>
                  <hr className="hrgray" />
                  <div className="timeLineHdr">4<sup>th</sup> and final disburstment request raised by builder.</div>
                  <div className="clearfix" />
                  <smal>Final Disburstment request for Rs. 12,00,000 raised by the builder.Last date for processing request is 15-Apr-2021.</smal>
                </RBS.Col>


              </RBS.Row>

              <RBS.Row className="timeLineSec">
                <RBS.Col md={9} xs={10} className="timeLineDt">17-Apr-2021</RBS.Col>
                <RBS.Col md={3} xs={2} className="timeLineActBtn text-right">
                  <RBS.Button size="sm" variant="outline-success"><FontAwesomeIcon icon={faCloudDownloadAlt} /><span className="d-none d-md-inline"> Download files</span></RBS.Button>
                </RBS.Col>
                <div className="clearfix" />

                <RBS.Col md={12}>
                  <hr className="hrgray" />
                  <div className="timeLineHdr">Payment cheque issued to the builder.</div>
                  <div className="clearfix" />
                  <smal>Payment cheque of Rs. 12,00,000 is approved and shared with the builder.</smal>
                </RBS.Col>


              </RBS.Row>
              <RBS.Row className="timeLineSec">
                <RBS.Col md={9} xs={10} className="timeLineDt">12-Apr-2021</RBS.Col>
                <RBS.Col md={3} xs={2} className="timeLineActBtn text-right">
                  <RBS.Button size="sm" variant="outline-success"><FontAwesomeIcon icon={faCloudDownloadAlt} /><span className="d-none d-md-inline"> Download files</span></RBS.Button>
                </RBS.Col>
                <div className="clearfix" />

                <RBS.Col md={12}>
                  <hr className="hrgray" />
                  <div className="timeLineHdr">3<sup>rd</sup> disburstment request raised by builder.</div>
                  <div className="clearfix" />
                  <smal>Disburstment request for Rs. 07,00,000 raised by the builder.Last date for processing request is 15-Apr-2021.</smal>
                </RBS.Col>


              </RBS.Row>

              <RBS.Row className="timeLineSec">
                <RBS.Col md={9} xs={10} className="timeLineDt">20-May-2021</RBS.Col>
                <RBS.Col md={3} xs={2} className="timeLineActBtn text-right">
                  <RBS.Button size="sm" variant="outline-primary"><FontAwesomeIcon icon={faCalendarPlus} /><span className="d-none d-md-inline"> Schedule Visit</span></RBS.Button>
                </RBS.Col>
                <div className="clearfix" />

                <RBS.Col md={12}>
                  <hr className="hrgray" />
                  <div className="timeLineHdr">Brick work completed for 7<sup>th</sup>, 8<sup>th</sup>, 9<sup>th</sup> Floor of A-wing.</div>
                  <div className="clearfix" />
                  <smal>Brick work for flats A-701,A-702,A-703,A-704,A-705,A-706,A-707,A-708 ,A-801,A-802,A-803,A-804,A-805,A-806,A-807,A-808,A-901,A-902,A-903,A-904,A-905,A-906,A-907,A-908 completed. </smal>
                </RBS.Col>


              </RBS.Row>

              <RBS.Row className="timeLineSec">
                <RBS.Col md={9} xs={10} className="timeLineDt">17-Apr-2021</RBS.Col>
                <RBS.Col md={3} xs={2} className="timeLineActBtn text-right">
                  <RBS.Button size="sm" variant="outline-success"><FontAwesomeIcon icon={faCloudDownloadAlt} /><span className="d-none d-md-inline"> Download files</span></RBS.Button>
                </RBS.Col>
                <div className="clearfix" />

                <RBS.Col md={12}>
                  <hr className="hrgray" />
                  <div className="timeLineHdr">Payment cheque issued to the builder.</div>
                  <div className="clearfix" />
                  <smal>Payment cheque of Rs. 12,00,000 is approved and shared with the builder.</smal>
                </RBS.Col>


              </RBS.Row>
              <RBS.Row className="timeLineSec">
                <RBS.Col md={9} xs={10} className="timeLineDt">12-Apr-2021</RBS.Col>
                <RBS.Col md={3} xs={2} className="timeLineActBtn text-right">
                  <RBS.Button size="sm" variant="outline-success"><FontAwesomeIcon icon={faCloudDownloadAlt} /><span className="d-none d-md-inline"> Download files</span></RBS.Button>
                </RBS.Col>
                <div className="clearfix" />

                <RBS.Col md={12}>
                  <hr className="hrgray" />
                  <div className="timeLineHdr">4<sup>th</sup> and final disburstment request raised by builder.</div>
                  <div className="clearfix" />
                  <smal>Final Disburstment request for Rs. 12,00,000 raised by the builder.Last date for processing request is 15-Apr-2021.</smal>
                </RBS.Col>


              </RBS.Row>


              <RBS.Row className="timeLineSec">
                <RBS.Col md={9} xs={10} className="timeLineDt">17-Apr-2021</RBS.Col>
                <RBS.Col md={3} xs={2} className="timeLineActBtn text-right">
                  <RBS.Button size="sm" variant="outline-success"><FontAwesomeIcon icon={faCloudDownloadAlt} /><span className="d-none d-md-inline"> Download files</span></RBS.Button>
                </RBS.Col>
                <div className="clearfix" />

                <RBS.Col md={12}>
                  <hr className="hrgray" />
                  <div className="timeLineHdr">Payment cheque issued to the builder.</div>
                  <div className="clearfix" />
                  <smal>Payment cheque of Rs. 12,00,000 is approved and shared with the builder.</smal>
                </RBS.Col>


              </RBS.Row>
              <RBS.Row className="timeLineSec">
                <RBS.Col md={9} xs={10} className="timeLineDt">20-May-2021</RBS.Col>
                <RBS.Col md={3} xs={2} className="timeLineActBtn text-right">
                  <RBS.Button size="sm" variant="outline-primary"><FontAwesomeIcon icon={faCalendarPlus} /><span className="d-none d-md-inline"> Schedule Visit</span></RBS.Button>
                </RBS.Col>
                <div className="clearfix" />

                <RBS.Col md={12}>
                  <hr className="hrgray" />
                  <div className="timeLineHdr">Brick work completed for 2<sup>nd</sup>, 3<sup>rd</sup>, 4<sup>th</sup> Floor of A-wing.</div>
                  <div className="clearfix" />
                  <smal>Brick work for flats A-201,A-202,A-203,A-204,A-205,A-206,A-207,A-208, A-301,A-302,A-303,A-304,A-305,A-306,A-307,A-308, A-401,A-402,A-403,A-404,A-405,A-406,A-407,A-408 completed. </smal>
                </RBS.Col>


              </RBS.Row>

              <RBS.Row className="timeLineSec">
                <RBS.Col md={9} xs={10} className="timeLineDt">12-Jun-2020</RBS.Col>
                <RBS.Col md={3} xs={2} className="timeLineActBtn text-right">
                  <RBS.Button size="sm" variant="outline-success"><FontAwesomeIcon icon={faCloudDownloadAlt} /><span className="d-none d-md-inline"> Download files</span></RBS.Button>
                </RBS.Col>
                <div className="clearfix" />

                <RBS.Col md={12}>
                  <hr className="hrgray" />
                  <div className="timeLineHdr">2<sup>nd</sup> disburstment request raised by builder.</div>
                  <div className="clearfix" />
                  <smal>Disburstment request for Rs. 10,00,000 raised by the builder.Last date for processing request is 15-Jun-2020.</smal>
                </RBS.Col>


              </RBS.Row>

              <RBS.Row className="timeLineSec">
                <RBS.Col md={9} xs={10} className="timeLineDt">17-Apr-2020</RBS.Col>
                <RBS.Col md={3} xs={2} className="timeLineActBtn text-right">
                  <RBS.Button size="sm" variant="outline-success"><FontAwesomeIcon icon={faCloudDownloadAlt} /><span className="d-none d-md-inline"> Download files</span></RBS.Button>
                </RBS.Col>
                <div className="clearfix" />

                <RBS.Col md={12}>
                  <hr className="hrgray" />
                  <div className="timeLineHdr">Payment cheque issued to the builder.</div>
                  <div className="clearfix" />
                  <smal>Payment cheque of Rs. 03,00,000 is approved and shared with the builder.</smal>
                </RBS.Col>


              </RBS.Row>
              <RBS.Row className="timeLineSec">
                <RBS.Col md={9} xs={10} className="timeLineDt">12-Apr-2020</RBS.Col>
                <RBS.Col md={3} xs={2} className="timeLineActBtn text-right">
                  <RBS.Button size="sm" variant="outline-success"><FontAwesomeIcon icon={faCloudDownloadAlt} /><span className="d-none d-md-inline"> Download files</span></RBS.Button>
                </RBS.Col>
                <div className="clearfix" />

                <RBS.Col md={12}>
                  <hr className="hrgray" />
                  <div className="timeLineHdr">1<sup>st</sup> disburstment request raised by builder.</div>
                  <div className="clearfix" />
                  <smal>Disburstment request for Rs. 03,00,000 raised by the builder.Last date for processing request is 15-Apr-2020.</smal>
                </RBS.Col>


              </RBS.Row>
              <RBS.Row className="timeLineSec">
                <RBS.Col md={9} xs={10} className="timeLineDt">12-Apr-2020</RBS.Col>
                <RBS.Col md={3} xs={2} className="timeLineActBtn text-right">
                  <RBS.Button size="sm" variant="outline-success"><FontAwesomeIcon icon={faCloudDownloadAlt} /><span className="d-none d-md-inline"> Download files</span></RBS.Button>
                </RBS.Col>
                <div className="clearfix" />

                <RBS.Col md={12}>
                  <hr className="hrgray" />
                  <div className="timeLineHdr">1<sup>st</sup> disburstment request raised by builder.</div>
                  <div className="clearfix" />
                  <smal>Disburstment request for Rs. 03,00,000 raised by the builder.Last date for processing request is 15-Apr-2020.</smal>
                </RBS.Col>


              </RBS.Row>
              <RBS.Row className="timeLineSec">
                <RBS.Col md={9} xs={10} className="timeLineDt">12-Apr-2020</RBS.Col>
                <RBS.Col md={3} xs={2} className="timeLineActBtn text-right">
                  <RBS.Button size="sm" variant="outline-success"><FontAwesomeIcon icon={faCloudDownloadAlt} /><span className="d-none d-md-inline"> Download files</span></RBS.Button>
                </RBS.Col>
                <div className="clearfix" />
                <RBS.Col md={12}>
                  <hr className="hrgray" />
                  <div className="timeLineHdr">Agreement process has been completed.</div>
                  <div className="clearfix" />
                  <smal>Your home agreement process is done. Please download and save the copy of an agreement for your further use.</smal>
                </RBS.Col>
              </RBS.Row>
              <RBS.Row className="timeLineSec">
                <RBS.Col md={9} xs={10} className="timeLineDt">12-Dec-2019</RBS.Col>
                <RBS.Col md={3} xs={2} className="timeLineActBtn text-right"></RBS.Col>
                <div className="clearfix" />

                <RBS.Col md={12}>
                  <hr className="hrgray" />
                  <div className="timeLineHdr">Congradulations ! Welcome to the Silver City family.</div>
                  <div className="clearfix" />
                  <smal>Congradulations ! You have got yourself a new home. We will keep you updated with all the latest news and requests.</smal>
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
