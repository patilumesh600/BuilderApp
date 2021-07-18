/**
 *
 * ProjectHeader
 *
 */

import React from 'react';
// import PropTypes from 'prop-types';
// import styled from 'styled-components';
import * as RBS from 'react-bootstrap';
import { faBuilding, faHome, faWallet, faFolderOpen, faSignOutAlt, faUsers } from '@fortawesome/free-solid-svg-icons';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './headerStyle.css';

function ProjectHeader() {
  return (
    <div id="hdrContainer">
      <RBS.Navbar className="hdrShadow" collapseOnSelect expand="lg" bg="light">
        <RBS.Navbar.Brand href="/dashboard" className="brandIcon"><div className="brandIcon"><FontAwesomeIcon icon={faBuilding} /> | CuBu </div></RBS.Navbar.Brand>
        <RBS.Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <RBS.Navbar.Collapse id="responsive-navbar-nav" className="justify-content-end" >
          <RBS.Nav>
            <RBS.Nav.Link href="/dashboard" className="helpIcon"><FontAwesomeIcon icon={faHome} /> Home</RBS.Nav.Link>
            <RBS.Nav.Link href="/payment" className="helpIcon"><FontAwesomeIcon icon={faWallet} /> Transactions</RBS.Nav.Link>
            <RBS.Nav.Link href="/documentVault" className="helpIcon"><FontAwesomeIcon icon={faFolderOpen} /> Documents</RBS.Nav.Link>
            <RBS.Nav.Link href="/contacts" className="helpIcon"><FontAwesomeIcon icon={faUsers} /> Contacts</RBS.Nav.Link>
            <RBS.Nav.Link href="/flatProfile" className="helpIcon"><FontAwesomeIcon icon={faBuilding} /> Flat Profile</RBS.Nav.Link>
            <RBS.Nav.Link eventKey={2} href="#logout" className="helpIcon">
              <FontAwesomeIcon icon={faSignOutAlt} /> Logout
            </RBS.Nav.Link>
          </RBS.Nav>

        </RBS.Navbar.Collapse>

      </RBS.Navbar>
      {/* <RBS.Col md={12} style={{ minHeight: '35px',background: '#e6e6e6' }} >dsdjsdkshkdhsk hd kjsh jdkh</RBS.Col> */}
    </div>
  );
}

ProjectHeader.propTypes = {};

export default ProjectHeader;
