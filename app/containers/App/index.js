/* eslint-disable no-unused-vars */
/* eslint-disable no-debugger */
/**
 *
 * App.js
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 *
 */

import React from 'react';

import styled from 'styled-components';
import { Switch, Route } from 'react-router-dom';

import Header from 'components/ProjectHeader/Loadable';
import SiteHeader from 'components/SiteHeader';

import Footer from 'components/ProjectFooter';

import LandingPage from 'containers/LandingPage';
import Login from 'containers/Login';
import Profile from 'containers/Profile';
import Contacts from 'containers/MyContacts';
import DocumentVault from 'containers/DocumentVault';

import BusinessSearch from 'containers/BusinessSearch';
import PaymentHistory from 'containers/PaymentHistory';

import FlatProfile from 'containers/FlatProfile';
import Visits from 'containers/Visits';
import UserDashboard from 'containers/UserDashboard';
import NotFoundPage from 'containers/NotFoundPage/Loadable';

import SiteDashboard from 'containers/SiteDashboard';
import SitePaymentHistory from 'containers/SitePaymentHistory';
import FlatOwner from 'containers/FlatOwner';
import SiteVisits from 'containers/SiteVisits';

import GlobalStyle from '../../global-styles';


const secHeight = (window.location.pathname.toLocaleLowerCase() !== '/login') ? null : '100%';

const standAlonePages = ["/login"];
const sitePages = ["/sitedashboard","/payments","/flatowner"];
const ContentSec = styled.div`  
  height:100%;
`;

export default function App() {
  const pageContent =
    sitePages.indexOf(window.location.pathname.toLowerCase()) === -1 ? (
      <div style={{ height: (standAlonePages.indexOf(window.location.pathname.toLowerCase()) !== -1) ? "100%" : 'auto' }}>
        {(standAlonePages.indexOf(window.location.pathname.toLowerCase()) !== -1) ? null : <Header />}
        {/* <Header /> */}
        <div className="clearfix" />
        <ContentSec>
          <Switch>
            <Route exact path="/" component={LandingPage} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/profile" component={Profile} />
            <Route exact path="/flatprofile" component={FlatProfile} />
            <Route exact path="/contacts" component={Contacts} />
            <Route exact path="/localbusiness" component={BusinessSearch} />
            <Route exact path="/documentvault" component={DocumentVault} />
            <Route exact path="/payment" component={PaymentHistory} />
            <Route exact path="/visits" component={Visits} />
            <Route exact path="/dashboard" component={UserDashboard} />
            <Route component={NotFoundPage} />
          </Switch>

          <div className="clearfix" />
        </ContentSec>
        <div className="clearfix" />
        {(standAlonePages.indexOf(window.location.pathname.toLowerCase()) !== -1) ? null : <Footer />}
        {/* <Footer /> */}
        <div className="clearfix" />
        <GlobalStyle />
        <div className="clearfix" />
      </div >
    ) :
      (
        <div style={{ height: (standAlonePages.indexOf(window.location.pathname.toLowerCase()) !== -1) ? "100%" : 'auto' }}>
          {(standAlonePages.indexOf(window.location.pathname.toLowerCase()) !== -1) ? null : <SiteHeader />}
          {/* <Header /> */}
          <div className="clearfix" />
          <ContentSec>
            <Switch>
              <Route exact path="/" component={LandingPage} />
              <Route exact path="/sitedashboard" component={SiteDashboard} />
              <Route exact path="/flatowner" component={FlatOwner} />
              <Route exact path="/payments" component={SitePaymentHistory} />
              <Route exact path="/visits" component={SiteVisits} />

              <Route component={NotFoundPage} />
            </Switch>

            <div className="clearfix" />
          </ContentSec>
          <div className="clearfix" />
          {(standAlonePages.indexOf(window.location.pathname.toLowerCase()) !== -1) ? null : <Footer />}
          {/* <Footer /> */}
          <div className="clearfix" />
          <GlobalStyle />
          <div className="clearfix" />
        </div >
      );


  return pageContent;
}
