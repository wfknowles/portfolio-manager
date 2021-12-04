import React from 'react';
import { Row, Col, Form, Button } from 'react-bootstrap';

import FormInput from './FormInput.js';
import ReactForms from '../../utils/ReactForms';

import { useAppContext } from '../../utils/GlobalState/GlobalState';
import { SET_OPTIONS } from '../../utils/GlobalState/actions';

function FormAddOptions() {
  const [state, dispatch] = useAppContext();
  const { options } = state;

  // should this all be changed to onBlur?
  const handleChange = (e) => {

    // using ReactForms for retrieving and reducing form object
    const inputData = ReactForms.value(e);
    const reducedOptions = ReactForms.reduce({options}, inputData);

    if (reducedOptions) {
    //   dispatch({
    //     type: ADD_PROJECT,
    //     reducedProject
    //   });
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
        type="text"
        name="options.logo"
        label="Logo"
        placeholder="http://example.com..."
        change={handleChange}
      />
      <FormInput 
        klass=""
        type="textarea"
        name="options.description"
        label="Description"
        placeholder="Lorem ipsum dolar sit amet"
        change={handleChange}
      />
      
      {/* {
        error &&
          <Form.Group className="error">
              <p className="">There's been some errors...</p>
          </Form.Group>
      } */}
      
      <Button color="primary" type="submit">Submit</Button>
      {/* <Button variant="secondary" type="submit" onClick={(e) => {toggle(false)}}>Cancel</Button> */}
    </Form>
  )
}

export default FormAddOptions;