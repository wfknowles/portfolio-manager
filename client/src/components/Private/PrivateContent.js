import React from 'react';
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


  return (

    Auth.loggedIn() && (
      <div id="dashContent">
        <div>
        <PrivateHeader />
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
      </div>
    )
    
  )
}

export default PrivateContent;