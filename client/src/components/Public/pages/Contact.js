import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import FormContact from '../../Form/FormContact.js';

function Contact () {

  return (
    <Container>
      <Row>
        <Col sm="12">
          <FormContact />
        </Col>
      </Row>
    </Container>
  )
}

export default Contact;