import React from 'react';
import { Row, Col } from 'react-bootstrap';

import { useAppContext } from '../../../utils/GlobalState/GlobalState';
import { titleCase } from '../../../utils/helpers';
import LocalStorage from '../../../utils/LocalStorage';

function PrivateHeader() {
  const [ state ] = useAppContext();
  const { currentPrivate } = state;
  const browserCurrentPrivate = LocalStorage.getState('currentPrivate');
  
  // if currentPrivate isnt defined, fall back to browser's currentPrivate
  const getPrivateTitle = () => {
    if (currentPrivate !== '') {
      return titleCase(currentPrivate);
    } else {
      return titleCase(browserCurrentPrivate);
    }
  }

  const privateTitle = getPrivateTitle();

  return (
    <Row className="private-header">
        <Col sm="12">
            <h1>{privateTitle}</h1>
        </Col>
    </Row>
  )
}

export default PrivateHeader;