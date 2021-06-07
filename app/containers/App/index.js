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
import Footer from 'components/ProjectFooter';

import LandingPage from 'containers/LandingPage';
import Login from 'containers/Login';
import Profile from 'containers/Profile';
import Contacts from 'containers/MyContacts';
import DocumentVault from 'containers/DocumentVault';

import BusinessSearch from 'containers/BusinessSearch';
import PaymentHistory from 'containers/PaymentHistory';

import FlatProfile from 'containers/FlatProfile';
import UserDashboard from 'containers/UserDashboard';
import NotFoundPage from 'containers/NotFoundPage/Loadable';

import GlobalStyle from '../../global-styles';



const ContentSec = styled.div`  
  min-height:100%;
`;

export default function App() {
  return (
    <div style={{ height: "100%" }}>
      <Header />
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
          <Route exact path="/dashboard" component={UserDashboard} />
          <Route component={NotFoundPage} />
        </Switch>


      </ContentSec>
      <div className="clearfix" />
      <Footer />
      <GlobalStyle />

    </div>
  );
}
