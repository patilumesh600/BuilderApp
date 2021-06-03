/**
 *
 * UserDashboard
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import { useInjectSaga } from 'utils/injectSaga';
import { useInjectReducer } from 'utils/injectReducer';
import makeSelectUserDashboard from './selectors';
import reducer from './reducer';
import saga from './saga';
import "./dashboard.css";

import * as RBS from 'react-bootstrap';
import { faExpandAlt, faPencilAlt, faWallet, faHouseUser, faRupeeSign, faEllipsisV, faFilePdf, faFileWord, faCouch, faPaintRoller, faCarrot, faTruckLoading, faCapsules, faShoppingBasket, faWrench, faCar, faCocktail, faClinicMedical, faGavel, faPhoneAlt, faPlusCircle, faChevronCircleRight } from '@fortawesome/free-solid-svg-icons';
import { faFileExcel } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import userImg from '../../images/icons/UserIcon.jpg';
import ProgressBar from 'react-customizable-progressbar';
import Avatar, { ConfigProvider } from 'react-avatar';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';

export function UserDashboard() {
  useInjectReducer({ key: 'userDashboard', reducer });
  useInjectSaga({ key: 'userDashboard', saga });

  return <div id="dashContainer">
    <RBS.Container fluid>
      <RBS.Row>
        <RBS.Col md={4} xs={12} >
          <div className="userCard">
            <RBS.Col md={12} className="cardHeader pad-5">
              <div className="cardTitle" ></div>
              <div className="cardAction"> <FontAwesomeIcon icon={faPencilAlt} /></div>
            </RBS.Col>
            <div className="clearfix" />
            <div className="clearfix" />
            <RBS.Col xs={12} md={12} className="text-center">
              <RBS.Image
                src={userImg} height="125" width="125"
                roundedCircle />
            </RBS.Col>
            <RBS.Col xs={12} md={12} className="text-center">
              <div className="userTitle"> Sanket Deshmukh
            <div className="clearfix" />
                <small>A-306, Silver City</small>
                <div className="clearfix" />
                <small>First Owner</small>
              </div>
            </RBS.Col>
          </div>
        </RBS.Col>
        <RBS.Col md={4} xs={12} className="text-center d-none d-md-block">

          <div className="item guageCard">
            <RBS.Col md={12} className="cardHeader pad-5">
              <div className="cardTitle" >Flat Completion Status</div>
              <div className="cardAction"> <FontAwesomeIcon icon={faExpandAlt} /></div>
            </RBS.Col>
            <div className="clearfix" />
            <ProgressBar
              radius={80}
              progress={75}
              cut={120}
              rotate={-210}
              strokeWidth={15}
              strokeColor="#81b214"
              strokeLinecap="round"
              trackStrokeWidth={5}
              trackStrokeColor="#d3d3d3"
              trackStrokeLinecap="square"
              pointerRadius={0}
              initialAnimation={true}
              transition="1.5s ease 0.5s"
              trackTransition="0s ease"
            >
              <div className="indicator-volume">
                <div className="inner">
                  <div className="icon">
                    <FontAwesomeIcon icon={faHouseUser} />
                  </div>
                  <div className="percentage">{75}%</div>
                </div>
              </div>
            </ProgressBar>
            <div className="clearfix" />
            <RBS.Col md={12} xs={12} className="guageCardFooter">
              <small>Last Updated On : 29-Apr-2021</small>
            </RBS.Col>
          </div>
        </RBS.Col>


        <RBS.Col md={4} xs={12} className="text-center d-none d-md-block">
          <div className="item guageCard">
            <RBS.Col md={12} className="cardHeader pad-5">
              <div className="cardTitle" >Payment Status</div>
              <div className="cardAction"> <FontAwesomeIcon icon={faExpandAlt} /></div>
            </RBS.Col>
            <div className="clearfix" />
            <ProgressBar
              radius={80}
              progress={35}
              cut={120}
              rotate={-210}
              strokeWidth={15}
              strokeColor="#ff6701"
              strokeLinecap="round"
              trackStrokeWidth={5}
              trackStrokeColor="#d3d3d3"
              trackStrokeLinecap="square"
              pointerRadius={0}
              initialAnimation={true}
              transition="1.5s ease 0.5s"
              trackTransition="0s ease"
            >
              <div className="indicator-volume">
                <div className="inner">
                  <div className="icon">
                    <FontAwesomeIcon icon={faWallet} />
                  </div>
                  <div className="percentage">{35}%</div>
                </div>
              </div>
            </ProgressBar>
            <div className="clearfix" />
            <RBS.Col md={12} xs={12} className="guageCardFooter">
              <small>Last Payment : <FontAwesomeIcon icon={faRupeeSign} /> 10,00,000</small>
            </RBS.Col>
          </div>

        </RBS.Col>

        <RBS.Col md={4} xs={12} className="d-block d-md-none">
          <div className="guageCard">
            <RBS.Col md={12} className="cardHeader pad-0">
              <div className="cardTitle" >Completion Status</div>
              <div className="cardAction"> <FontAwesomeIcon icon={faExpandAlt} /></div>
            </RBS.Col>
            <div className="clearfix" />
            <RBS.Row>
              <RBS.Col xs={12} className="mobProgHeader"><small>Flat Completion Status : 60%</small></RBS.Col>
              <RBS.Col xs={2} className="icMobProgress"><FontAwesomeIcon icon={faHouseUser} /> </RBS.Col>
              <RBS.Col xs={10} className="mobProgressSec"><RBS.ProgressBar now={60} variant="success" /></RBS.Col>

            </RBS.Row>
            <RBS.Row>
              <RBS.Col xs={12} className="mobProgHeader"><small>Payment Status: 35%</small></RBS.Col>
              <RBS.Col xs={2} className="icMobProgress"><FontAwesomeIcon icon={faWallet} /> </RBS.Col>
              <RBS.Col xs={10} className="mobProgressSec"><RBS.ProgressBar now={35} variant="danger" /></RBS.Col>
            </RBS.Row>
          </div>

        </RBS.Col>


      </RBS.Row>
      <RBS.Row>
        <RBS.Col md={6} xs={12}>
          <div className="tblCard tblContianer" >
            <RBS.Col md={12} className="cardHeader pad-5">
              <div className="cardTitle" >Visits Details</div>
              <div className="cardAction"> <FontAwesomeIcon icon={faPlusCircle} /> &nbsp; <FontAwesomeIcon icon={faExpandAlt} /></div>
              <div className="clearfix" />
            </RBS.Col>
            <div className="clearfix" />
            <RBS.Col md={12} className="pad-5">
              <RBS.Row className="tblRow">
                <RBS.Col md={4} xs={4} className="tblDateSec">29-May-2021</RBS.Col>
                <RBS.Col md={3} xs={3} className="tblTimeSec"> 1.30 PM</RBS.Col>
                <RBS.Col md={4} xs={4} className="text-center text-success"> Completed</RBS.Col>
                <RBS.Col md={1} xs={1} className="text-right tblActionBtn"><FontAwesomeIcon icon={faEllipsisV} /> </RBS.Col>
              </RBS.Row>
              <RBS.Row className="tblRow">
                <RBS.Col md={4} xs={4} className="tblDateSec">29-May-2021</RBS.Col>
                <RBS.Col md={3} xs={3} className="tblTimeSec"> 1.30 PM</RBS.Col>
                <RBS.Col md={4} xs={4} className="text-center text-success"> Completed</RBS.Col>
                <RBS.Col md={1} xs={1} className="text-right tblActionBtn"><FontAwesomeIcon icon={faEllipsisV} /> </RBS.Col>
              </RBS.Row>

              <RBS.Row className="tblRow">
                <RBS.Col md={4} xs={4} className="tblDateSec">29-May-2021</RBS.Col>
                <RBS.Col md={3} xs={3} className="tblTimeSec"> 1.30 PM</RBS.Col>
                <RBS.Col md={4} xs={4} className="text-center text-success"> Completed</RBS.Col>
                <RBS.Col md={1} xs={1} className="text-right tblActionBtn"><FontAwesomeIcon icon={faEllipsisV} /> </RBS.Col>
              </RBS.Row>

              <RBS.Row className="tblRow">
                <RBS.Col md={4} xs={4} className="tblDateSec">29-May-2021</RBS.Col>
                <RBS.Col md={3} xs={3} className="tblTimeSec"> 1.30 PM</RBS.Col>
                <RBS.Col md={4} xs={4} className="text-center text-success"> Completed</RBS.Col>
                <RBS.Col md={1} xs={1} className="text-right tblActionBtn"><FontAwesomeIcon icon={faEllipsisV} /> </RBS.Col>
              </RBS.Row>

              <RBS.Row className="tblRow">
                <RBS.Col md={4} xs={4} className="tblDateSec">29-May-2021</RBS.Col>
                <RBS.Col md={3} xs={3} className="tblTimeSec"> 1.30 PM</RBS.Col>
                <RBS.Col md={4} xs={4} className="text-center text-success"> Completed</RBS.Col>
                <RBS.Col md={1} xs={1} className="text-right tblActionBtn"><FontAwesomeIcon icon={faEllipsisV} /> </RBS.Col>
              </RBS.Row>

              <RBS.Row className="tblRow">
                <RBS.Col md={4} xs={4} className="tblDateSec">29-May-2021</RBS.Col>
                <RBS.Col md={3} xs={3} className="tblTimeSec"> 1.30 PM</RBS.Col>
                <RBS.Col md={4} xs={4} className="text-center text-success"> Completed</RBS.Col>
                <RBS.Col md={1} xs={1} className="text-right tblActionBtn"><FontAwesomeIcon icon={faEllipsisV} /> </RBS.Col>
              </RBS.Row>

            </RBS.Col>
          </div>
        </RBS.Col>
        <RBS.Col md={6} xs={12}>
          <div className="tblCard" >
            <RBS.Col md={12} className="cardHeader pad-5">
              <div className="cardTitle" >Document Vault</div>
              <div className="cardAction"> <FontAwesomeIcon icon={faPlusCircle} /> &nbsp; <FontAwesomeIcon icon={faExpandAlt} /></div>

              <div className="clearfix" />
            </RBS.Col>
            <div className="clearfix" />
            <RBS.Col md={12} className="pad-5">
              <RBS.Row className="tblRow">
                <RBS.Col md={6} xs={5} className="tblDateSec"><FontAwesomeIcon icon={faFilePdf} /> Sanction Letter - ICICI Bank </RBS.Col>
                <RBS.Col md={2} xs={2} className="tblTimeSec"> Loan</RBS.Col>
                <RBS.Col md={3} xs={4} className="text-center text-success"> 10-May-2020</RBS.Col>
                <RBS.Col md={1} xs={1} className="text-right tblActionBtn"><FontAwesomeIcon icon={faEllipsisV} /> </RBS.Col>
              </RBS.Row>
              <RBS.Row className="tblRow">
                <RBS.Col md={6} xs={5} className="tblDateSec"><FontAwesomeIcon icon={faFileExcel} /> Loan Processing Details </RBS.Col>
                <RBS.Col md={2} xs={2} className="tblTimeSec"> Loan</RBS.Col>
                <RBS.Col md={3} xs={4} className="text-center text-success"> 10-May-2020</RBS.Col>
                <RBS.Col md={1} xs={1} className="text-right tblActionBtn"><FontAwesomeIcon icon={faEllipsisV} /> </RBS.Col>
              </RBS.Row>

              <RBS.Row className="tblRow">
                <RBS.Col md={6} xs={5} className="tblDateSec"><FontAwesomeIcon icon={faFileWord} /> Demand Letter - Jan-2021 </RBS.Col>
                <RBS.Col md={2} xs={2} className="tblTimeSec"> Demand</RBS.Col>
                <RBS.Col md={3} xs={4} className="text-center text-success"> 10-May-2020</RBS.Col>
                <RBS.Col md={1} xs={1} className="text-right tblActionBtn"><FontAwesomeIcon icon={faEllipsisV} /> </RBS.Col>
              </RBS.Row>
              <RBS.Row className="tblRow">
                <RBS.Col md={6} xs={5} className="tblDateSec"><FontAwesomeIcon icon={faFileWord} /> Demand Letter - Jan-2021 </RBS.Col>
                <RBS.Col md={2} xs={2} className="tblTimeSec"> Demand</RBS.Col>
                <RBS.Col md={3} xs={4} className="text-center text-success"> 10-May-2020</RBS.Col>
                <RBS.Col md={1} xs={1} className="text-right tblActionBtn"><FontAwesomeIcon icon={faEllipsisV} /> </RBS.Col>
              </RBS.Row>
              <RBS.Row className="tblRow">
                <RBS.Col md={6} xs={5} className="tblDateSec"><FontAwesomeIcon icon={faFileWord} /> Demand Letter - Jan-2021 </RBS.Col>
                <RBS.Col md={2} xs={2} className="tblTimeSec"> Demand</RBS.Col>
                <RBS.Col md={3} xs={4} className="text-center text-success"> 10-May-2020</RBS.Col>
                <RBS.Col md={1} xs={1} className="text-right tblActionBtn"><FontAwesomeIcon icon={faEllipsisV} /> </RBS.Col>
              </RBS.Row>
            </RBS.Col>

          </div>
        </RBS.Col>
      </RBS.Row>
      <RBS.Row className="neighbourHoodSec">
        <RBS.Col md={6}>
          <RBS.Row className="tblCard tblContianer" >
            <RBS.Col md={12} className="cardHeader pad-5">
              <div className="cardTitle" >Your Neighbourhood</div>
              <div className="cardAction"> <FontAwesomeIcon icon={faExpandAlt} /></div>
              <div className="clearfix" />
            </RBS.Col>
            <div className="clearfix" />
            {/* <ConfigProvider colors={['#ff5200', '#900c3f', '#007965', '#81b214', '#f21170', '#72147e', '#a799b7', '#f58634', '#a35709', '#630000']}> */}
            <ConfigProvider colors={['#ff5200', '#900c3f', '#a35709', '#630000']}>
              <RBS.Col md={12} className="pad-5">
                <RBS.Row className="tblRow">
                  <RBS.Col md={2} xs={2} className="mobNeighbourAvatar text-center"> <Avatar round="20px" name="Gopi Deshmukh" round={true} size="35" /></RBS.Col>
                  <RBS.Col md={6} xs={6} className="mobNeighbourName  pad-2">Gopi Deshmukh</RBS.Col>
                  <RBS.Col md={2} xs={2} className="mobNeighbourName  pad-2">A-902</RBS.Col>
                  <RBS.Col md={2} xs={2} className="mobNeighbourBtn text-right"><RBS.Button size="sm" variant="outline-success"><FontAwesomeIcon icon={faWhatsapp} /></RBS.Button> </RBS.Col>
                </RBS.Row>
                <RBS.Row className="tblRow">
                  <RBS.Col md={2} xs={2} className="mobNeighbourAvatar text-center"> <Avatar round="20px" name="Sonet Gomes" round={true} size="35" /></RBS.Col>
                  <RBS.Col md={6} xs={6} className="mobNeighbourName  pad-2">Sonet Gomes</RBS.Col>
                  <RBS.Col md={2} xs={2} className="mobNeighbourName  pad-2">A-901</RBS.Col>
                  <RBS.Col md={2} xs={2} className="mobNeighbourBtn text-right"><RBS.Button size="sm" variant="outline-success"><FontAwesomeIcon icon={faWhatsapp} /></RBS.Button> </RBS.Col>
                </RBS.Row>
                <RBS.Row className="tblRow">
                  <RBS.Col md={2} xs={2} className="mobNeighbourAvatar text-center"> <Avatar round="20px" name="Danny Morris" round={true} size="35" /></RBS.Col>
                  <RBS.Col md={6} xs={6} className="mobNeighbourName  pad-2">Danny Morris</RBS.Col>
                  <RBS.Col md={2} xs={2} className="mobNeighbourName  pad-2">A-903</RBS.Col>
                  <RBS.Col md={2} xs={2} className="mobNeighbourBtn text-right"><RBS.Button size="sm" variant="outline-success"><FontAwesomeIcon icon={faWhatsapp} /></RBS.Button> </RBS.Col>
                </RBS.Row>
                <RBS.Row className="tblRow">
                  <RBS.Col md={2} xs={2} className="mobNeighbourAvatar text-center"> <Avatar round="20px" name="Umesh Patil" round={true} size="35" /></RBS.Col>
                  <RBS.Col md={6} xs={6} className="mobNeighbourName  pad-2">Umesh Patil</RBS.Col>
                  <RBS.Col md={2} xs={2} className="mobNeighbourName  pad-2">A-904</RBS.Col>
                  <RBS.Col md={2} xs={2} className="mobNeighbourBtn text-right"><RBS.Button size="sm" variant="outline-success"><FontAwesomeIcon icon={faWhatsapp} /></RBS.Button> </RBS.Col>
                </RBS.Row>
                <RBS.Row className="tblRow">
                  <RBS.Col md={2} xs={2} className="mobNeighbourAvatar text-center"> <Avatar round="20px" name="Mahesh Chavan" round={true} size="35" /></RBS.Col>
                  <RBS.Col md={6} xs={6} className="mobNeighbourName  pad-2">Mahesh Chavan</RBS.Col>
                  <RBS.Col md={2} xs={2} className="mobNeighbourName  pad-2">A-905</RBS.Col>
                  <RBS.Col md={2} xs={2} className="mobNeighbourBtn text-right"><RBS.Button size="sm" variant="outline-success"><FontAwesomeIcon icon={faWhatsapp} /></RBS.Button> </RBS.Col>
                </RBS.Row>
              </RBS.Col>
            </ConfigProvider>
          </RBS.Row>
        </RBS.Col>
        <RBS.Col md={6}>
          <RBS.Row className="tblCard tblContianer" >
            <RBS.Col md={12} className="cardHeader pad-5">
              <div className="cardTitle" >Important Contacts</div>
              <div className="cardAction"> <FontAwesomeIcon icon={faExpandAlt} /></div>
              <div className="clearfix" />
            </RBS.Col>
            <div className="clearfix" />
            {/* <ConfigProvider colors={['#ff5200', '#900c3f', '#007965', '#81b214', '#f21170', '#72147e', '#a799b7', '#f58634', '#a35709', '#630000']}> */}
            <ConfigProvider colors={['#ff5200', '#900c3f', '#a35709', '#630000']}>
              <RBS.Col md={12} className="pad-5">
                <RBS.Row className="tblRow">
                  <RBS.Col md={2} xs={2} className="mobNeighbourAvatar text-center"> <Avatar round="20px" name="Arvind Pawar" round={true} size="35" /></RBS.Col>
                  <RBS.Col md={6} xs={5} className="mobNeighbourName  pad-2">Arvind Pawar</RBS.Col>
                  <RBS.Col md={2} xs={3} className="mobNeighbourName  pad-2">Builder Office</RBS.Col>
                  <RBS.Col md={2} xs={2} className="mobNeighbourBtn text-right"><RBS.Button size="sm" variant="outline-primary"><FontAwesomeIcon icon={faPhoneAlt} /></RBS.Button> </RBS.Col>
                </RBS.Row>
                <RBS.Row className="tblRow">
                  <RBS.Col md={2} xs={2} className="mobNeighbourAvatar text-center"> <Avatar round="20px" name="Sandip Jadhav" round={true} size="35" /></RBS.Col>
                  <RBS.Col md={6} xs={5} className="mobNeighbourName  pad-2">Sandip Jadhav</RBS.Col>
                  <RBS.Col md={2} xs={3} className="mobNeighbourName  pad-2">Secretary</RBS.Col>
                  <RBS.Col md={2} xs={2} className="mobNeighbourBtn text-right"><RBS.Button size="sm" variant="outline-primary"><FontAwesomeIcon icon={faPhoneAlt} /></RBS.Button> </RBS.Col>
                </RBS.Row>
                <RBS.Row className="tblRow">
                  <RBS.Col md={2} xs={2} className="mobNeighbourAvatar text-center"> <Avatar round="20px" name="Rajendra Kamble" round={true} size="35" /></RBS.Col>
                  <RBS.Col md={6} xs={5} className="mobNeighbourName  pad-2">Rajendra Kamble</RBS.Col>
                  <RBS.Col md={2} xs={3} className="mobNeighbourName  pad-2">Bank Officer</RBS.Col>
                  <RBS.Col md={2} xs={2} className="mobNeighbourBtn text-right"><RBS.Button size="sm" variant="outline-primary"><FontAwesomeIcon icon={faPhoneAlt} /></RBS.Button> </RBS.Col>
                </RBS.Row>
                <RBS.Row className="tblRow">
                  <RBS.Col md={2} xs={2} className="mobNeighbourAvatar text-center"> <Avatar round="20px" name="Dnyesh Dafal" round={true} size="35" /></RBS.Col>
                  <RBS.Col md={6} xs={5} className="mobNeighbourName  pad-2">Dnyesh Dafal</RBS.Col>
                  <RBS.Col md={2} xs={3} className="mobNeighbourName  pad-2">Painter</RBS.Col>
                  <RBS.Col md={2} xs={2} className="mobNeighbourBtn text-right"><RBS.Button size="sm" variant="outline-primary"><FontAwesomeIcon icon={faPhoneAlt} /></RBS.Button> </RBS.Col>
                </RBS.Row>
                <RBS.Row className="tblRow">
                  <RBS.Col md={2} xs={2} className="mobNeighbourAvatar text-center"> <Avatar round="20px" name="Radheshyam Jindal" round={true} size="35" /></RBS.Col>
                  <RBS.Col md={6} xs={5} className="mobNeighbourName  pad-2">Radheshyam Jindal</RBS.Col>
                  <RBS.Col md={2} xs={3} className="mobNeighbourName  pad-2">Furniture</RBS.Col>
                  <RBS.Col md={2} xs={2} className="mobNeighbourBtn text-right"><RBS.Button size="sm" variant="outline-primary"><FontAwesomeIcon icon={faPhoneAlt} /></RBS.Button> </RBS.Col>
                </RBS.Row>
              </RBS.Col>
            </ConfigProvider>
          </RBS.Row>
        </RBS.Col>

      </RBS.Row>
      <div className="clearfix" />
      <RBS.Container fluid>
        <RBS.Row className="businessContainer">
          <RBS.Col md={12}><h6>Nearby Businesses</h6> <hr /> </RBS.Col>

          <RBS.Col md={1} xs={3} className="text-center pad-2 businessSec">
            <div className="businessIcon"><FontAwesomeIcon icon={faCouch} className="colrWood"/></div>
            <div className="clearfix"></div>
            <div className="businessName" >Furniture</div>
          </RBS.Col>
          <RBS.Col md={1} xs={3} className="text-center pad-2 businessSec">
            <div className="businessIcon"><FontAwesomeIcon icon={faPaintRoller} className="colrWine" /></div>
            <div className="clearfix"></div>
            <div className="businessName" >Painters</div>
          </RBS.Col>

          <RBS.Col md={1} xs={3} className="text-center pad-2 businessSec">
            <div className="businessIcon"><FontAwesomeIcon icon={faTruckLoading} className="colrdYellow" /></div>
            <div className="clearfix"></div>
            <div className="businessName" >Transports</div>
          </RBS.Col>
          <RBS.Col md={1} xs={3} className="text-center pad-2 businessSec">
            <div className="businessIcon"><FontAwesomeIcon icon={faShoppingBasket} className="colrGreen" /></div>
            <div className="clearfix"></div>
            <div className="businessName" >Grocery</div>
          </RBS.Col>
          <RBS.Col md={1} xs={3} className="text-center pad-2 businessSec">
            <div className="businessIcon"><FontAwesomeIcon icon={faWrench} className="colrSilver" /></div>
            <div className="clearfix"></div>
            <div className="businessName" >Hardwares</div>
          </RBS.Col>
          <RBS.Col md={1} xs={3} className="text-center pad-2 businessSec">
            <div className="businessIcon"><FontAwesomeIcon icon={faCapsules} className="colrMedRed" /></div>
            <div className="clearfix"></div>
            <div className="businessName" >Medicals</div>
          </RBS.Col>
          <RBS.Col md={1} xs={3} className="text-center pad-2 businessSec">
            <div className="businessIcon"><FontAwesomeIcon icon={faCar} className="colrNavBlue" /></div>
            <div className="clearfix"></div>
            <div className="businessName" >Garage</div>
          </RBS.Col>
          <RBS.Col md={1} xs={3} className="text-center pad-2 businessSec">
            <div className="businessIcon"><FontAwesomeIcon icon={faCocktail} className="colrDrinkBlue" /></div>
            <div className="clearfix"></div>
            <div className="businessName" >Hotels</div>
          </RBS.Col>
          <RBS.Col md={1} xs={3} className="text-center pad-2 businessSec">
            <div className="businessIcon"><FontAwesomeIcon icon={faClinicMedical} className="colrHospYellow" /></div>
            <div className="clearfix"></div>
            <div className="businessName" >Hospitals</div>
          </RBS.Col>
          <RBS.Col md={1} xs={3} className="text-center pad-2 businessSec">
            <div className="businessIcon"><FontAwesomeIcon icon={faGavel} /></div>
            <div className="clearfix"></div>
            <div className="businessName" >Legal Advisor</div>
          </RBS.Col>
          <RBS.Col md={1} xs={3} className="text-center pad-2 businessSec">
            <div className="businessIcon"><FontAwesomeIcon icon={faCarrot} className="colrCarrotRed" /></div>
            <div className="clearfix"></div>
            <div className="businessName" >Vegetables</div>
          </RBS.Col>
          <RBS.Col md={1} xs={3} className="text-center pad-2 businessSec">
            <div className="businessIcon"> <FontAwesomeIcon icon={faChevronCircleRight} /> </div>
            <div className="clearfix"></div>
            <div className="businessName" >View All</div>
          </RBS.Col>
        </RBS.Row>
      </RBS.Container>
    </RBS.Container>
  </div >;
}

UserDashboard.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  userDashboard: makeSelectUserDashboard(),
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

export default compose(withConnect)(UserDashboard);
