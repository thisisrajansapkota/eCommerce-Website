import React from 'react'
import { Container, NavDropdown, Navbar, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <Navbar expand="lg" bg="info" variant="info">
      <Container>
        <Navbar.Brand href="#home">My Store</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Link to="/login" className="nav-link">
              Login
            </Link>

            {/*To Do: Change links to logout once auth implemented.  */}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header