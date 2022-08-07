import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import "bootstrap/dist/css/bootstrap.css";
import "../NavBar.css";
import LinkedInLogo from "../assets/linkedin-5.png";
import GithubLogo from "../assets/github.png";
import logo from "../assets/logo-2.png";

function NavBar() {
  return (
    <Navbar expand="lg" fixed="top" className="navBar">
      <Container>
        <Navbar.Brand href="#home">
          <img
            src={logo}
            width="30"
            height="30"
            className="d-inline-block align-top"
            alt="logo"
          />
        </Navbar.Brand>
        <Navbar.Brand className="navBarBrand" href="#home">
          Julie Park
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="justify-content-end" style={{ width: "100%" }}>
            <Nav.Link href="about">About</Nav.Link>
            <Nav.Link href="work">Work</Nav.Link>
            <Nav.Link href="contacts">Contacts</Nav.Link>
            <div className="navLinksContainer">
              <a href="https://www.linkedin.com/in/julie-park-developer/">
                <img
                  className="navLinks"
                  alt="LinkedIn logo"
                  src={LinkedInLogo}
                />
              </a>
              <a className="navLinks" href="https://github.com/jpark0224">
                <img
                  className="navLinks"
                  alt="LinkedIn logo"
                  src={GithubLogo}
                />
              </a>
            </div>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
