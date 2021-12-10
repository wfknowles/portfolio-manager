import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

function Footer () {

  const currentYear = () => {
    const date = new Date();
    return date.getFullYear();
  }

  return (

    <Container>
      <Row>
        <Col sm="12" className="text-center text-muted">
          ©️ {currentYear()}
        </Col>
      </Row>
    </Container>
  )
}

export default Footer;