import React from 'react';
import { Row, Col, Button } from 'react-bootstrap';
import FormAddOptions from '../Form/FormAddOptions.js';

function DashContentOptions() {
  
  return (
    <Row sm="12" md="10" id="dashContentOptions">
      <Col sm="12">
          <FormAddOptions />
      </Col>
    </Row>
  )
}

export default DashContentOptions;