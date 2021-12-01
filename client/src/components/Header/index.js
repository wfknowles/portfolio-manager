import React from 'react';
import { Navbar, Container, Nav } from 'react-bootstrap';
import Auth from '../../utils/auth';
import logo from '../../logo.svg';

function Header() {
  
  return (
    <header>
      <Navbar bg="dark" variant="dark" expand="lg">
          <Container>
            <Navbar.Brand href="../">
            <img
                src={logo}
                width="100"
                className="navbar-brand"
                alt="Brand Logo"
            />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="headerNavbar" />
            <Navbar.Collapse id="headerNavbar">
            <Nav className="me-auto">
                {Auth.loggedIn() ? (
                <>
                    <Nav.Link onClick={Auth.logout()}>Logout</Nav.Link>
                </>
                ) : (
                <>
                    <Nav.Link href="/login">Log In</Nav.Link>
                    <Nav.Link href="/register">Register</Nav.Link>
                </>
                )}
            </Nav>
            </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  )
}

export default Header;