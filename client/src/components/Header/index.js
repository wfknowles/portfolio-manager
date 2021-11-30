import React from 'react';
import { Navbar, Container, Nav } from 'react-bootstrap';
import Auth from '../../utils/auth';
import logo from '../../logo.svg';

function Header() {
  
  return (
    <header>
        <Navbar bg="dark" expand="lg" variant="dark" className="">
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
            <Nav className="">
                {Auth.loggedIn() ? (
                <>
                    <Nav.Link onClick={Auth.logout()}>Logout</Nav.Link>
                </>
                ) : (
                <>
                    <Nav.Link href="/login" color="light">Log In</Nav.Link>
                    <Nav.Link href="/signup">Sign Up</Nav.Link>
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