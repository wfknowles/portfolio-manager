import React from 'react';
import { Form, Button } from 'react-bootstrap';
import { addClass } from '../../utils/helpers';
import ReactForms from '../../utils/ReactForms/ReactForms';


function FormInput ({klass, type, name, label, placeholder, change, options}) {

  const inputTypes = [ "", "text", "tel", "email", "password", "search", "number"];

  const addMedia = (e) => {
    e.preventDefault();
    console.log('add media!');
  }

  const changeMedia = (e) => {
    e.preventDefault();
    console.log('submit media!');
  }

  return (
    <>
    {
      inputTypes.includes(type) && (
        <Form.Group className={addClass('form-group', klass)}>
          <Form.Label htmlFor={name}>{label}</Form.Label>
          <Form.Control type={type} name={name} placeholder={placeholder} onChange={change} />
        </Form.Group >
      )
    }
    {
      type === 'select' && (
        <Form.Group className={addClass('form-group', klass)}>
          <Form.Label htmlFor={name}>{label}</Form.Label>

          <Form.Select aria-label={placeholder} name={name} className={addClass('', klass)}>
            <option value="">{placeholder}</option>
            {
              options.map(( option ) => (
                <option key={option} value={ option } >{ReactForms.titleize( option )}</option>
              ))
            }
          </Form.Select>
        </Form.Group >
      )
    }
    {
      type === 'checkbox' && (
        <Form.Group className={addClass('form-group', klass)}>
          {/* <Form.Label htmlFor={name}>{label}</Form.Label> */}
          <Form.Check type={type} name={name} label={label} onChange={change}/>
        </Form.Group >
      )
    }
    {
      type === 'textarea' && (
        <Form.Group className={addClass('form-group', klass)}>
          <Form.Label htmlFor={name}>{label}</Form.Label>
          <Form.Control as={type} rows={3} name={name} onChange={change}></Form.Control>
        </Form.Group >
      )
    }
    {
      type === 'media' && (
        <Form.Group className={addClass('form-group', klass)}>
          <Form.Label htmlFor={name}>{label}</Form.Label>
          <Form.Control type="file" name={name} placeholder={placeholder} onChange={change} />
        </Form.Group >
      )
    }
    </>
  )
}

export default FormInput;