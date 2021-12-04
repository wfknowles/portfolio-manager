import React, { useState } from 'react';
import { Row, Col, Button } from 'react-bootstrap';
import FormAddProject from '../Form/FormAddProject.js';

function DashContentPortfolio() {

  const [form, toggleForm] = useState(false);
  
  return (
    <Row sm="12" md="10" id="dashContentPortfolio">
      <Col sm="12">
        <Row>
          <Col sm="12">
            <h1>Portfolio</h1>
            {
              !form && (
                <Button className="add-item" variant="primary" type="submit" onClick={toggleForm}>Add Project</Button>
              )
            }
            
          </Col>
        </Row>
        <Row>
          <Col sm="12">
            {
              form && (
                <>
                <FormAddProject toggle={toggleForm}/>
                </>
              )
            }
          </Col>
        </Row>
        <Row>
          <Col sm="12">
            Projects go here...
          </Col>
        </Row>
        
      </Col>
    </Row>
  )
}

export default DashContentPortfolio;