import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
import { Form, Button } from 'react-bootstrap';
import { REGISTER } from '../../utils/mutations';
import Auth from '../../utils/auth'
import './style.css';

function RegistrationForm () {
  const [formState, setFormState] = useState({firstName: '', lastName: '', email: '', password: '' })
  const [register, {error}] = useMutation(REGISTER);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormState({
      ...formState,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const mutationResponse = await register({
        variables: {
          firstName: formState.firstName,
          lastName: formState.lastName,
          phoneNumber: formState.phoneNumber,
          password: formState.password
        }
      });
      
      const token = mutationResponse.data.addUser.token;
      Auth.login(token);
    } catch (err) {
      console.error('registrationError', err)
    }
  }

  return(
    <Form className="" onSubmit={handleSubmit}>
      <Form.Group className="">
        <Form.Label className="" htmlFor="firstName">First Name</Form.Label>
        <Form.Control type="text" name="firstName" placeholder="Frank" onChange={handleChange} />
      </Form.Group>
      <Form.Group className="">
        <Form.Label className="" htmlFor="lastName">Last Name</Form.Label>
        <Form.Control type="text" name="lastName" placeholder="Castle" onChange={handleChange} />
      </Form.Group>
      <Form.Group className="">
        <Form.Label className="" htmlFor="email">Email</Form.Label>
        <Form.Control type="email" name="email" placeholder="frankcastle@example.com" onChange={handleChange} />
      </Form.Group >
      <Form.Group className="">
        <Form.Label className="" htmlFor="password">Password</Form.Label>
        <Form.Control type="password" name="password" placeholder="******" onChange={handleChange} />
      </Form.Group>
      <Form.Group className="">
        <Form.Label className="" htmlFor="confirmPassword">Confirm Password</Form.Label>
        <Form.Control type="password" name="confirmPassword" placeholder="******" onBlur={handleChange} />
      </Form.Group>
      {
        error &&
          <Form.Group className="error">
              <p className="">Registration failed.</p>
          </Form.Group>
      }
      <Button className="" color="primary" type="submit">Register</Button>
    </Form>
  )
}

export default RegistrationForm;