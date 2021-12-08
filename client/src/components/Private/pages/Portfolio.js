import React, { useState } from 'react';
import { Row, Col, Button } from 'react-bootstrap';
import FormAddProject from '../../Form/FormAddProject';
import ProjectCard from '../partials/ProjectCard';
import { dummyProjectData } from '../../../utils/staticData';

function PrivatePortfolio() {

  const [form, toggleForm] = useState(false);
  
  return (
    <Row sm="12" md="10">
      <Col sm="12">

        {
          !form && (
            <>
            <Row className="dash-actions">
              <Col sm="12">
                <Button className="" variant="primary" type="submit" onClick={toggleForm}>Add Project</Button>
              </Col>
            </Row>
            <Row>
                {
                  dummyProjectData.map((project) => (

                    <ProjectCard key={project._id} project={project} />

                  ))
                }
            </Row>
            </>
          )
        }
        {
          form && (
            <Row>
              <Col sm="12">
                <FormAddProject toggle={toggleForm}/>
              </Col>
            </Row>
          )
        }
        
      </Col>
    </Row>
  )
}

export default PrivatePortfolio;