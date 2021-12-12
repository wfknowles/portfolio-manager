import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

function Root () {

  return (
    <div className="page-wrapper">
      <Row>
        <Col sm="12">
          <Row>
            <Col sm="12">
              <div className="jumbotron" style={{background: `url(/assets/images/pexels-daniel-maforte-5544157-2.jpg)` }}>
                <div className="jumbotron-content">
                  
                  <div className="title order-last">
                    <h1 className="vstack">
                        <span>Howdy!</span>
                        <span>My name is Will.</span>
                    </h1>
                  </div>
                  <div className="image-wrapper">
                    <img src="/assets/images/will-knowles-portrait.jpg" alt="Portrait of Will Knowles"/>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
          <Row>
            <Col sm="12">
              <div className="bio">
                <p>
                  I’m a web developer pursuing a full-time position in Kansas City or remotely. I have 8+ years of freelance php/html/css/js development and 3+ years experience developing the full stack. Committed to learning, Im a recent graduate from University of Kansas’ Full Stack Coding Bootcamp where I gained valuable experience learning and working a MERN stack in a collaborative environment. 
                </p>
                <p>
                  My experience working as a creative, marketing, and technology professional has given me a wide array of rich experiences and numerous opportunities to hone my problem-solving abilities. Having the ability to understand clients, creatives, and technical professionals, I’ve had the opportunity to successfully lead teams tasked with achieving complex operations, projects, and goals.
                </p>
              </div>  
            </Col>
          </Row>
          <Row>
            <Col sm="12">
              <div className="tech text-center">
                <h3>
                  Technical Skills
                </h3>
                <p>
                  <em>
                    HTML, CSS, Javascript, PHP, Ruby, MySQL, PostgreSQL, MongoDB, jQuery, Bootstrap, Foundation, React, GraphQL, Sequelize, Mongoose, Ruby on Rails, Node.js, Git, AWS, Heroku, Webpack, PWAs, Wordpress, and Adobe Creative Suite
                  </em>
                </p>
              </div>
            </Col>
          </Row>
          <Row>
            <Col sm="12">
              <div className="links text-center">
                <span>
                  <a href="https://github.com/wfknowles" target="_blank" rel="noreferrer">Github</a>
                </span>
                <span>
                  <a href="https://linkedin.com/in/wfknowles" target="_blank" rel="noreferrer">LinkedIn</a>
                </span>
                <span>
                  <a href="/assets/willknowles-web-developer.pdf" target="_blank" rel="noreferrer">Resume</a>
                </span>
              </div>
            </Col>
          </Row>
        </Col>
      </Row>
    </div>
  )
}

export default Root;