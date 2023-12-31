import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Container, Navbar, Nav } from 'react-bootstrap';
import '../assets/css/navbar.css';

const Header = () => {
  const [expanded, setExpanded] = useState(false);

  const toggleNavbar = () => {
    setExpanded(!expanded);
  };

  return (
    <Container fluid className="flex bg-blue">
      <Navbar bg="" expand="lg" expanded={expanded} className="">
        <Navbar.Brand>
          <Link to="/" className="title no-style">
            <h1>&lt;</h1>
            <h2>MARKET CAP</h2>
          </Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarExpand" onClick={toggleNavbar} />
        <Navbar.Collapse id="navbarExpand">
          <Nav className="ml-auto">
            <Nav.Link className="bg-blue white" as={NavLink} to="www.github.com/diarisdiakite" onClick={toggleNavbar}>
              Github
            </Nav.Link>
            <Nav.Link as={NavLink} to="www.twitter.com/give-your-analytics" className="white" onClick={toggleNavbar}>
              LinkedIn
            </Nav.Link>
            <Nav.Link as={NavLink} to="www.twitter.com/give-your-analytics" onClick={toggleNavbar}>
              Twitter
            </Nav.Link>
            <Nav.Link as={NavLink} to="/users/1" onClick={toggleNavbar}>
              My Profile
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </Container>
  );
};

export default Header;
