import React from "react";
import { Row, Col } from 'react-bootstrap';
import './style.css';

function Footer() {
  const getYear = () => {
    return new Date().getFullYear();
  }

  return (
    <footer className="">
      <Row>
        <Col>
          <p>&copy; Copyright {getYear}</p>
        </Col>
      </Row>
    </footer>
  )
}

export default Footer;