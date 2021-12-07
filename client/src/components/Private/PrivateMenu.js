import React, { useState } from 'react';
// import { Container, Row, Col } from 'react-bootstrap';
// import LogIn from './LogIn';
// import Auth from '../../utils/auth';
import { useAppContext } from '../../utils/GlobalState/GlobalState';
import NavBar from '../NavBar/NavBar';
import { 
  UPDATE_VIEW_PRIVATE_MENU, 
  UPDATE_CURRENT_PRIVATE,
  TOGGLE_MENU,
  TOGGLE_PRIVATE 
} from '../../utils/GlobalState/actions';

function PrivateMenu () {
  const [state, dispatch] = useAppContext();
  const { viewPrivateMenu, viewPrivateContent, currentPrivate } = state;

  const navItems = [
    {name: 'portfolio'},
    {name: 'account'},
    {name: 'options'}
  ];

  const navClickHandler = (selection) => {
    dispatch({
      type: UPDATE_CURRENT_PRIVATE,
      viewPrivateContent: true,
      currentPrivate: selection
    });
  }

  const closePrivateContent = () => {
    console.log('closePrivateContent');
    dispatch({
      type: TOGGLE_PRIVATE,
      viewPrivateContent: false,
      viewPublicContent: true
    });
  }

  const closePrivateMenu = () => {
    console.log('closePrivateMenu');
    dispatch({
      type: TOGGLE_MENU,
      viewPrivateMenu: false,
      viewPublicContent: true
    });
  }

  return (
    <>
      <div id="menuActions">
          {
            viewPrivateContent && (
              <button onClick={() => closePrivateContent()}>Back</button>
            )
          }
          {
            (viewPrivateMenu && !viewPrivateContent) && (
              <button onClick={() => closePrivateMenu()}>Close Menu</button>
            )
          }
      </div>
      {
        viewPrivateMenu && (
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