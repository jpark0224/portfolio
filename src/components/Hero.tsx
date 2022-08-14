import React from "react";

// import { useEffect, useState } from "react";
import "../styles/Hero.css";
import { Link, animateScroll as scroll } from "react-scroll";
import { Container, Row } from "react-bootstrap";
import ProfilePic from "../assets/profile-6.png";
import { useParallax } from "react-scroll-parallax";

const Hero: React.FC = () => {
  const parallaxLeft = useParallax({
    translateX: [100, -100],
  });

  const parallaxRight = useParallax({
    translateX: [-100, 100],
  });

  return (
    <Container fluid className="heroContainer">
      <section className="heroMainContainer">
        <section
          className="heroLeftContainer"
          ref={parallaxLeft.ref as React.RefObject<HTMLDivElement>}
        >
          <div className="heroLeftContents">
            <h1 className="heroHeading">Julie Park</h1>
            <p className="heroSubheading typing-demo">
              Junior Full-stack Web Developer
            </p>
            <div className="heroButtonContainer">
              <Link
                to="work"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
                <button>Portfolio</button>
              </Link>
              <Link
                to="contacts"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
                <button>Contact Me</button>
              </Link>
            </div>
          </div>
        </section>
        <section
          className="heroRightContainer"
          ref={parallaxRight.ref as React.RefObject<HTMLDivElement>}
        >
          <img
            src={ProfilePic}
            alt="profile picture"
            className="profilePicture"
          />
        </section>
      </section>
      <section className="heroScrollContainer">
        <section className="scrollButton">
          <Link to="about" spy={true} smooth={true} offset={-70} duration={500}>
            <span></span>
            <span></span>
            <span></span>Scroll
          </Link>
        </section>
      </section>
    </Container>
  );
};

export default Hero;
