import React, { useState } from 'react';
import { Row } from 'react-bootstrap';
import DashMenu from './DashMenu.js';
import DashContent from './DashContent.js';
import './Dashboard.css';

function Dashboard () {

  return (
    <div id="dashboard">
      <DashMenu />
      <DashContent />
    </div>
  )
}

export default Dashboard;