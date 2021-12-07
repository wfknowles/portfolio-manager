import React, { useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Auth from '../../utils/auth';
import { useAppContext } from '../../utils/GlobalState/GlobalState';

import PrivateHeader from './partials/Header';

import PrivatePortfolio from './pages/Portfolio';
import PrivateAccount from './pages/Account';
import PrivateOptions from './pages/Options';

function PrivateContent () {
  const [state, dispatch] = useAppContext();
  const { viewPrivateContent, currentPrivate } = state;

  useEffect(() => {
    console.log({currentPrivate})
  }, [currentPrivate])

  return (


      <>
        <div>
          <PrivateHeader />
        </div>
        <div>
          {
            state.currentPrivate === "portfolio" && (
              <PrivatePortfolio />
            )
          }
          {
            state.currentPrivate === "account" && (
              <PrivateAccount />
            )
          }
          {
            state.currentPrivate === "options" && (
              <PrivateOptions />
            )
          }
        </div>
      </>


  )
}

export default PrivateContent;