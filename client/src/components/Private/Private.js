import React from 'react';
import PrivateMenu from './PrivateMenu';
import PrivateContent from './PrivateContent';
import { addClass } from '../../utils/helpers';
import { useAppContext } from '../../utils/GlobalState/GlobalState';
import './Private.css';

function Private () {

  const [{ viewPrivateMenu, viewPrivateContent, loggedIn }] = useAppContext();
  
  const getPrivateClassName = () => {
    let className = "";

    if ( viewPrivateMenu && viewPrivateContent ) {
      // if private menu and private content are open
      className = "open";

    } else if ( viewPrivateMenu ) {
      // if private menu is open
      className = 'menu-open';

    } else {

      // private is closed
      className = 'closed';

    }

    return className;
  }

  const privateClassName = getPrivateClassName();

  return (

    <>

      {
        ( viewPrivateMenu || ( loggedIn && viewPrivateContent ) ) && (
          <div className={addClass('private', privateClassName)} >
            {
              viewPrivateMenu && (
                <div className="private-menu">
                  <PrivateMenu />
                </div>
              )
            }
            {
              ( loggedIn && viewPrivateContent ) && (
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