import React, { useState } from 'react';
import { Row, Col, Form } from 'react-bootstrap';
import { useMutation, useQuery } from '@apollo/client';
import { ADD_MESSAGE_TEMPLATE, UPDATE_MESSAGE_TEMPLATE } from '../../utils/GraphQL/mutations';
import { QUERY_MESSAGE_TEMPLATE } from '../../utils/GraphQL/queries';
import { FormInput, FormResponse, reduceStates } from '../../utils/ReactForms';


function FormMessageTemplate() {

  const [ formState, setFormState] = useState({messageTemplate: {}});
  const { loading: queryLoading, data: queryData, error: queryError } = useQuery(QUERY_MESSAGE_TEMPLATE);
  const [ addMessageTemplate, { error: addError } ] = useMutation(ADD_MESSAGE_TEMPLATE);
  const [ updateMessageTemplate, { error: updateError } ] = useMutation(UPDATE_MESSAGE_TEMPLATE);
  const messageTemplate = queryData?.messageTemplate;

  const handleChange = (e) => {

    const reducedMessageTemplate = reduceStates(e, formState);

    setFormState({
      ...formState,
      ...reducedMessageTemplate
    });

  };

  const handleSubmit = async (e) => {

    e.preventDefault();

    // if messageTemplate has a valid mongo id
    if ( messageTemplate._id && messageTemplate._id.length === 24 ) {

      // Update
      updateMessageTemplate({
        variables: {
          messageTemplate: { ...messageTemplate, ...formState.messageTemplate}
        }
      });

    } else {

      // Create
      addMessageTemplate({
        variables: {
          ...formState
        }
      });

    }
    
  };

  if (queryLoading) return null;
  if (queryError) return `Error! ${queryError}`;

  return (
    <Row>
      <Col>
        <Form className="" onSubmit={handleSubmit}>
          <a href="https://dashboard.emailjs.com/sign-up" target="_blank" rel="noreferrer">Create an EmailJS account</a>
          <br></br>
          <a href="https://dashboard.emailjs.com/admin" target="_blank" rel="noreferrer">Don't know where to find this?</a>
          

          <FormInput 
            klass=""
            type="text"
            name="messageTemplate.templateID"
            defaultValue={ messageTemplate.templateID }
            label="EmailJS Template ID"
            placeholder="template_..."
            onChange={handleChange}
          />
          <FormInput 
            klass=""
            type="text"
            name="messageTemplate.serviceID"
            defaultValue={ messageTemplate.serviceID }
            label="EmailJS Service ID"
            placeholder="service_..."
            onChange={handleChange}
          />
          <FormInput 
            klass=""
            type="text"
            name="messageTemplate.userID"
            defaultValue={ messageTemplate.userID }
            label="EmailJS User ID"
            placeholder="user_..."
            onChange={handleChange}
          />
          <FormInput 
            klass=""
            type="text"
            name="messageTemplate.accessToken"
            defaultValue={ messageTemplate.accessToken }
            label="EmailJS Access Token"
            placeholder="a80e4d7..."
            onChange={handleChange}
          />

          {
            ( addError || updateError ) &&
              <Form.Group className="error">
                  <p className="">{`Error: ${addError}${updateError}`}</p>
              </Form.Group>
          }
          <FormInput 
            type="submit"
            label="Add EmailJS Template"
            variant="primary"
          />
        </Form>
      </Col>
    </Row>
  );
}

export default FormMessageTemplate;