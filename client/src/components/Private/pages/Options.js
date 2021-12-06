import React from 'react';
import { Row, Col, Button } from 'react-bootstrap';
import FormAddOptions from '../../Form/FormAddOptions.js';

function PrivateOptions() {
  
  return (
    <Row sm="12" md="10" id="privateOptions">
      <Col sm="12">
          <FormAddOptions />
      </Col>
    </Row>
  )
}

export default PrivateOptions;