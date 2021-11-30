import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
import { Form, Button } from 'react-bootstrap';
import { LOGIN } from '../../utils/mutations';
import Auth from '../../utils/auth';
import './style.css';

function LoginForm() {
  const [formState, setFormState] = useState({ email: '', password: '' });
  const [login, { error }] = useMutation(LOGIN);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const mutationResponse = await login({
        variables: { 
            email: formState.email, 
            password: formState.password 
        },
      });
      const token = mutationResponse.data.login.token;
      Auth.login(token);
    } catch (err) {
      console.log('loginError', err);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormState({
      ...formState,
      [name]: value,
    });
  };

  return (
    <Form className="" onSubmit={handleSubmit}>
      <Form.Group className="">
        <Form.Label className="" htmlFor="email">Email</Form.Label>
        <Form.Control type="email" name="email" placeholder="youremail@example.com" onChange={handleChange} />
      </Form.Group >
      <Form.Group className="">
        <Form.Label className="" htmlFor="password">Password</Form.Label>
        <Form.Control type="password" name="password" placeholder="******" onChange={handleChange} />
      </Form.Group>
      
      {
        error &&
          <Form.Group className="error">
              <p className="">The provided credentials are incorrect</p>
          </Form.Group>
      }
      
      <Button className="" color="primary" type="submit">Log In</Button>
    </Form>
  );
}

export default LoginForm;