import React, { useState } from 'react';
import { Row } from 'react-bootstrap';
import DashMenu from './Menu.js';
import DashContent from './Content.js';
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