import React, { useState } from 'react';
import { Row, Col, Button } from 'react-bootstrap';
import FormAddProject from '../Form/FormAddProject.js';

function DashContentPortfolio() {

  const [form, toggleForm] = useState(false);
  
  return (
    <Row sm="12" md="10" id="dashContentPortfolio" className="pt-3">
      <Col sm="12">
        {
          !form && (
            <Row>
              <Col sm="12">
                <Button className="" variant="primary" type="submit" onClick={toggleForm}>Add Project</Button>
              </Col>
            </Row>
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
          
        <Row>
          <Col sm="12">
            {/* Projects go here... */}
          </Col>
        </Row>
        
      </Col>
    </Row>
  )
}

export default DashContentPortfolio;