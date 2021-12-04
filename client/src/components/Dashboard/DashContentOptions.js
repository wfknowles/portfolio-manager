import React from 'react';
import { Row, Col, Button } from 'react-bootstrap';
import FormAddOptions from '../Form/FormAddOptions.js';

function DashContentOptions() {
  
  return (
    <Row sm="12" md="10" id="dashContentPortfolio">
      <Col sm="12">
        <Row>
          <Col sm="12">
            <h1>Options</h1>            
          </Col>
        </Row>
        <Row>
          <Col sm="12">
              <FormAddOptions />
          </Col>
        </Row>        
      </Col>
    </Row>
  )
}

export default DashContentOptions;