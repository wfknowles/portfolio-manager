import React from 'react';
import './style.css';
import { Container, Image, Button, Row, Col } from 'react-bootstrap';


function Home () {
  return (
    <Container>
      <Row>
        <Col className="min-height">
          <Image className="main-logo" src="./assets/images/happycheckin-full3.png" fluid></Image>
          <Button className="home-start-btn" href= "./login">Get Started!</Button>
          <h2>1. SIGN UP     |      2. SET UP YOUR OPTIONS     |     3. WE CHECK YOU IN!</h2>
          </Col>
      </Row>
    </Container>
  )
}

export default Home;