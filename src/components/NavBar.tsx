import React from "react";
import Container from "react-bootstrap/Container";
import { useRef, useEffect, useState } from "react";
import { Link, animateScroll as scroll } from "react-scroll";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import "bootstrap/dist/css/bootstrap.css";
import "../styles/NavBar.css";
import LinkedInLogo from "../assets/linkedin-5.png";
import GithubLogo from "../assets/github.png";
import logo from "../assets/logo.png";

function NavBar() {
  const [navBarClass, setNavBarClass] = useState(" navBarNoShadow");
  const [scrollPosition, setScrollPosition] = useState(0);

  const handleScroll = () => {
    const position = window.pageYOffset;
    setScrollPosition(position);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const navBar = useRef<HTMLElement>(null);
  window.onscroll = function () {
    if (scrollPosition < 10) {
      setNavBarClass(" navBarNoShadow");
    } else {
      setNavBarClass(" navBarShadow");
    }
  };

  const scrollToTop = () => {
    scroll.scrollToTop();
  };

  return (
    <Navbar
      collapseOnSelect
      expand="lg"
      fixed="top"
      className={"navBar" + navBarClass}
      ref={navBar}
    >
      <Container>
        <Navbar.Brand onClick={scrollToTop}>
          <img
            src={logo}
            width="40"
            height="40"
            className="d-inline-block align-top logo"
            alt="logo"
          />
        </Navbar.Brand>
        <Navbar.Brand onClick={scrollToTop} className="navBarBrand">
          Julie Park
        </Navbar.Brand>
        <Navbar.Toggle
          aria-controls="responsive-navbar-nav"
          id="navBarToggler"
        />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav
            className="justify-content-end menuContainer"
            style={{ width: "100%" }}
          >
            <Link
              activeClass="activeMenu"
              to="about"
              spy={true}
              smooth={true}
              offset={0}
              duration={500}
            >
              <div className="navItem">About</div>
            </Link>
            <Link
              activeClass="activeMenu"
              to="work"
              spy={true}
              smooth={true}
              offset={0}
              duration={500}
            >
              <div className="navItem">Work</div>
            </Link>
            <Link
              activeClass="activeMenu"
              to="contacts"
              spy={true}
              smooth={true}
              offset={0}
              duration={500}
            >
              <div className="navItem">Contact</div>
            </Link>
            <div className="navLinksContainer">
              <a href="https://www.linkedin.com/in/julie-park-developer/">
                <img
                  className="navLinks"
                  alt="LinkedIn logo"
                  src={LinkedInLogo}
                />
              </a>
              <a href="https://github.com/jpark0224">
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
