/* eslint-disable no-unused-vars */
/* eslint-disable import/order */
/* eslint-disable react/no-unused-prop-types */
/**
 *
 * SiteDashboard
 *
 */

import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import { useInjectSaga } from 'utils/injectSaga';
import { useInjectReducer } from 'utils/injectReducer';
import makeSelectSiteDashboard from './selectors';
import reducer from './reducer';
import saga from './saga';

import * as RBS from 'react-bootstrap';
import { faExpandAlt, faPencilAlt, faPlusCircle, faChevronCircleRight, faShare, faLock, faTrashAlt, faFileDownload, faCheck, faTimes } from '@fortawesome/free-solid-svg-icons';
import { faClock } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import ProgressBar from 'react-customizable-progressbar';

import { Chart } from 'react-charts';
import Avatar, { ConfigProvider } from 'react-avatar';
import './siteDashboard.css';

export function SiteDashboard() {
  useInjectReducer({ key: 'siteDashboard', reducer });
  useInjectSaga({ key: 'siteDashboard', saga });

  const [modalShow, setModalShow] = useState(false);
  const [modalDocShow, setDocModalShow] = useState(false);

  const documentOpt = (
    <RBS.Popover id="popover-basic">
      <RBS.Popover.Content>
        <RBS.ListGroup variant="flush">
          <RBS.ListGroup.Item action><FontAwesomeIcon icon={faShare} /> Share </RBS.ListGroup.Item>
          <RBS.ListGroup.Item action><FontAwesomeIcon icon={faLock} /> Mark As Private </RBS.ListGroup.Item>
          <RBS.ListGroup.Item action><FontAwesomeIcon icon={faTrashAlt} /> Delete </RBS.ListGroup.Item>
        </RBS.ListGroup>
      </RBS.Popover.Content>
    </RBS.Popover>
  );

  const visitOpt = (
    <RBS.Popover id="popover-basic">
      <RBS.Popover.Content>
        <RBS.ListGroup variant="flush">
          <RBS.ListGroup.Item action><FontAwesomeIcon icon={faClock} /> Schedule FollowUp </RBS.ListGroup.Item>
          <RBS.ListGroup.Item action><FontAwesomeIcon icon={faFileDownload} /> Download Documents </RBS.ListGroup.Item>
          <RBS.ListGroup.Item action><FontAwesomeIcon icon={faPencilAlt} /> Add Note </RBS.ListGroup.Item>
        </RBS.ListGroup>
      </RBS.Popover.Content>
    </RBS.Popover>
  );
  const data = React.useMemo(
    () => [
      {
        label: 'Amount',
        data: [['JAN-2021', 145000], ['FEB-2021', 250000], ['MAR-2021', 477700], ['APR-2021', 245000], ['MAY-2021', 375900], ['JUN-2021', 675900]],
        color: '#72147E'
      }
    ],
    []
  )
  const dataVisit = React.useMemo(
    () => [
      {
        label: 'Amount',
        data: [['JAN-2021', 12], ['FEB-2021', 34], ['MAR-2021', 67], ['APR-2021', 43], ['MAY-2021', 20], ['JUN-2021', 19]],
        color: '#E27802'
      }
    ],
    []
  )


  const series = React.useMemo(
    () => ({
      type: 'line',
    }),
    []
  )
  const axes = React.useMemo(
    () => [
      { primary: true, type: 'ordinal', position: 'bottom' },
      { type: 'linear', position: 'left', show: false }
    ],
    []
  )
  const tooltip = React.useMemo(
    () => ({
      align: "left",
      anchor: "center"
    }),
    []
  )
  return <div id="dashSecMain">
    <RBS.Container fluid>
      <RBS.Row>
        <RBS.Col md={3}>
          <div className="siteHdrSec secRed">
            <RBS.Row>
              <RBS.Col md={6} xs={6}>
                <div className="item">
                  <ProgressBar
                    radius={50}
                    progress={75}
                    strokeWidth={7}
                    strokeColor="#fff"
                    trackStrokeWidth={1}
                    trackStrokeColor="#dddddd"
                    pointerRadius={0}
                    strokeLinecap="square"
                    initialAnimation
                    transition="1.5s ease 0.5s"
                    trackTransition="0s ease"
                  >
                  </ProgressBar>
                </div>

              </RBS.Col>
              <RBS.Col md={6} xs={6}>
                <div className="secCount">75%</div>
                <div className="secDesc">Flat Purchased</div>
              </RBS.Col>
            </RBS.Row>
          </div>
        </RBS.Col>
        <RBS.Col md={3}>
          <div className="siteHdrSec secBlue">
            <RBS.Row>
              <RBS.Col md={6} xs={6}>
                <div className="item ">
                  <ProgressBar
                    radius={50}
                    progress={60}
                    strokeWidth={7}
                    strokeColor="#fff"
                    trackStrokeWidth={1}
                    trackStrokeColor="#dddddd"
                    strokeLinecap="square"
                    pointerRadius={0}
                    initialAnimation
                    transition="1.5s ease 0.5s"
                    trackTransition="0s ease"
                  >
                  </ProgressBar>
                </div>
              </RBS.Col>
              <RBS.Col md={6} xs={6}>
                <div className="secCount">60%</div>
                <div className="secDesc">Amount Collected</div>
              </RBS.Col>
            </RBS.Row>
          </div></RBS.Col>
        <RBS.Col md={3}>
          <div className="siteHdrSec secGreen">
            <RBS.Row>
              <RBS.Col md={6} xs={6}>
                <div className="item ">
                  <ProgressBar
                    radius={50} progress={95} strokeWidth={7} strokeColor="#fff" trackStrokeWidth={1}
                    trackStrokeColor="#dddddd" strokeLinecap="square" pointerRadius={0} initialAnimation
                    transition="1.5s ease 0.5s" trackTransition="0s ease"
                  >
                  </ProgressBar>
                </div>
              </RBS.Col>
              <RBS.Col md={6} xs={6}>
                <div className="secCount">95%</div>
                <div className="secDesc">Work Completed</div>
              </RBS.Col>
            </RBS.Row>
          </div></RBS.Col>
        <RBS.Col md={3}>
          <div className="siteHdrSec secVoilet">
            <RBS.Row>
              <RBS.Col md={6} xs={6}>
                <div className="item ">
                  <ProgressBar
                    radius={50}
                    progress={55}
                    strokeWidth={7}
                    strokeColor="#fff"
                    strokeLinecap="square"
                    trackStrokeWidth={1}
                    trackStrokeColor="#dddddd"
                    pointerRadius={0}
                    initialAnimation
                    transition="1.5s ease 0.5s"
                    trackTransition="0s ease"
                  >
                  </ProgressBar>
                </div>

              </RBS.Col>
              <RBS.Col md={6} xs={6}>
                <div className="secCount">55%</div>
                <div className="secDesc">Queries Resolved</div>
              </RBS.Col>
            </RBS.Row>
          </div></RBS.Col>
      </RBS.Row>
      <RBS.Row>
        <RBS.Col md={6}>
          <div className="tblCard tblContianer">

            <RBS.Col md={12} className="cardHeader pad-5">
              <div className="cardTitle" >Payment Collection <small> Per Month In Rs.</small> </div>
              <div className="cardAction"><FontAwesomeIcon icon={faExpandAlt} onClick={() => window.open("/visits")} /></div>
              <div className="clearfix" />
            </RBS.Col>
            <RBS.Col md={12}>
              <div style={{ flex: 2, height: '225px' }}>
                <Chart data={data} series={series} axes={axes} tooltip={tooltip} />
              </div>
            </RBS.Col>

          </div>
        </RBS.Col>
        <RBS.Col md={6}>
          <div className="tblCard tblContianer">

            <RBS.Col md={12} className="cardHeader pad-5">
              <div className="cardTitle" >Site Visits <small> Per Month</small> </div>
              <div className="cardAction"><FontAwesomeIcon icon={faExpandAlt} onClick={() => window.open("/visits")} /></div>
              <div className="clearfix" />
            </RBS.Col>
            <RBS.Col md={12}>
              <div style={{ flex: 2, height: '225px' }}>
                <Chart data={dataVisit} series={series} axes={axes} tooltip={tooltip} />
              </div>
            </RBS.Col>

          </div>


        </RBS.Col>
      </RBS.Row>
      <RBS.Row>
        <RBS.Col md={6} xs={12}>
          <div className="tblCard tblContianer">
            <RBS.Col md={12} className="cardHeader pad-5">
              <div className="cardTitle" >Payment Details</div>
              <div className="cardAction"> <FontAwesomeIcon icon={faPlusCircle} onClick={() => setModalShow(true)} /> &nbsp; <FontAwesomeIcon icon={faExpandAlt} onClick={() => window.open("/visits")} /></div>
              <div className="clearfix" />
            </RBS.Col>
            <div className="clearfix" />
            <RBS.Col md={12} className="pad-5">
              <RBS.Row className="tblRow">
                <RBS.Col md={2} xs={3} className="tblTimeSec"><b>A-306</b></RBS.Col>
                <RBS.Col md={3} xs={3} className="tblDateSec">Rs. 08,30,000</RBS.Col>
                <RBS.Col md={4} xs={4} className="tblProgSec">
                  <RBS.ProgressBar variant="danger" now={35} />
                </RBS.Col>
                <RBS.Col md={3} xs={3} className="text-center tblActionBtn">
                  <RBS.Button variant="outline-danger" block size="sm">Request Payment</RBS.Button>
                </RBS.Col>
              </RBS.Row>
              <RBS.Row className="tblRow">
                <RBS.Col md={2} xs={3} className="tblTimeSec"><b>A-306</b></RBS.Col>
                <RBS.Col md={3} xs={3} className="tblDateSec">Rs. 18,30,000</RBS.Col>
                <RBS.Col md={4} xs={4} className="tblProgSec">
                  <RBS.ProgressBar variant="primary" now={69} />
                </RBS.Col>
                <RBS.Col md={3} xs={3} className="text-center tblActionBtn">
                  <RBS.Button variant="outline-danger" block size="sm">Request Payment</RBS.Button>
                </RBS.Col>
              </RBS.Row>
              <RBS.Row className="tblRow">
                <RBS.Col md={2} xs={3} className="tblTimeSec"><b>A-1106</b></RBS.Col>
                <RBS.Col md={3} xs={3} className="tblDateSec">Rs. 34,30,000</RBS.Col>
                <RBS.Col md={4} xs={4} className="tblProgSec">
                  <RBS.ProgressBar variant="success" now={95} />
                </RBS.Col>
                <RBS.Col md={3} xs={3} className="text-center tblActionBtn">
                  <RBS.Button variant="outline-danger" block size="sm">Request Payment</RBS.Button>
                </RBS.Col>
              </RBS.Row>
              <RBS.Row className="tblRow">
                <RBS.Col md={2} xs={3} className="tblTimeSec"><b>A-306</b></RBS.Col>
                <RBS.Col md={3} xs={3} className="tblDateSec">Rs. 08,30,000</RBS.Col>
                <RBS.Col md={4} xs={4} className="tblProgSec">
                  <RBS.ProgressBar variant="danger" now={35} />
                </RBS.Col>
                <RBS.Col md={3} xs={3} className="text-center tblActionBtn">
                  <RBS.Button variant="outline-danger" block size="sm">Request Payment</RBS.Button>
                </RBS.Col>
              </RBS.Row>
              <RBS.Row className="tblRow">
                <RBS.Col md={2} xs={3} className="tblTimeSec"><b>A-306</b></RBS.Col>
                <RBS.Col md={3} xs={3} className="tblDateSec">Rs. 18,30,000</RBS.Col>
                <RBS.Col md={4} xs={4} className="tblProgSec">
                  <RBS.ProgressBar variant="primary" now={69} />
                </RBS.Col>
                <RBS.Col md={3} xs={3} className="text-center tblActionBtn">
                  <RBS.Button variant="outline-danger" block size="sm">Request Payment</RBS.Button>
                </RBS.Col>
              </RBS.Row>
              <RBS.Row className="tblRow">
                <RBS.Col md={2} xs={3} className="tblTimeSec"><b>A-1106</b></RBS.Col>
                <RBS.Col md={3} xs={3} className="tblDateSec">Rs. 34,30,000</RBS.Col>
                <RBS.Col md={4} xs={4} className="tblProgSec">
                  <RBS.ProgressBar variant="success" now={95} />
                </RBS.Col>
                <RBS.Col md={3} xs={3} className="text-center tblActionBtn">
                  <RBS.Button variant="outline-danger" block size="sm">Request Payment</RBS.Button>
                </RBS.Col>
              </RBS.Row>


            </RBS.Col>
          </div>
        </RBS.Col>
        <RBS.Col md={6} xs={12}>
          <div className="tblCard tblContianer" >
            <RBS.Col md={12} className="cardHeader pad-5">
              <div className="cardTitle" >Visits Requests</div>
              <div className="cardAction"> <FontAwesomeIcon icon={faPlusCircle} onClick={() => setModalShow(true)} /> &nbsp; <FontAwesomeIcon icon={faExpandAlt} onClick={() => window.open("/visits")} /></div>
              <div className="clearfix" />
            </RBS.Col>
            <div className="clearfix" />
            <RBS.Col md={12} className="pad-5">
              <RBS.Row className="tblRow">
                <RBS.Col md={2} xs={3} className="tblTimeSec"><b>A-306</b></RBS.Col>
                <RBS.Col md={3} xs={3} className="tblDateSec">29-May-2021</RBS.Col>
                <RBS.Col md={2} xs={3} className="tblTimeSec"> 1.30 PM</RBS.Col>
                <RBS.Col md={3} xs={4} className="text-center text-warning"> Pending</RBS.Col>
                <RBS.Col md={2} xs={2} className="text-center tblActionBtn">
                  <RBS.Row>
                    <RBS.Col md={4} xs={4} className="pad-5 visitApproveBtn"><FontAwesomeIcon icon={faCheck} /></RBS.Col>
                    <RBS.Col md={4} xs={4} className="pad-5  visitRejectBtn"> <FontAwesomeIcon icon={faTimes} /></RBS.Col>
                    <RBS.Col md={4} xs={4} className="pad-5  visitRescheduleBtn"> <FontAwesomeIcon icon={faClock} /></RBS.Col>
                  </RBS.Row>
                </RBS.Col>
              </RBS.Row>
              <RBS.Row className="tblRow">
                <RBS.Col md={2} xs={3} className="tblTimeSec"><b>A-306</b></RBS.Col>
                <RBS.Col md={3} xs={3} className="tblDateSec">29-May-2021</RBS.Col>
                <RBS.Col md={2} xs={3} className="tblTimeSec"> 1.30 PM</RBS.Col>
                <RBS.Col md={3} xs={4} className="text-center text-warning"> Pending</RBS.Col>
                <RBS.Col md={2} xs={2} className="text-center tblActionBtn">
                  <RBS.Row>
                    <RBS.Col md={4} xs={4} className="pad-5 visitApproveBtn"><FontAwesomeIcon icon={faCheck} /></RBS.Col>
                    <RBS.Col md={4} xs={4} className="pad-5  visitRejectBtn"> <FontAwesomeIcon icon={faTimes} /></RBS.Col>
                    <RBS.Col md={4} xs={4} className="pad-5  visitRescheduleBtn"> <FontAwesomeIcon icon={faClock} /></RBS.Col>
                  </RBS.Row>
                </RBS.Col>
              </RBS.Row>
              <RBS.Row className="tblRow">
                <RBS.Col md={2} xs={3} className="tblTimeSec"><b>A-306</b></RBS.Col>
                <RBS.Col md={3} xs={3} className="tblDateSec">29-May-2021</RBS.Col>
                <RBS.Col md={2} xs={3} className="tblTimeSec"> 1.30 PM</RBS.Col>
                <RBS.Col md={3} xs={4} className="text-center text-warning"> Pending</RBS.Col>
                <RBS.Col md={2} xs={2} className="text-center tblActionBtn">
                  <RBS.Row>
                    <RBS.Col md={4} xs={4} className="pad-5 visitApproveBtn"><FontAwesomeIcon icon={faCheck} /></RBS.Col>
                    <RBS.Col md={4} xs={4} className="pad-5  visitRejectBtn"> <FontAwesomeIcon icon={faTimes} /></RBS.Col>
                    <RBS.Col md={4} xs={4} className="pad-5  visitRescheduleBtn"> <FontAwesomeIcon icon={faClock} /></RBS.Col>
                  </RBS.Row>
                </RBS.Col>
              </RBS.Row>
              <RBS.Row className="tblRow">
                <RBS.Col md={2} xs={3} className="tblTimeSec"><b>A-306</b></RBS.Col>
                <RBS.Col md={3} xs={3} className="tblDateSec">29-May-2021</RBS.Col>
                <RBS.Col md={2} xs={3} className="tblTimeSec"> 1.30 PM</RBS.Col>
                <RBS.Col md={3} xs={4} className="text-center text-warning"> Pending</RBS.Col>
                <RBS.Col md={2} xs={2} className="text-center tblActionBtn">
                  <RBS.Row>
                    <RBS.Col md={4} xs={4} className="pad-5 visitApproveBtn"><FontAwesomeIcon icon={faCheck} /></RBS.Col>
                    <RBS.Col md={4} xs={4} className="pad-5  visitRejectBtn"> <FontAwesomeIcon icon={faTimes} /></RBS.Col>
                    <RBS.Col md={4} xs={4} className="pad-5  visitRescheduleBtn"> <FontAwesomeIcon icon={faClock} /></RBS.Col>
                  </RBS.Row>
                </RBS.Col>
              </RBS.Row>
              <RBS.Row className="tblRow">
                <RBS.Col md={2} xs={3} className="tblTimeSec"><b>A-306</b></RBS.Col>
                <RBS.Col md={3} xs={3} className="tblDateSec">29-May-2021</RBS.Col>
                <RBS.Col md={2} xs={3} className="tblTimeSec"> 1.30 PM</RBS.Col>
                <RBS.Col md={3} xs={4} className="text-center text-warning"> Pending</RBS.Col>
                <RBS.Col md={2} xs={2} className="text-center tblActionBtn">
                  <RBS.Row>
                    <RBS.Col md={4} xs={4} className="pad-5 visitApproveBtn"><FontAwesomeIcon icon={faCheck} /></RBS.Col>
                    <RBS.Col md={4} xs={4} className="pad-5  visitRejectBtn"> <FontAwesomeIcon icon={faTimes} /></RBS.Col>
                    <RBS.Col md={4} xs={4} className="pad-5  visitRescheduleBtn"> <FontAwesomeIcon icon={faClock} /></RBS.Col>
                  </RBS.Row>
                </RBS.Col>
              </RBS.Row>
              <RBS.Row className="tblRow">
                <RBS.Col md={2} xs={3} className="tblTimeSec"><b>A-306</b></RBS.Col>
                <RBS.Col md={3} xs={3} className="tblDateSec">29-May-2021</RBS.Col>
                <RBS.Col md={2} xs={3} className="tblTimeSec"> 1.30 PM</RBS.Col>
                <RBS.Col md={3} xs={4} className="text-center text-warning"> Pending</RBS.Col>
                <RBS.Col md={2} xs={2} className="text-center tblActionBtn">
                  <RBS.Row>
                    <RBS.Col md={4} xs={4} className="pad-5 visitApproveBtn"><FontAwesomeIcon icon={faCheck} /></RBS.Col>
                    <RBS.Col md={4} xs={4} className="pad-5  visitRejectBtn"> <FontAwesomeIcon icon={faTimes} /></RBS.Col>
                    <RBS.Col md={4} xs={4} className="pad-5  visitRescheduleBtn"> <FontAwesomeIcon icon={faClock} /></RBS.Col>
                  </RBS.Row>
                </RBS.Col>
              </RBS.Row>
              <RBS.Row className="tblRow">
                <RBS.Col md={2} xs={3} className="tblTimeSec"><b>A-306</b></RBS.Col>
                <RBS.Col md={3} xs={3} className="tblDateSec">29-May-2021</RBS.Col>
                <RBS.Col md={2} xs={3} className="tblTimeSec"> 1.30 PM</RBS.Col>
                <RBS.Col md={3} xs={4} className="text-center text-warning"> Pending</RBS.Col>
                <RBS.Col md={2} xs={2} className="text-center tblActionBtn">
                  <RBS.Row>
                    <RBS.Col md={4} xs={4} className="pad-5 visitApproveBtn"><FontAwesomeIcon icon={faCheck} /></RBS.Col>
                    <RBS.Col md={4} xs={4} className="pad-5  visitRejectBtn"> <FontAwesomeIcon icon={faTimes} /></RBS.Col>
                    <RBS.Col md={4} xs={4} className="pad-5  visitRescheduleBtn"> <FontAwesomeIcon icon={faClock} /></RBS.Col>
                  </RBS.Row>
                </RBS.Col>
              </RBS.Row>
            </RBS.Col>
          </div>
        </RBS.Col>
      </RBS.Row>
      <RBS.Row>

        <RBS.Col md={12} className="cardHeader pad-5">
          <div className="cardTitle" >Flat Owners</div>
          <div className="clearfix" />
          <hr className="hrgray" />
        </RBS.Col>
        <RBS.Col md={1} xs={3} className="pad-5">
          <div className="ownerCard text-center">
            <Avatar round="40px" name="Gopi Deshmukh" size="50" />
            <div className="clearfix" />
            <div className="ownerNm">Gopi Deshmukh</div>
            <div className="clearfix" />
            <div className="flatNo">A-306</div>
            <div className="clearfix" />
            <div className="ownerActBtn">
              <RBS.Button variant="outline-primary" size="sm" className="viewProfBtn"> View Profile</RBS.Button>
            </div>
          </div>
        </RBS.Col>
        <RBS.Col md={1} xs={3} className="pad-5">
          <div className="ownerCard text-center">
            <Avatar round="40px" name="Janardhan Deshmukh" size="50" />
            <div className="clearfix" />
            <div className="ownerNm">Jay Deshmukh</div>
            <div className="clearfix" />
            <div className="flatNo">A-106</div>
            <div className="clearfix" />
            <div className="ownerActBtn">
              <RBS.Button variant="outline-primary" size="sm" className="viewProfBtn"> View Profile</RBS.Button>
            </div>
          </div>
        </RBS.Col>

        <RBS.Col md={1} xs={3} className="pad-5">
          <div className="ownerCard text-center">
            <Avatar round="40px" name="Ram More" size="50" />
            <div className="clearfix" />
            <div className="ownerNm">Ram More</div>
            <div className="clearfix" />
            <div className="flatNo">A-406</div>
            <div className="clearfix" />
            <div className="ownerActBtn">
              <RBS.Button variant="outline-primary" size="sm" className="viewProfBtn"> View Profile</RBS.Button>
            </div>
          </div>
        </RBS.Col>
        <RBS.Col md={1} xs={3} className="pad-5">
          <div className="ownerCard text-center">
            <Avatar round="40px" name="Mahesh Thorat" size="50" />
            <div className="clearfix" />
            <div className="ownerNm">Mahesh Thorat</div>
            <div className="clearfix" />
            <div className="flatNo">A-206</div>
            <div className="clearfix" />
            <div className="ownerActBtn">
              <RBS.Button variant="outline-primary" size="sm" className="viewProfBtn"> View Profile</RBS.Button>
            </div>
          </div>
        </RBS.Col>

        <RBS.Col md={1} xs={3} className="pad-5">
          <div className="ownerCard text-center">
            <Avatar round="40px" name="Siddharth Malhotra" size="50" />
            <div className="clearfix" />
            <div className="ownerNm">Siddharth Malpe</div>
            <div className="clearfix" />
            <div className="flatNo">A-306</div>
            <div className="clearfix" />
            <div className="ownerActBtn">
              <RBS.Button variant="outline-primary" size="sm" className="viewProfBtn"> View Profile</RBS.Button>
            </div>
          </div>
        </RBS.Col>

        <RBS.Col md={1} xs={3} className="pad-5">
          <div className="ownerCard text-center">
            <Avatar round="40px" name="Rawdy Rathod" size="50" />
            <div className="clearfix" />
            <div className="ownerNm">Rawdy Rathod</div>
            <div className="clearfix" />
            <div className="flatNo">A-1106</div>
            <div className="clearfix" />
            <div className="ownerActBtn">
              <RBS.Button variant="outline-primary" size="sm" className="viewProfBtn"> View Profile</RBS.Button>
            </div>
          </div>
        </RBS.Col>

        <RBS.Col md={1} xs={3} className="pad-5">
          <div className="ownerCard text-center">
            <Avatar round="40px" name="Ronny Decosta" size="50" />
            <div className="clearfix" />
            <div className="ownerNm">Ronny Decosta</div>
            <div className="clearfix" />
            <div className="flatNo">A-906</div>
            <div className="clearfix" />
            <div className="ownerActBtn">
              <RBS.Button variant="outline-primary" size="sm" className="viewProfBtn"> View Profile</RBS.Button>
            </div>
          </div>
        </RBS.Col>

        <RBS.Col md={1} xs={3} className="pad-5">
          <div className="ownerCard text-center">
            <Avatar round="40px" name="Rajat Mule" size="50" />
            <div className="clearfix" />
            <div className="ownerNm">Rajat Mule</div>
            <div className="clearfix" />
            <div className="flatNo">A-1206</div>
            <div className="clearfix" />
            <div className="ownerActBtn">
              <RBS.Button variant="outline-primary" size="sm" className="viewProfBtn"> View Profile</RBS.Button>
            </div>
          </div>
        </RBS.Col>
        <RBS.Col md={1} xs={3} className="pad-5">
          <div className="ownerCard text-center">
            <Avatar round="40px" name="Aakash Kadam" size="50" />
            <div className="clearfix" />
            <div className="ownerNm">Aakash Kadam</div>
            <div className="clearfix" />
            <div className="flatNo">A-306</div>
            <div className="clearfix" />
            <div className="ownerActBtn">
              <RBS.Button variant="outline-primary" size="sm" className="viewProfBtn"> View Profile</RBS.Button>
            </div>
          </div>
        </RBS.Col>
        <RBS.Col md={1} xs={3} className="pad-5">
          <div className="ownerCard text-center">
            <Avatar round="40px" name="Abdul Kadir" size="50" />
            <div className="clearfix" />
            <div className="ownerNm">Abdul Kadir</div>
            <div className="clearfix" />
            <div className="flatNo">A-706</div>
            <div className="clearfix" />
            <div className="ownerActBtn">
              <RBS.Button variant="outline-primary" size="sm" className="viewProfBtn"> View Profile</RBS.Button>
            </div>
          </div>
        </RBS.Col>
        <RBS.Col md={1} xs={3} className="pad-5">
          <div className="ownerCard text-center">
            <Avatar round="40px" name="Dev Batista" size="50" />
            <div className="clearfix" />
            <div className="ownerNm">Dev Batista</div>
            <div className="clearfix" />
            <div className="flatNo">A-506</div>
            <div className="clearfix" />
            <div className="ownerActBtn">
              <RBS.Button variant="outline-primary" className="viewProfBtn" size="sm"> View Profile</RBS.Button>
            </div>
          </div>
        </RBS.Col>
        <RBS.Col md={1} xs={3} className="text-center pad-2" onClick={() => window.open("/localbusiness")}>
          <div className="viewMoreBtn"> <FontAwesomeIcon icon={faChevronCircleRight} /> </div>
          <div className="clearfix"></div>
          <div className="businessName" >View All</div>
        </RBS.Col>
      </RBS.Row>
    </RBS.Container>
  </div >;
}

SiteDashboard.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  siteDashboard: makeSelectSiteDashboard(),
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

export default compose(withConnect)(SiteDashboard);
