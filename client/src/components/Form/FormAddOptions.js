import React, { useEffect, useState } from 'react';
import { Row, Col, Form, Button } from 'react-bootstrap';

import { useMutation, useQuery } from '@apollo/client';
import { SET_OPTIONS } from '../../utils/GlobalState/actions';
import { QUERY_OPTIONS } from '../../utils/GraphQL/queries';
import { UPDATE_OPTIONS } from '../../utils/GraphQL/mutations';
import { techOptions } from '../../utils/staticData.js';

import { FormInput, FormResponse, FormCheckboxGroup, reduceStates } from '../../utils/ReactForms';
import LocalStorage from '../../utils/LocalStorage';

// import './Form.css';

function FormAddOptions() {

  const [ formData, setFormData ] = useState({});
  // const { options } = formData;
  const { loading: queryLoading, data: queryData, error: queryError } = useQuery(QUERY_OPTIONS);
  const [ updateOptions, { error: mutationError } ] = useMutation(UPDATE_OPTIONS);  

  useEffect(() => {
    // sync queryData with formData
    if ( queryData ) {
      console.log({ ...formData, ...queryData});

      // setFormData({
      //   ...formData,
      //   ...queryData
      // });

    }
  }, [ queryData ])

  const handleChange = (e) => {
    const reducedOptions = reduceStates(e, formData); // reduced by ReactForms
    if (reducedOptions) {
      setFormData({
        options: reducedOptions.options
      });
    }
  }


  const handleSubmit = async (e) => {
    e.preventDefault();
    let options = formData.options;

    if (formData.options.skills === null) {
      options = {...formData.options, skills: {}};
    }

    console.log({ options })
    // const mutationResponse = await updateOptions({
    //   variables: { 
    //     options
    //   }
    // });

  }
  
  if (queryLoading) return null;
  if (queryError) return `Error! ${queryError}`;

  return (
    <>
      {
        ( formData.options ) && (
          <Row>
            <Col>
            <Form className="" onSubmit={handleSubmit}>
              {/* <input type="text" value={ formData.options.title || undefined } /> */}
              <FormInput 
                klass=""
                type="text"
                name="options.title"
                value={ formData.options.title }
                label="Title"
                placeholder="Site Title..."
                change={handleChange}
              />
              <FormInput 
                klass=""
                type="media"
                name="options.brandImageUrl"
                value={ formData.options.brandImageUrl }
                label="Brand"
                placeholder="http://example.com..."
                change={handleChange}
              />
              <FormInput 
                klass=""
                type="media"
                name="options.featureImageUrl"
                value={ formData.options.featureImageUrl }
                label="Feature Image"
                placeholder="http://example.com..."
                change={handleChange}
              />
              <FormInput 
                klass=""
                type="textarea"
                name="options.bio"
                value={ formData.options.bio }
                label="Description"
                placeholder="Lorem ipsum dolar sit amet"
                change={handleChange}
              />

              <FormCheckboxGroup options={techOptions} name="options.skills" onChange={handleChange}/>
              
              {
                mutationError &&
                  <Form.Group className="error">
                      <p className="">There's been some errors...</p>
                  </Form.Group>
              }
              
              <Button variant="primary" type="submit">Update Options</Button>
            </Form>
            </Col>
          </Row>
        )
      }
      
    </>
    
  )
}

export default FormAddOptions;