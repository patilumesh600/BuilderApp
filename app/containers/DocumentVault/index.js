/**
 *
 * DocumentVault
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import { useInjectSaga } from 'utils/injectSaga';
import { useInjectReducer } from 'utils/injectReducer';
import makeSelectDocumentVault from './selectors';
import reducer from './reducer';
import saga from './saga';


import * as RBS from 'react-bootstrap';
import { faCalendarPlus, faCloudDownloadAlt, faDownload, faEllipsisV, faForward, faHome, faHouseUser, faPlus, faSearch, faShare, faStar, faTrash, faUsers } from '@fortawesome/free-solid-svg-icons';
import { faFileExcel, faBuilding, faFilePdf, faFileImage, faFileWord, } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import userImg from '../../images/icons/UserIcon.jpg';
import ProgressBar from 'react-customizable-progressbar';
import Avatar, { ConfigProvider } from 'react-avatar';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import './documents.css';

export function DocumentVault() {
  useInjectReducer({ key: 'documentVault', reducer });
  useInjectSaga({ key: 'documentVault', saga });

  return <div id="docContainer">
    <RBS.Container fluid>
      <RBS.Col md={12} className="pad-0 filterSec">
        <RBS.Row >
          <RBS.Col md={5} xs={10} className="pad-0">
            <RBS.InputGroup size="sm">
              <RBS.InputGroup.Prepend>
                <RBS.InputGroup.Text id="basic-addon2" className="bg-light"> <FontAwesomeIcon icon={faSearch} /> </RBS.InputGroup.Text>
              </RBS.InputGroup.Prepend>
              <RBS.FormControl
                placeholder="Search by Name, Upload date, related to"
                aria-label="Search by Name, Upload date, related to"
                aria-describedby="basic-addon2"
              />

            </RBS.InputGroup>

          </RBS.Col>
          <RBS.Col md={5} className="d-none d-md-inline"></RBS.Col>
          <RBS.Col md={2} className="text-right pad-0" xs={2} >
            <RBS.Button variant="outline-primary" size="sm"> <FontAwesomeIcon icon={faPlus} /> <span className="d-none d-md-inline">Add</span></RBS.Button>
            <div className="clearfix" />
          </RBS.Col>
          <div className="clearfix" />
        </RBS.Row>
        <div className="clearfix" />
      </RBS.Col>

      <RBS.Row>
        <RBS.Col md={12} className="docMainSec">
          <RBS.Row className="docTblHdr">
            <RBS.Col md={1} xs={2} className="text-center">#</RBS.Col>
            <RBS.Col md={4} xs={7}>File Name</RBS.Col>
            <RBS.Col md={2} className="d-none d-md-inline">Related To</RBS.Col>
            <RBS.Col md={2} className="d-none d-md-inline">UploadedDate</RBS.Col>
            <RBS.Col md={2} className="d-none d-md-inline">Shared With</RBS.Col>
            <RBS.Col md={1} xs={1} className=" text-center"></RBS.Col>
          </RBS.Row>
          <RBS.Row className="docListItem">
            <RBS.Col md={1} xs={2} className="pad-2 text-center pad-t-5">1</RBS.Col>
            <RBS.Col md={4} xs={8} className="fileName pad-2 pad-t-5"><FontAwesomeIcon icon={faFilePdf} className="text-danger" /> Agreement Letter
            <div className="clearfix" />
              <div className="d-block d-md-none docMobDetails"><small>Flat Document | 12-Apr-2020</small> </div>
            </RBS.Col>
            <RBS.Col md={2} className="d-none d-md-inline  pad-t-5"><RBS.Badge pill variant="secondary"> Flat Document</RBS.Badge></RBS.Col>
            <RBS.Col md={2} className="d-none d-md-inline  pad-t-5">12-Apr-2020</RBS.Col>
            <RBS.Col md={2} className="d-none d-md-inline">
              <Avatar size="30" round={true} name="Sanket Deshmukh" color="#364675" />
              <Avatar size="30" round={true} name="Mahesh Chavan" color="#ba1f25" />
              <Avatar size="30" round={true} name="Umesh Patil" color="#d11fd2" />
              <Avatar size="30" round={true} name="Sanket Deshmukh" color="#364675" />
              <Avatar size="30" round={true} name="Mahesh Chavan" color="#ba1f25" />
              <Avatar size="30" round={true} name="+1" color="#9d9d9d" />
            </RBS.Col>

            <RBS.Col md={1} xs={2} className="text-right docListAction">
              <FontAwesomeIcon icon={faEllipsisV} />
            </RBS.Col>
          </RBS.Row>
          <RBS.Row className="docListItem">
            <RBS.Col md={1} xs={2} className="pad-2 text-center  pad-t-5">2</RBS.Col>
            <RBS.Col md={4} xs={8} className="fileName pad-2 pad-t-5"><FontAwesomeIcon icon={faFilePdf} className="text-danger" /> Demand Letter -20-Apr-2021
            <div className="clearfix" />
              <div className="d-block d-md-none docMobDetails"><small>Builder Document | 20-Apr-2021</small> </div>
            </RBS.Col>
            <RBS.Col md={2} className="d-none d-md-inline  pad-t-5"><RBS.Badge pill variant="primary"> Builder Document</RBS.Badge></RBS.Col>
            <RBS.Col md={2} className="d-none d-md-inline  pad-t-5">20-Apr-2021</RBS.Col>
            <RBS.Col md={2} className="d-none d-md-inline">
              <Avatar size="30" round={true} name="Sanket Deshmukh" color="#364675" />
            </RBS.Col>

            <RBS.Col md={1} xs={2} className="text-right docListAction">
              <FontAwesomeIcon icon={faEllipsisV} />
            </RBS.Col>
          </RBS.Row>

          <RBS.Row className="docListItem">
            <RBS.Col md={1} xs={2} className="pad-2 text-center  pad-t-5">3</RBS.Col>
            <RBS.Col md={4} xs={8} className="fileName pad-2 pad-t-5"><FontAwesomeIcon icon={faFilePdf} className="text-danger" /> &nbsp;Provisional Sanction Letter
            <div className="clearfix" />
              <div className="d-block d-md-none docMobDetails"><small>Bank Document | 12-Apr-2020</small> </div>
            </RBS.Col>
            <RBS.Col md={2} className="d-none d-md-inline  pad-t-5"><RBS.Badge pill variant="warning"> Bank Document</RBS.Badge></RBS.Col>
            <RBS.Col md={2} className="d-none d-md-inline  pad-t-5">12-May-2020</RBS.Col>
            <RBS.Col md={2} className="d-none d-md-inline">
              <Avatar size="30" round={true} name="Sanket Deshmukh" color="#364675" />
              <Avatar size="30" round={true} name="Mahesh Chavan" color="#ba1f25" />
            </RBS.Col>

            <RBS.Col md={1} xs={2} className="text-right docListAction">
              <FontAwesomeIcon icon={faEllipsisV} />
            </RBS.Col>
          </RBS.Row>

          <RBS.Row className="docListItem">
            <RBS.Col md={1} xs={2} className="pad-2 text-center  pad-t-5">4</RBS.Col>
            <RBS.Col md={4} xs={8} className="fileName pad-2 pad-t-5"><FontAwesomeIcon icon={faFileExcel} className="text-success" /> Expanse sheet
            <div className="clearfix" />
              <div className="d-block d-md-none docMobDetails"><small>Personal | 12-Apr-2020</small> </div>
            </RBS.Col>
            <RBS.Col md={2} className="d-none d-md-inline  pad-t-5"><RBS.Badge pill variant="danger"> Personal</RBS.Badge></RBS.Col>
            <RBS.Col md={2} className="d-none d-md-inline  pad-t-5">12-Apr-2020</RBS.Col>
            <RBS.Col md={2} className="d-none d-md-inline">

            </RBS.Col>

            <RBS.Col md={1} xs={2} className="text-right docListAction">
              <FontAwesomeIcon icon={faEllipsisV} />
            </RBS.Col>
          </RBS.Row>

          <RBS.Row className="docListItem">
            <RBS.Col md={1} xs={2} className="pad-2 text-center  pad-t-5">5</RBS.Col>
            <RBS.Col md={4} xs={8} className="fileName pad-2 pad-t-5"><FontAwesomeIcon icon={faFilePdf} className="text-danger" /> Agreement Letter
            <div className="clearfix" />
              <div className="d-block d-md-none docMobDetails"><small>Builder Document | 12-Apr-2020</small> </div>
            </RBS.Col>
            <RBS.Col md={2} className="d-none d-md-inline  pad-t-5"><RBS.Badge pill variant="primary"> Builder Document</RBS.Badge></RBS.Col>
            <RBS.Col md={2} className="d-none d-md-inline  pad-t-5">12-Apr-2020</RBS.Col>
            <RBS.Col md={2} className="d-none d-md-inline">
              <Avatar size="30" round={true} name="Sanket Deshmukh" color="#364675" />
              <Avatar size="30" round={true} name="Mahesh Chavan" color="#ba1f25" />
              <Avatar size="30" round={true} name="Umesh Patil" color="#d11fd2" />
              <Avatar size="30" round={true} name="+1" color="#9d9d9d" />
            </RBS.Col>

            <RBS.Col md={1} xs={2} className="text-right docListAction">
              <FontAwesomeIcon icon={faEllipsisV} />
            </RBS.Col>
          </RBS.Row>

          <RBS.Row className="docListItem">
            <RBS.Col md={1} xs={2} className="pad-2 text-center  pad-t-5">6</RBS.Col>
            <RBS.Col md={4} xs={8} className="fileName pad-2 pad-t-5"><FontAwesomeIcon icon={faFilePdf} className="text-danger" /> Demand Letter
            <div className="clearfix" />
              <div className="d-block d-md-none docMobDetails"><small>Builder Document | 12-Apr-2020</small> </div>
            </RBS.Col>
            <RBS.Col md={2} className="d-none d-md-inline  pad-t-5"><RBS.Badge pill variant="primary"> Builder Document</RBS.Badge></RBS.Col>
            <RBS.Col md={2} className="d-none d-md-inline  pad-t-5">12-Apr-2020</RBS.Col>
            <RBS.Col md={2} className="d-none d-md-inline">
              <Avatar size="30" round={true} name="Sanket Deshmukh" color="#364675" />
            </RBS.Col>

            <RBS.Col md={1} xs={2} className="text-right docListAction">
              <FontAwesomeIcon icon={faEllipsisV} />
            </RBS.Col>
          </RBS.Row>

          <RBS.Row className="docListItem">
            <RBS.Col md={1} xs={2} className="pad-2 text-center  pad-t-5">7</RBS.Col>
            <RBS.Col md={4} xs={8} className="fileName pad-2 pad-t-5"><FontAwesomeIcon icon={faFileImage} className="text-secondary" /> Payment Check Scan Copy
            <div className="clearfix" />
              <div className="d-block d-md-none docMobDetails"><small>Personal | 12-Apr-2020</small> </div>
            </RBS.Col>
            <RBS.Col md={2} className="d-none d-md-inline  pad-t-5"><RBS.Badge pill variant="danger">Personal</RBS.Badge></RBS.Col>
            <RBS.Col md={2} className="d-none d-md-inline  pad-t-5">12-Apr-2020</RBS.Col>
            <RBS.Col md={2} className="d-none d-md-inline">
            </RBS.Col>

            <RBS.Col md={1} xs={2} className="text-right docListAction">
              <FontAwesomeIcon icon={faEllipsisV} />
            </RBS.Col>
          </RBS.Row>

          <RBS.Row className="docListItem">
            <RBS.Col md={1} xs={2} className="pad-2 text-center  pad-t-5">8</RBS.Col>
            <RBS.Col md={4} xs={8} className="fileName pad-2 pad-t-5"><FontAwesomeIcon icon={faFileWord} className="text-success" /> Welcome Letter
            <div className="clearfix" />
              <div className="d-block d-md-none docMobDetails"><small>Flat Document | 12-Apr-2020</small> </div>
            </RBS.Col>
            <RBS.Col md={2} className="d-none d-md-inline  pad-t-5"><RBS.Badge pill variant="secondary"> Flat Document</RBS.Badge></RBS.Col>
            <RBS.Col md={2} className="d-none d-md-inline  pad-t-5">12-Apr-2020</RBS.Col>
            <RBS.Col md={2} className="d-none d-md-inline">
              <Avatar size="30" round={true} name="Sanket Deshmukh" color="#364675" />
              <Avatar size="30" round={true} name="Mahesh Chavan" color="#ba1f25" />
              <Avatar size="30" round={true} name="Umesh Patil" color="#d11fd2" />
              <Avatar size="30" round={true} name="+1" color="#9d9d9d" />
            </RBS.Col>

            <RBS.Col md={1} xs={2} className="text-right docListAction">
              <FontAwesomeIcon icon={faEllipsisV} />
            </RBS.Col>
          </RBS.Row>

        </RBS.Col>
      </RBS.Row>
    </RBS.Container>
  </div>;
}

DocumentVault.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  documentVault: makeSelectDocumentVault(),
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

export default compose(withConnect)(DocumentVault);
