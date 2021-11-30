import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import RegistrationForm from '../components/RegistrationForm';


function Register () {
  return (
    <main>
        <Container>
        <Row>
            <Col lg="12">
                <h1>Register</h1>
                <RegistrationForm />
            </Col>
        </Row>
        </Container>
    </main>
  )
}

export default Register;