import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import "bootstrap/dist/css/bootstrap.css";
import LinkedInLogo from "../assets/linkedin-5.png";
import GithubLogo from "../assets/github.png";

function NavBar() {
  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="#home">Julie Park</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="about">About</Nav.Link>
            <Nav.Link href="work">Work</Nav.Link>
            <Nav.Link href="contacts">Contacts</Nav.Link>
            <a href="https://www.linkedin.com/in/julie-park-developer/">
              <img
                alt="LinkedIn logo"
                src={LinkedInLogo}
                width="30"
                height="30"
              />
            </a>
            <a href="https://github.com/jpark0224">
              <img
                alt="LinkedIn logo"
                src={GithubLogo}
                width="30"
                height="30"
              />
            </a>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
