import React from 'react';

import PrivateMenu from './PrivateMenu';
import PrivateContent from './PrivateContent';

import { useAppContext } from '../../utils/GlobalState/GlobalState';
import LocalStorage from '../../utils/LocalStorage';
import { addClass } from '../../utils/helpers';

import './Private.css';

function Private () {

  const [ state ] = useAppContext();
  const { viewPrivateMenu, viewPrivateContent, loggedIn } = state;

  // get multiple properties from localStorage's state
  const [ browserViewPrivateMenu, browserViewPrivateContent, browserLoggedIn ] = LocalStorage.getState(['viewPrivateMenu', 'viewPrivateContent', 'loggedIn']);
  
  const getPrivateClassName = () => {
    let klass = "";

    if ( ( viewPrivateMenu && viewPrivateContent ) || ( browserViewPrivateMenu && browserViewPrivateContent ) ) {
      // if private menu and private content are open
      klass = "open";

    } else if ( viewPrivateMenu || browserViewPrivateMenu) {
      // if private menu is open
      klass = 'menu-open';

    } else {

      // private is closed
      klass = 'closed';

    }

    return klass;
  }

  const privateClassName = getPrivateClassName();

  return (
    <>
      {
        ( ( loggedIn || browserLoggedIn ) || ( viewPrivateMenu || browserViewPrivateMenu ) ) && (
          <div className={addClass('private', privateClassName)} >
            {
              ( viewPrivateMenu || browserViewPrivateMenu ) && (
                <div className="private-menu">
                  <PrivateMenu />
                </div>
              )
            }
            {
              ( ( loggedIn || browserLoggedIn ) && ( viewPrivateContent || browserViewPrivateContent ) ) && (
                <div className="private-content">
                  <PrivateContent />
                </div>
              )
            }
          </div>
        )
      }
    </>
    
  )
}

export default Private;