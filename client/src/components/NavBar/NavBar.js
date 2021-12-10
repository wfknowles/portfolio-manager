import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import NavItem from './NavItem';
import { addClass, titleize } from '../../utils/helpers';

function NavBar ({name, brand, navItems, activeItem, click, navBarClassName, navClassName, variant, expand}) {

  return (
    <Navbar variant={variant} expand={expand} className={navBarClassName}>
      {
        brand && (
          <Navbar.Brand href="/">
            <img
                src={brand}
                alt="Logo"
            />
          </Navbar.Brand>
        )
      }
    <Navbar.Toggle aria-controls={name} />
    <Navbar.Collapse id={name} >
    <Nav className={addClass('', navClassName)}>
      {
        navItems && (

          navItems.map((item) => (
            <NavItem
                key={item.name}
                name={item.name}
                text={titleize(item.name)}
                href={item.href}
                click={click}
                activeItem={activeItem}
            />
          ))

        )
      }
    </Nav>
    </Navbar.Collapse>
    </Navbar>
  )
}

export default NavBar;