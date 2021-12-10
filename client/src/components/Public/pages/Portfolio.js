import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

function Portfolio () {

  const projects = [
    {
      title: "Portfolio Manager",
      excerpt: "MERN Based Portfolio Content Manager",
      featureImageURL: "/assets/images/portfolio-manager.png",
      github: "https://github.com/wfknowles/express-cms"
    },
    {
      title: "Express CMS",
      excerpt: "Node, Express, MySQL, and Template Based Content Management System",
      featureImageURL: "/assets/images/express-cms.png",
      github: "https://github.com/wfknowles/express-cms"
    },
    {
      title: "Happy Check-in",
      excerpt: "MERN Based Hotel Check-In Management System.",
      featureImageURL: "/assets/images/happy-checkin.png",
      github: "https://github.com/bgswilde/Happy-Checkin"
    },
    {
      title: "Pokemon Trading Post",
      excerpt: "Node, Express, MySQL, and Handlebars Based Trading Marketplace",
      featureImageURL: "/assets/images/pokemon-trading-post.png",
      github: "https://github.com/ddcrane/pokemon-trading-post"
    },
    {
      title: "React Forms",
      excerpt: "Utility Class for Retrieving and Reducing Form Input Values as an Object or Nested Object.",
      featureImageURL: "/assets/images/react-forms.png",
      github: "https://github.com/wfknowles/react-forms"
    },
    {
      title: "Ecommerce API",
      excerpt: "Node, Express, Sequelize, and MySQL based API.",
      featureImageURL: "/assets/images/portfolio-manager.png",
      github: "https://github.com/wfknowles/ecommerce"
    },
    {
      title: "Weather Dashboard",
      excerpt: "HTML, CSS, JS, and OpenWeather API.",
      featureImageURL: "/assets/images/weather-dashboard.png",
      github: "https://github.com/wfknowles/weather-dashboard"
    }
  ]

  return (
    <Container>
      <Row className="d-flex justify-content-center">
        {
          projects.map((project) => (
            <Col sm="12" md="6" lg="4" className="card-wrapper" key={project.github}>
              <div className="card" style={{background: `url(${project.featureImageURL})` }}>
                <a className="card-content" href={project.github} target="_blank" rel="noreferrer">
                  <h2>{project.title}</h2>
                  <p>
                    {project.excerpt}
                  </p>
                </a>
              </div>          
            </Col>
          ))
        }
        
      </Row>
    </Container>
  )
}

export default Portfolio;