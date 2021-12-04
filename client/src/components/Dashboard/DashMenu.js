import React, { useEffect } from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import DashMenuItem from './DashMenuItem.js';
import { useAppContext } from '../../utils/GlobalState/GlobalState';
import { UPDATE_CURRENT } from '../../utils/GlobalState/actions';


function DashMenu(props) {
  const {current, setCurrent} = props;
  const [state, dispatch] = useAppContext();
  const { currentDash } = state;

  const clickHandler = (menuItem) => {

    dispatch({
      type: UPDATE_CURRENT,
      currentDash: menuItem
    })
    
  }
    
  return (
    <div id="dashMenu" className="gradient drop-shadow">
      <Navbar variant="dark" expand="lg">
        <Navbar.Toggle aria-controls="menuNavbar" />
        <Navbar.Collapse id="menuNavbar">
        <Nav className="menu menu-wrapper mx-auto">
          <DashMenuItem
            name="dashboard"
            text="Dashboard"
            current={currentDash}
            click={clickHandler}
          />
          <DashMenuItem
            name="portfolio"
            text="Portfolio"
            current={currentDash}
            click={clickHandler}
          />
          <DashMenuItem
            name="account"
            text="Account"
            current={currentDash}
            click={clickHandler}
          />
          <DashMenuItem
            name="options"
            text="Options"
            current={currentDash}
            click={clickHandler}
          />
        </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  )
}

export default DashMenu;