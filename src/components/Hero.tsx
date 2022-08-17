import React from "react";

import "../styles/Hero.css";
import { Link } from "react-scroll";
import { Container, Col, Row } from "react-bootstrap";
import ProfilePic from "../assets/profile-6.png";
import { useParallax } from "react-scroll-parallax";
import { useEffect, useState } from "react";

const Hero: React.FC = () => {
  const [parallaxDisabled, setParallaxDisabled] = useState(true);
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  const parallaxLeft = useParallax({
    disabled: parallaxDisabled,
    translateX: [60, -50],
  });

  const parallaxRight = useParallax({
    disabled: parallaxDisabled,
    translateX: [-50, 40],
  });

  const handleResize = () => {
    setScreenWidth(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => {
      window.addEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    if (screenWidth < 1116) {
      setParallaxDisabled(true);
    } else {
      setParallaxDisabled(false);
    }
    // console.log(screenWidth, parallaxDisabled);
  });

  return (
    <Container fluid className="heroContainer">
      <Row className="heroMainContainer">
        <Col
          className="heroLeftContainer"
          ref={parallaxLeft.ref as React.RefObject<HTMLDivElement>}
        >
          <div className="heroLeftContents">
            <h1 className="heroHeading">Julie Park</h1>
            <p className="heroSubheading typing">
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
        </Col>
        <Col
          className="heroRightContainer"
          ref={parallaxRight.ref as React.RefObject<HTMLDivElement>}
        >
          <img
            src={ProfilePic}
            alt="profile picture"
            className="profilePicture"
          />
        </Col>
      </Row>
      <Row className="scrollButton">
        <Link to="about" spy={true} smooth={true} offset={-70} duration={500}>
          <div className="arrowContainer">
            <span></span>
            <span></span>
            <span></span>
          </div>
          <p>Scroll</p>
        </Link>
      </Row>
    </Container>
  );
};

export default Hero;
