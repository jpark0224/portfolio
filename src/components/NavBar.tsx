import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import "bootstrap/dist/css/bootstrap.css";
import "../styles/NavBar.css";
import { Link, animateScroll as scroll } from "react-scroll";
import LinkedInLogo from "../assets/linkedin-5.png";
import GithubLogo from "../assets/github.png";
import logo from "../assets/logo-2.png";

function NavBar() {
  const scrollToTop = () => {
    scroll.scrollToTop();
  };

  return (
    <Navbar expand="lg" fixed="top" className="navBar">
      <Container>
        <Navbar.Brand onClick={scrollToTop}>
          <img
            src={logo}
            width="30"
            height="30"
            className="d-inline-block align-top logo"
            alt="logo"
          />
        </Navbar.Brand>
        <Navbar.Brand onClick={scrollToTop} className="navBarBrand">
          Julie Park
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="justify-content-end" style={{ width: "100%" }}>
            <Link
              activeClass="active"
              to="about"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
            >
              <Nav.Link
                className="navItem menu__link r-link text-underlined"
                href="about"
              >
                About
              </Nav.Link>
            </Link>
            <Link
              activeClass="active"
              to="work"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
            >
              <Nav.Link
                className="navItem menu__link r-link text-underlined"
                href="work"
              >
                Work
              </Nav.Link>
            </Link>
            <Link
              activeClass="active"
              to="contacts"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
            >
              <Nav.Link
                className="navItem menu__link r-link text-underlined"
                href="contacts"
              >
                Contacts
              </Nav.Link>
            </Link>
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
