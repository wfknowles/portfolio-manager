import React from 'react';
// import { Col } from 'react-bootstrap';
import DashContentHeader from './DashContentHeader.js';
import DashContentDashboard from './DashContentDashboard.js';
import DashContentPortfolio from './DashContentPortfolio.js';
import DashContentAccount from './DashContentAccount.js';
import DashContentOptions from './DashContentOptions.js';
import { useAppContext } from '../../utils/GlobalState/GlobalState';



function DashContent() {
  const [state, dispatch] = useAppContext();

  return (
    <div id="dashContent">
      <DashContentHeader />
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
    </div>
  )
}

export default DashContent;