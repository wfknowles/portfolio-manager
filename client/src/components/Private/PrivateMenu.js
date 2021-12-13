import React, { useEffect } from 'react';

import ActionButton from '../Buttons/ActionButton';
import NavBar from '../NavBar/NavBar';
import FormLogin from '../Form/FormLogin';

import { useAppContext } from '../../utils/GlobalState/GlobalState';
import { OPEN_PRIVATE_CONTENT, CLOSE_PRIVATE_CONTENT, CLOSE_PRIVATE_MENU, LOG_OUT } from '../../utils/GlobalState/actions';
import LocalStorage from '../../utils/LocalStorage';
import Auth from '../../utils/Auth';

function PrivateMenu () {
  
  const [ state, dispatch ] = useAppContext();
  const { viewPrivateMenu, viewPrivateContent, currentPrivate, loggedIn } = state;

  const navItems = [
    {name: 'portfolio'},
    {name: 'account'},
    {name: 'options'},
    {name: 'Log-Out'},
    {name: 'Message-Template'}
  ];

  const navClickHandler = (selection) => {

    if (selection === 'Log-Out') {

      Auth.logout();

      dispatch({
        type: LOG_OUT
      });

    } else {

      openPrivateContent(selection);

    }
  }

  const openPrivateContent = (value) => {

    LocalStorage.setState({
      currentPrivate: value,
      viewPrivateContent: true,
      viewPublicContent: false
    });

    dispatch({
      type: OPEN_PRIVATE_CONTENT,
      currentPrivate: value
    });

  }

  const closePrivateContent = () => {

    LocalStorage.setState({
      viewPublicContent: true,
      viewPrivateContent: false,
      currentPrivate: undefined
    });

    dispatch({
      type: CLOSE_PRIVATE_CONTENT
    });

  }

  const closePrivateMenu = () => {

    LocalStorage.setState({
      viewPrivateMenu: false,
      viewPublicContent: true
    });

    dispatch({
      type: CLOSE_PRIVATE_MENU
    });

  }

  return (
    <>
      <div className="private-menu-actions">
          {
            viewPrivateContent && (
              <ActionButton className="fa fa-chevron-circle-left white" click={closePrivateContent} />
            )
          }
          {
            (( viewPrivateMenu && !viewPrivateContent )) && (
              <ActionButton className="fa fa-chevron-circle-right white" click={closePrivateMenu} />
            )
          }
      </div>
      {
        !loggedIn && (
          <FormLogin className="light mini"/>
        )
      }
      { 
        ( loggedIn && viewPrivateMenu ) && (
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