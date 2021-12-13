import React from 'react';
import { Row, Col } from 'react-bootstrap';
import FormUserEdit from '../../Form/FormUserEdit';

function PrivateAccount() {
  
  return (
    <Row sm="12" md="10" >
      <Col sm="12">
        <FormUserEdit />
      </Col>
    </Row>
  )
}

export default PrivateAccount;