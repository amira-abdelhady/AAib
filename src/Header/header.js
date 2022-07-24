import React from 'react';
import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import NavDropdown from 'react-bootstrap/NavDropdown'

import{Link} from 'react-router-dom'
const Header = () => {
    return (
        <>
        <Navbar bg="light" expand="lg">
  <Container>
    <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="me-auto">
        <Link  to="/">Home</Link>
        <Link className="mx-3" to="/about-us">About us</Link>
        <Link to="/contact">contact us</Link>
        <Link className="mx-3" to="/products">products</Link>
        <Link className="mx-3" to="/home">Home</Link>
        <Link className="mx-3" to="/login">Login</Link>

      </Nav>
    </Navbar.Collapse>
  </Container>
</Navbar>
        </>
    );
}

export default Header;
