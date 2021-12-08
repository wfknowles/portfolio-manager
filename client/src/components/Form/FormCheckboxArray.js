import React from 'react';
import { Row, Col } from 'react-bootstrap';
import FormInput from './FormInput.js';
import { titleize, addClass, addInputName } from '../../utils/helpers';


function FormCheckboxArray({data, name, klass, change}) {

  return (
    <Row className="checkbox-group">
      {
        data.map((d) => (
          <Col sm="4" md="3" lg="2" key={d}>
              <FormInput
                klass={addClass(klass)}
                type="checkbox"
                name={addInputName(name, d)}
                label={titleize(d)}
                change={change}
              />
          </Col>
        ))
      }
    </Row>
  )
}

export default FormCheckboxArray;