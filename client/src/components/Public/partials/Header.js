import React from 'react';
import NavBar from '../../NavBar/NavBar';
import { Container } from 'react-bootstrap';

function Header () {
  const navItems = [
    {name: 'home', href: "/"},
    {name: 'portfolio', href: "/portfolio"},
    {name: 'contact', href: "/contact"}
  ];

  return (
    <Container>
      <NavBar
        brand="/whale.svg"
        name="publicNav"
        navItems={navItems}
        navBarClassName="menu menu-public"
        navClassName=""
        variant="light" 
        expand="md"
      />
    </Container>
  )
}

export default Header;