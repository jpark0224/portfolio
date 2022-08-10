import React from "react";

// import { useEffect, useState } from "react";
import "../styles/Hero.css";
import { Link, animateScroll as scroll } from "react-scroll";
import { Container, Button } from "react-bootstrap";
import ProfilePic from "../assets/profile-6.png";

const Hero: React.FC = () => {
  return (
    <Container fluid className="heroContainer">
      <section className="heroLeftContainer">
        <div className="heroLeftContents">
          <h1 className="heroHeading">Julie Park</h1>
          <p className="heroSubheading">Junior Full-stack Web Developer</p>
          <div className="heroButtonContainer">
            <Link
              activeClass="active"
              to="work"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
            >
              <Button className="navItem" href="work">
                Portfolio
              </Button>
            </Link>
            <Link
              activeClass="active"
              to="contacts"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
            >
              <Button className="navItem" href="contacts">
                Contact Me
              </Button>
            </Link>
          </div>
        </div>
      </section>
      <section className="heroRightContainer">
        <img
          src={ProfilePic}
          alt="profile picture"
          className="profilePicture"
        />
      </section>
    </Container>
  );
};

export default Hero;
