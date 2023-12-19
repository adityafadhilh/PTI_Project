import React from "react";
import { Link } from "react-router-dom";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function Header() {

  return (

    <Navbar fixed="top" expand="lg" bg="light">
      <Container>
        <Link to="/search" className="navbar-brand" data-testid="link-to-search-brand">
          ADSIC
        </Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto justify-content-center text-start" style={{ flex: 1 }}>
            <Link to="/search" className="nav-link" data-testid="link-to-search">
              Home
            </Link>
            <Link to="/favorites" className="nav-link" data-testid="link-to-favorites">
              Favorite
            </Link>
            <Link to="/topalbums" className="nav-link" data-testid="link-to-topalbums">
              Top Album
            </Link>
            <Link to="/aboutus" className="nav-link" data-testid="link-to-aboutus">
              About Us
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default Header;
