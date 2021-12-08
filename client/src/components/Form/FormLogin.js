import React, { useState } from 'react';
import { Form } from 'react-bootstrap';

import { useMutation } from '@apollo/client';
import { LOGIN } from '../../utils/GraphQL/mutations';
import { useAppContext } from '../../utils/GlobalState/GlobalState';
import { LOG_IN } from '../../utils/GlobalState/actions';
import LocalStorage from '../../utils/LocalStorage';

import Auth from '../../utils/auth';

function FormLogin({className}) {

  // only need the dispatch function
  const [ state, dispatch ] = useAppContext();
  // using component state for user input values
  const [ loginState, setLoginState] = useState({});
  // deconstruct loginState
  const { email, password } = loginState;
  // login mutation and error response
  const [ login, { error } ] = useMutation(LOGIN);

  const handleSubmit = async (e) => {

    e.preventDefault();

    // attempt server authentication
    const mutationResponse = await login({
      variables: { 
          email: email, 
          password: password 
      },
    });

    // if the response has a token
    if (mutationResponse.data.login.token) {

      // set token into localStorage
      Auth.login(mutationResponse.data.login.token);

      // set state's loggedIn property
      dispatch({
        type: LOG_IN
      });

      // set localStorage's loggedIn property
      LocalStorage.setState({
        loggedIn: true
      })

    }
  };

  const handleChange = (e) => {

    // deconstruct event target
    const { name, value } = e.target;

    // reduce state with incoming state
    setLoginState({
      ...loginState,
      [name]: value,
    });

  };

  return (
    <Form className={className} onSubmit={handleSubmit}>
      <Form.Group>
        <Form.Control type="email" name="email" placeholder="Email" onChange={handleChange} />
      </Form.Group >
      <Form.Group>
        <Form.Control type="password" name="password" placeholder="Password" onChange={handleChange} />
      </Form.Group>
      
      {
        error &&
          <Form.Group className="error">
              <p className="">Incorrect email and password combination</p>
          </Form.Group>
      }

      <Form.Group>
        <Form.Control type="submit" className="btn btn-block btn-primary" />
      </Form.Group>
    </Form>
  );
}

export default FormLogin;