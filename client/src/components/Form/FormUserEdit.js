import React, { useState } from 'react';
import { Row, Col, Form, Button } from 'react-bootstrap';
import { useMutation, useQuery } from '@apollo/client';
import { UPDATE_ME } from '../../utils/GraphQL/mutations';
import { QUERY_ME } from '../../utils/GraphQL/queries';
import { FormInput, FormResponse, reduceStates } from '../../utils/ReactForms';


function FormUserEdit() {

  const [ formState, setFormState] = useState({user: {}});
  const [ changePassword, toggleChangePassword ] = useState(false);
  const { loading: queryLoading, data: queryData, error: queryError } = useQuery(QUERY_ME);
  const [ updateMe, { error: updateError } ] = useMutation(UPDATE_ME);
  const me = queryData?.me;

  useState(() => {
    console.log(queryData?.me);
  }, [queryData, queryData?.me]);

  const handleChange = (e) => {

    const incomingState = reduceStates(e, formState);

    setFormState({
      ...formState,
      ...incomingState
    });

  };

  const handleSubmit = async (e) => {

    e.preventDefault();
    console.log({me}, formState.user);
    updateMe({
      variables: {
        user: { ...me, ...formState.user}
      }
    });

  };

  if (queryLoading) return null;
  if (queryError) return `Error! ${queryError}`;

  return (
    <Row>
      <Col>
        <Form className="" onSubmit={handleSubmit}>
          <FormInput 
            type="text"
            name="user.firstName"
            defaultValue={ me.firstName }
            label="First Name"
            onChange={handleChange}
          />
          <FormInput 
            type="text"
            name="user.lastName"
            defaultValue={ me.lastName }
            label="First Name"
            onChange={handleChange}
          />
          <FormInput 
            type="text"
            name="user.email"
            defaultValue={ me.email }
            label="Email Address"
            onChange={handleChange}
          />
          {
            !changePassword && (
              <Button color="primary" onClick={()=> {toggleChangePassword(!changePassword)}}>Change Password</Button>
            )
          }
          {
            changePassword && (
              <>
                <FormInput 
                  type="text"
                  name="user.password.old"
                  label="Current Password"
                  onChange={handleChange}
                />
                <FormInput 
                  type="text"
                  name="user.password.new"
                  label="New Password"
                  onChange={handleChange}
                />
                <FormInput 
                  type="text"
                  name="user.password.confirm"
                  label="Confirm New Password"
                  onChange={handleChange}
                />
                <Button color="danger" onClick={()=> {toggleChangePassword(!changePassword)}}>Cancel</Button>
              </>
            )
          }
          {
            ( updateError ) && (
              <Form.Group className="error">
                  <p className="">{`Error: ${updateError}`}</p>
              </Form.Group>
            )
          }
          <FormInput 
            type="submit"
            label="Update Account"
            variant="primary"
          />
        </Form>
      </Col>
    </Row>
  );
}

export default FormUserEdit;