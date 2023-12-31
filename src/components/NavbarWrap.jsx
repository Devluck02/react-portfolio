import React from "react";
import { Link } from "react-router-dom";
import { Navbar, Container, Nav, Offcanvas } from "react-bootstrap";

import AppsIcon from '@mui/icons-material/Apps';
const NavbarWrap = () => {
  return (
    <Navbar bg="transparent" expand="md">
      <Container>
        <Navbar.Brand>
          <Link style={{"color":"#000"}} to="/">&#123;LuckySingh Dev&#125;</Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="offcanvasNavbar" className="border-0"><AppsIcon style={{"color": "#000", "font-size": "36px"}} /></Navbar.Toggle>
        <Navbar.Offcanvas
          id="offcanvasNavbar"
          aria-labelledby="offcanvasNavbarLabel"
          placement="end"
        >
          <Offcanvas.Header closeButton>
            <Offcanvas.Title id="offcanvasNavbarLabel"></Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>
            <Nav className="justify-content-end flex-grow-1 pe-3">
            <Nav.Link>
                <Link style={{"color":"#000"}} to="/">Home</Link>
              </Nav.Link>
              <Nav.Link>
                <Link style={{"color":"#000"}} to="/project">projects</Link>
              </Nav.Link>
              <Nav.Link>
                <Link style={{"color":"#000"}} to="/experience">Experience</Link>
              </Nav.Link>
              <Nav.Link>
                <Link style={{"color":"#000"}} to="/contact">Contacts</Link>
              </Nav.Link>
            </Nav>
          </Offcanvas.Body>
        </Navbar.Offcanvas>
      </Container>
    </Navbar>
  );
};

export default NavbarWrap;
