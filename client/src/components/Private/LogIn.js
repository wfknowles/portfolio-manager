import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Auth from '../../utils/auth';

function LogIn () {
  const clickHandler = (e) => {
    console.log('login!');
  }

  return (
  
    !Auth.loggedIn() && (
      <button id="logIn" onClick={clickHandler}>Login</button>
    )
    
  )
}

export default LogIn;