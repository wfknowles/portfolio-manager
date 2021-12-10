import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

function Root () {

  return (
    <Container>
      <Row>
        <Col sm="12">
          <Row>
            <Col sm="12" className="jumbotron" style={{background: `url(/assets/images/pexels-daniel-maforte-5544157-2.jpg)` }}>
            </Col>
          </Row>
          <Row className="image">
            <Col sm="12" className="image-wrapper">
              <img className="portrait" src="/assets/images/will-knowles-portrait.jpg" alt="Portrait of Will Knowles"/>
            </Col>
          </Row>
          <Row className="content">
            <Col sm="12">
              <p className="p-header">
                <h1>
                  Howdy!
                  <br></br>
                  My name is Will.
                </h1>
                <p>
                  I’m a web developer pursuing a full-time position in Kansas City or remotely. I have 10+ years of off and on freelance html/css/js development and 3+ years experience developing a full stack. Committed to learning, Im a recent graduate from University of Kansas’ Full Stack Coding Bootcamp where I gained valuable experience learning and working with a MERN stack in a collaborative environment. 
                </p>
                <p>
                  My experience working as a creative, marketing, and technology professional has given me a wide array of rich experiences and numerous opportunities to hone my problem-solving abilities. Having the ability to understand clients, creatives, and technical professionals, I’ve had the opportunity to successfully lead teams tasked with achieving complex operations, projects, and goals.
                </p>
              </p>
              <p className="p-header text-center">
                <h3>
                  Technical Skills
                </h3>
                <em>
                HTML, CSS, Javascript, PHP, Ruby, MySQL, PostgreSQL, MongoDB, jQuery, Bootstrap, Foundation, React, GraphQL, Sequelize, Mongoose, Ruby on Rails, Node.js, Git, AWS, Heroku, Webpack, PWAs, Wordpress, and Adobe Creative Suite
                </em>
              </p>
              <p className="links text-center">
                <span>
                  <a href="https://github.com/wfknowles">Github</a>
                </span>
                <span>
                  <a href="https://linkedin.com/in/wfknowles">LinkedIn</a>
                </span>
                <span>
                  <a href="https://linkedin.com/in/wfknowles">Resume</a>
                </span>
              </p>
            </Col>
          </Row>

          
        </Col>
      </Row>
    </Container>
  )
}

export default Root;