import React from 'react';
import { Row, Col, Form, Button } from 'react-bootstrap';

import FormInput from './FormInput.js';
import FormCheckboxArray from './FormCheckboxArray';
import ReactForms from '../../utils/ReactForms/ReactForms';

import { useAppContext } from '../../utils/GlobalState/GlobalState';
import { ADD_PROJECT } from '../../utils/GlobalState/actions';

function FormAddProject({toggle}) {
  const [state, dispatch] = useAppContext();
  const { tech, project } = state;
  const error = false;

  // should this all be changed to onBlur?
  const handleChange = (e) => {

    // using ReactForms for retrieving and reducing form object
    const inputData = ReactForms.value(e);
    const reducedProject = ReactForms.reduce({project}, inputData);

    if (reducedProject) {
      dispatch({
        type: ADD_PROJECT,
        reducedProject
      });
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch({
      type: ADD_PROJECT,
      project: {...state}
    });
  }
  
  return (
    <Form className="" onSubmit={handleSubmit}>
      <h2>Add Project</h2>
      <FormInput 
        klass=""
        type="text"
        name="project.title"
        label="Title"
        placeholder="Project Title..."
        change={handleChange}
      />
      <FormInput 
        klass=""
        type="text"
        name="project.imageUrl"
        label="Featured Image"
        placeholder="http://example.com..."
        change={handleChange}
      />
      <FormInput 
        klass=""
        type="textarea"
        name="project.description"
        label="Description"
        placeholder="Lorem ipsum dolar sit amet"
        change={handleChange}
      />

      <FormCheckboxArray data={tech} name="options.skills" klass="" change={handleChange}/>
      
      {/* {
        error &&
          <Form.Group className="error">
              <p className="">There's been some errors...</p>
          </Form.Group>
      } */}
      
      <Button color="primary" type="submit">Add Project</Button>
      <Button className="ms-3" variant="secondary" type="submit" onClick={(e) => {toggle(false)}}>Cancel</Button>
    </Form>
  )
}

export default FormAddProject;