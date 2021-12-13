import React from 'react';

import PrivateHeader from './partials/Header';
import PrivatePortfolio from './pages/Portfolio';
import PrivateAccount from './pages/Account';
import PrivateOptions from './pages/Options';
import PrivateMessageTemplate from './pages/MessageTemplate';

import { useAppContext } from '../../utils/GlobalState/GlobalState';
import { LOG_OUT } from '../../utils/GlobalState/actions';
import Auth from '../../utils/Auth';

function PrivateContent () {

  Auth.loggedIn();

  const [ { currentPrivate, loggedIn }, dispatch ] = useAppContext();
  
  if ( !loggedIn ) {
    dispatch({
      type: LOG_OUT
    });
  }

  const isCurrent = (value) => {
    if (currentPrivate === value) {
      return true;
    } else {
      return false;
    }
  }

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