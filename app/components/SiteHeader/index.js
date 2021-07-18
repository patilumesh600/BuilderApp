
import React from 'react';
// import PropTypes from 'prop-types';
// import styled from 'styled-components';
import * as RBS from 'react-bootstrap';
import { faBuilding, faHome, faFolderOpen, faSignOutAlt, faUsers } from '@fortawesome/free-solid-svg-icons';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './siteHeader.css';

function SiteHeader() {
  return (
    <div id="siteHdrContainer">
      <RBS.Navbar className="hdrShadow" collapseOnSelect expand="lg" bg="light" variant="light">
        <RBS.Navbar.Brand href="/dashboard" className="brandIcon"><div className="brandIcon"><FontAwesomeIcon icon={faBuilding} /> | CuBu </div></RBS.Navbar.Brand>
        <RBS.Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <RBS.Navbar.Collapse id="responsive-navbar-nav" className="justify-content-end" >
          <RBS.Nav>
            <RBS.Nav.Link href="/dashboard" className="helpIcon"><FontAwesomeIcon icon={faHome} /> Home</RBS.Nav.Link>
            <RBS.Nav.Link href="/flatProfile" className="helpIcon"><FontAwesomeIcon icon={faBuilding} /> Flat Profile</RBS.Nav.Link>
            <RBS.Nav.Link href="/documentVault" className="helpIcon"><FontAwesomeIcon icon={faFolderOpen} /> Documents</RBS.Nav.Link>
            <RBS.Nav.Link href="/contacts" className="helpIcon"><FontAwesomeIcon icon={faUsers} /> Contacts</RBS.Nav.Link>
            <RBS.Nav.Link eventKey={2} href="#logout" className="helpIcon">
              <FontAwesomeIcon icon={faSignOutAlt} /> Logout
            </RBS.Nav.Link>
          </RBS.Nav>

        </RBS.Navbar.Collapse>

      </RBS.Navbar>
      {/* <RBS.Col md={12} style={{ minHeight: '35px',background: '#e6e6e6' }} >dsdjsdkshkdhsk hd kjsh jdkh</RBS.Col> */}

      {/* <RBS.Offcanvas show={show} onHide={handleClose}>
        <RBS.Offcanvas.Header closeButton>
          <RBS.Offcanvas.Title>Offcanvas</RBS.Offcanvas.Title>
        </RBS.Offcanvas.Header>
        <RBS.Offcanvas.Body>
          Some text as placeholder. In real life you can have the elements you
          have chosen. Like, text, images, lists, etc.
        </RBS.Offcanvas.Body>
      </RBS.Offcanvas> */}
    </div>
  );
}

SiteHeader.propTypes = {};

export default SiteHeader;
