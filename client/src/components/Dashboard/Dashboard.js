import React, { useState } from 'react';
import { Row } from 'react-bootstrap';
import DashMenu from './DashMenu.js';
import DashContent from './DashContent.js';
import './Dashboard.css';

function Dashboard () {

  return (
    <Row id="dashboard">
      <DashMenu />
      <DashContent />
    </Row>
  )
}

export default Dashboard;