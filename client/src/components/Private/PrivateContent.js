import React from 'react';
import { useAppContext } from '../../utils/GlobalState/GlobalState';

import PrivateHeader from './partials/Header';
import PrivatePortfolio from './pages/Portfolio';
import PrivateAccount from './pages/Account';
import PrivateOptions from './pages/Options';
import PrivateMessageTemplate from './pages/MessageTemplate';

import Auth from '../../utils/auth';
import LocalStorage from '../../utils/LocalStorage';

function PrivateContent () {
  const [ state ] = useAppContext();
  const { currentPrivate, loggedIn } = state;
  const [ browserCurrentPrivate, browserLoggedIn] = LocalStorage.getState('currentPrivate', 'loggedIn');

  const isCurrent = (value) => {
    // if currentPrivate or browserCurrentPrivate are equal to value
    if (currentPrivate === value || browserCurrentPrivate === value) {
      return true;
    } else {
      return false;
    }

  }

  const loggedInOrRedirect = () => {
    if (!loggedIn && !browserLoggedIn || Auth.isTokenExpired()) {
      window.location.assign('/');
    }
  }

  loggedInOrRedirect();

  return (

    <>
      <div>
        <PrivateHeader />
      </div>
      <div>
        {
          isCurrent('portfolio') && (
            <PrivatePortfolio />
          )
        }
        {
          isCurrent('account') && (
            <PrivateAccount />
          )
        }
        {
          isCurrent('options') && (
            <PrivateOptions />
          )
        }
        {
          isCurrent('Message-Template') && (
            <PrivateMessageTemplate />
          )
        }
      </div>
    </>

  )
}

export default PrivateContent;