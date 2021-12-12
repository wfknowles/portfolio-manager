import React, { useState, useRef } from 'react';
import { Row, Col, Form } from 'react-bootstrap';
import { useQuery } from '@apollo/client';
import { QUERY_MESSAGE_TEMPLATES } from '../../utils/GraphQL/queries';

import FormInput from './FormInput.js';
import ReactForms from '../../utils/ReactForms';
import emailjs from 'emailjs-com';
import './Form.css';

function FormContact() {
  const form = useRef();
  const [ formState, setFormState] = useState({});
  const { loading: queryLoading, data: queryData, error: queryError } = useQuery(QUERY_MESSAGE_TEMPLATES);
  const messageTemplates = queryData?.messageTemplates;

  const handleChange = (e) => {

    const inputData = ReactForms.value(e);
    const reducedState = ReactForms.reduce(formState, inputData);

    setFormState({
      ...formState,
      ...reducedState
    });

  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formState.hidden) {
      // EmailJS requires passing the html form element into sendForm
      emailjs.sendForm(messageTemplates[0].serviceID, messageTemplates[0].templateID, form.current, messageTemplates[0].userID)
        .then((success) => {
            // display success message
            console.log({ success });
        }, (error) => {
            // display error message
            console.log({ error });
        });
    }
    
  };
  
  if (queryLoading) return null;
  if (queryError) return `Error! ${queryError}`;

  return (

    <Row>
      <Col>
        <Form ref={form} className="" onSubmit={handleSubmit}>
          <FormInput 
            type="text"
            name="user_name"
            label="Name"
          />
          <FormInput 
            type="email"
            name="user_email"
            label="Email"
          />
          <FormInput 
            type="text"
            name="subject"
            label="Subject"
          />
          <FormInput 
            type="textarea"
            name="message"
            label="Message"
          />
          <FormInput 
            type="hidden"
            name="safety"
            onChange={handleChange}
          />
          <FormInput 
            type="submit"
            label="Send Message"
            variant="primary"
          />
        </Form>
      </Col>
    </Row>

  )
}

export default FormContact;