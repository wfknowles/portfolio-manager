import React from 'react';
import { Col } from 'react-bootstrap';
import DashContentDashboard from './Content/Dashboard.js';
import DashContentPortfolio from './Content/Portfolio.js';
import DashContentAccount from './Content/Account.js';
import DashContentOptions from './Content/Options.js';
import { useAppContext } from '../../utils/GlobalState/GlobalState';



function DashContent() {
  const [state, dispatch] = useAppContext();

  return (
    <Col sm="12" md="10" id="dashContent">
      {
        state.currentDash === "dashboard" && (
          <DashContentDashboard />
        )
      }
      {
        state.currentDash === "portfolio" && (
          <DashContentPortfolio />
        )
      }
      {
        state.currentDash === "account" && (
          <DashContentAccount />
        )
      }
      {
        state.currentDash === "options" && (
          <DashContentOptions />
        )
      }
    </Col>
  )
}

export default DashContent;