import React, { useEffect } from 'react';
import { Row, Col, Form, Button } from 'react-bootstrap';

import FormInput from './FormInput.js';
import ReactForms from '../../utils/ReactForms/ReactForms';
import FormCheckboxArray from './FormCheckboxArray';

import { useMutation } from '@apollo/client';
import { useAppContext } from '../../utils/GlobalState/GlobalState';
import { SET_OPTIONS } from '../../utils/GlobalState/actions';
import { ADD_OPTIONS } from '../../utils/GraphQL/mutations';
import { techOptions } from '../../utils/staticData.js';

import './Form.css';

function FormAddOptions() {
  const [state, dispatch] = useAppContext();
  const { options } = state;  

  // should this all be changed to onBlur?
  const handleChange = (e) => {

    // using ReactForms for retrieving and reducing form object
    const inputData = ReactForms.value(e);
    const reducedOptions = ReactForms.reduce({options}, inputData)

    if (reducedOptions) {
      dispatch({
        type: SET_OPTIONS,
        reducedOptions
      });
    }
  }


  const handleSubmit = (e) => {
    e.preventDefault();
    // dispatch({
    //   type: ADD_PROJECT,
    //   project: {...state}
    // });
  }
  
  return (
    <>
      <Row className="pb-3">
        <Col>
          <Button variant="primary" type="submit">Update Options</Button>
        </Col>
      </Row>
      <Row>
        <Col>
        <Form className="" onSubmit={handleSubmit}>
          
          <FormInput 
            klass=""
            type="text"
            name="options.title"
            label="Title"
            placeholder="Site Title..."
            change={handleChange}
          />
          <FormInput 
            klass=""
            type="media"
            name="options.brandImageUrl"
            label="Brand"
            placeholder="http://example.com..."
            change={handleChange}
          />
          <FormInput 
            klass=""
            type="media"
            name="options.featureImageUrl"
            label="Feature Image"
            placeholder="http://example.com..."
            change={handleChange}
          />
          <FormInput 
            klass=""
            type="textarea"
            name="options.bio"
            label="Description"
            placeholder="Lorem ipsum dolar sit amet"
            change={handleChange}
          />

          <FormCheckboxArray data={techOptions} name="options.skills" klass="" change={handleChange}/>
          
          {/* {
            error &&
              <Form.Group className="error">
                  <p className="">There's been some errors...</p>
              </Form.Group>
          } */}
          
          <Button variant="primary" type="submit">Update Options</Button>
        </Form>
        </Col>
      </Row>
    </>
    
  )
}

export default FormAddOptions;