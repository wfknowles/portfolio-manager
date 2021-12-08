import React from 'react';
import { useAppContext } from '../../utils/GlobalState/GlobalState';

import PrivateHeader from './partials/Header';
import PrivatePortfolio from './pages/Portfolio';
import PrivateAccount from './pages/Account';
import PrivateOptions from './pages/Options';

import LocalStorage from '../../utils/LocalStorage';

function PrivateContent () {
  const [ state ] = useAppContext();
  const { currentPrivate } = state;
  const browserCurrentPrivate = LocalStorage.getState('currentPrivate');

  const isCurrent = (value) => {
    // if currentPrivate or browserCurrentPrivate are equal to value
    if (currentPrivate === value || browserCurrentPrivate === value) {
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
      </div>
    </>

  )
}

export default PrivateContent;