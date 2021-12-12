import React from 'react';
import { Row, Col } from 'react-bootstrap';
import FormMessageTemplate from '../../Form/FormMessageTemplate.js';

function PrivateMessageTemplate() {
  
  return (
    <Row sm="12" md="10">
      <Col sm="12">
          <FormMessageTemplate />
      </Col>
    </Row>
  )
}

export default PrivateMessageTemplate;