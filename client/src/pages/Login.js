import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import LoginForm from '../components/LoginForm';


function Login () {
  return (
    <main>
        <Container>
        <Row>
            <Col lg="12">
            <h1>Login</h1>
            <LoginForm />
            </Col>
        </Row>
        </Container>
    </main>
  )
}

export default Login;