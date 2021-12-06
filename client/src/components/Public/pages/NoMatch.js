import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';


function NoMatch () {
  return (
    <main>
        <Container>
        <Row>
            <Col lg="12">
            <h1>404 Page Not Found</h1>
            </Col>
        </Row>
        </Container>
    </main>
  )
}

export default NoMatch;