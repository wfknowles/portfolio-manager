import React from 'react';

import ActionButton from '../Buttons/ActionButton';
import NavBar from '../NavBar/NavBar';
import FormLogin from '../Form/FormLogin';

import { useAppContext } from '../../utils/GlobalState/GlobalState';
import {  
  OPEN_CURRENT_PRIVATE,
  TOGGLE_MENU,
  TOGGLE_CONTENT,
  LOG_OUT
} from '../../utils/GlobalState/actions';
import Auth from '../../utils/auth';
import LocalStorage from '../../utils/LocalStorage';

function PrivateMenu () {

  const [state, dispatch] = useAppContext();
  const { viewPrivateMenu, viewPrivateContent, currentPrivate, loggedIn } = state;

  const navItems = [
    {name: 'portfolio'},
    {name: 'account'},
    {name: 'options'},
    {name: 'Log-Out'}
  ];

  // get multiple properties from localStorage's state
  const [browserViewPrivateMenu, browserViewPrivateContent, browserLoggedIn] = LocalStorage.getState(['viewPrivateMenu', 'viewPrivateContent', 'loggedIn']);

  const navClickHandler = (selection) => {

    if (selection === 'Log-Out') {

      // remove token from localStorage
      Auth.logout();

      // set loggedIn to false
      dispatch({
        type: LOG_OUT
      });

      LocalStorage.setState({
        loggedIn: false
      })
      closePrivateContent();
      closePrivateMenu();

    } else {

      openPrivateContent(selection);

    }
  }

  // set state and localStorage properties
  const openPrivateContent = (value) => {

    LocalStorage.setState({
      viewPublicContent: false,
      viewPrivateContent: true,
      currentPrivate: value
    });

    dispatch({
      type: OPEN_CURRENT_PRIVATE,
      currentPrivate: value
    });

  }

  // set state and localStorage properties
  const closePrivateContent = () => {

    LocalStorage.setState({
      viewPrivateContent: false,
      viewPublicContent: true
    });

    dispatch({
      type: TOGGLE_CONTENT,
      viewPrivateContent: false,
      viewPublicContent: true
    });

  }

  // set state and localStorage properties
  const closePrivateMenu = () => {

    LocalStorage.setState({
      viewPrivateMenu: false,
      viewPublicContent: true
    });

    dispatch({
      type: TOGGLE_MENU,
      viewPrivateMenu: false,
      viewPublicContent: true
    });

  }

  return (
    <>
      <div className="private-menu-actions">
          {
            ( viewPrivateContent || browserViewPrivateContent ) && (
              <ActionButton className="fa fa-chevron-circle-left white" click={closePrivateContent} />
            )
          }
          {
            ( (viewPrivateMenu && !viewPrivateContent) || (browserViewPrivateMenu && !browserViewPrivateContent)) && (
              <ActionButton className="fa fa-chevron-circle-right white" click={closePrivateMenu} />
            )
          }
      </div>
      {
        ( !loggedIn && !browserLoggedIn ) && (
          <FormLogin className="light mini"/>
        )
      }
      { 
        ( ( loggedIn || browserLoggedIn ) && ( viewPrivateMenu || browserViewPrivateMenu ) ) && (
          <NavBar
            name="privateNav"
            navItems={navItems} 
            activeItem={currentPrivate} 
            click={navClickHandler} 
            navBarClassName="menu"
            navClassName="menu menu-wrapper mx-auto"
            variant="dark" 
            expand="md"
          />
        )
      }
    </>
  )
}

export default PrivateMenu;