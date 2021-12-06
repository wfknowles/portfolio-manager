import React, { useState } from 'react';
// import { Container, Row, Col } from 'react-bootstrap';
// import LogIn from './LogIn';
// import Auth from '../../utils/auth';
import { useAppContext } from '../../utils/GlobalState/GlobalState';
import NavBar from '../NavBar/NavBar';
import { 
  UPDATE_VIEW_PRIVATE_MENU, 
  UPDATE_CURRENT_PRIVATE 
} from '../../utils/GlobalState/actions';

function PrivateMenu () {
  const [state, dispatch] = useAppContext();
  const { viewPrivateMenu, currentPrivate } = state;

  const navItems = [
    {name: 'portfolio'},
    {name: 'account'},
    {name: 'options'}
  ];

  const showPrivateMenu = (view) => {
    console.log({viewPrivateMenu, view})
    dispatch({
      type: UPDATE_VIEW_PRIVATE_MENU,
      viewPrivateMenu: view
    });
  }

  const navClickHandler = (selection) => {
    dispatch({
      type: UPDATE_CURRENT_PRIVATE,
      viewPrivateContent: true,
      currentPrivate: selection
    });
  }

  return (
    <>
      <button>Exit</button>
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