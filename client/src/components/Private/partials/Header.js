import React from 'react';
import { Row, Col } from 'react-bootstrap';

import { useAppContext } from '../../../utils/GlobalState/GlobalState';
import { titleCase } from '../../../utils/helpers';


function PrivateHeader() {
  const [state, dispatch] = useAppContext();
  const { currentPrivate } = state;

  return (
    <Row id="privateHeader">
        <Col sm="12">
            <h1>{titleCase(currentPrivate)}</h1>
        </Col>
    </Row>
  )
}

export default PrivateHeader;