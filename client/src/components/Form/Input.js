import React from 'react';
import { Form } from 'react-bootstrap';


function FormInput ({klass, type, name, label, placeholder, change}) {

  const inputTypes = [ "", "text", "tel", "email", "password", "search", "number"];

  return (
    <>
    {
      inputTypes.includes(type) && (
        <Form.Group className={klass}>
          <Form.Label htmlFor={name}>{label}</Form.Label>
          <Form.Control type={type} name={name} placeholder={placeholder} onChange={change} />
        </Form.Group >
      )
    }
    {
      type === 'checkbox' && (
        <Form.Group className={klass}>
          {/* <Form.Label htmlFor={name}>{label}</Form.Label> */}
          <Form.Check type={type} name={name} label={label} onChange={change}/>
        </Form.Group >
      )
    }
    {
      type === 'textarea' && (
        <Form.Group className={klass}>
          <Form.Label htmlFor={name}>{label}</Form.Label>
          <Form.Control as={type} rows={3} name={name} onChange={change}></Form.Control>
        </Form.Group >
      )
    }
    </>
  )
}

export default FormInput;