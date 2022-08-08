import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import "bootstrap/dist/css/bootstrap.css";
import "../styles/Footer.css";
import LinkedInLogo from "../assets/linkedin-5.png";
import GithubLogo from "../assets/github.png";

function Footer() {
  return (
    <footer className="footer">
      <Container className="footerContainer">
        <Navbar.Brand className="footerCopyright" href="#home">
          © Julie Park 2022
        </Navbar.Brand>
        <Nav className="justify-content-end" style={{ width: "100%" }}>
          <div className="navLinksContainer">
            <a href="https://www.linkedin.com/in/julie-park-developer/">
              <img
                className="navLinks"
                alt="LinkedIn logo"
                src={LinkedInLogo}
              />
            </a>
            <a className="navLinks" href="https://github.com/jpark0224">
              <img className="navLinks" alt="LinkedIn logo" src={GithubLogo} />
            </a>
          </div>
        </Nav>
      </Container>
    </footer>
  );
}

export default Footer;
