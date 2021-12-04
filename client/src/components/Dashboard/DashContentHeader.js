import React from 'react';
import { Row, Col } from 'react-bootstrap';

import { useAppContext } from '../../utils/GlobalState/GlobalState';
import { titleCase } from '../../utils/helpers';


function DashContentHeader() {
  const [state, dispatch] = useAppContext();
  const { currentDash } = state;

  return (
    <Row id="dashContentHeader" className="">
        <Col sm="12">
            <h1>{titleCase(currentDash)}</h1>
        </Col>
    </Row>
  )
}

export default DashContentHeader;