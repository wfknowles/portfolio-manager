import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

import LoginForm from '../components/LoginForm';
import Dashboard from '../components/Dashboard/Dashboard.js';

import Auth from '../utils/auth';

function Admin () {

  return (
    <>
      <main>
          <Row>
              <Col lg="12">
                {!Auth.loggedIn() ? (
                  <Dashboard />
                ) : (
                  <Container>
                    <Row>
                      <Col lg="12">
                        <h1>Login</h1>
                        <LoginForm />
                      </Col>
                    </Row>
                  </Container> 
                )}
              </Col>
          </Row>
      </main>
    </>
  )
}

export default Admin;