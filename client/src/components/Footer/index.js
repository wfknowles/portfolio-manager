import React from "react";
import { Row, Col } from 'react-bootstrap';
import './style.css';

function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="">
      <Row>
        <Col>
          <p className="text-center">&copy; Copyright {year}</p>
        </Col>
      </Row>
    </footer>
  )
}

export default Footer;