import React from "react";
import "../styles/About.css";
import { useParallax } from "react-scroll-parallax";
import { Container, Col, Row } from "react-bootstrap";
import { useEffect, useState } from "react";

const About: React.FC = () => {
  const [parallaxDisabled, setParallaxDisabled] = useState(true);
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  const parallaxLeft = useParallax({
    disabled: parallaxDisabled,
    opacity: [0, 4],
  });

  const parallaxRight = useParallax({
    disabled: parallaxDisabled,

    opacity: [0, 4],
  });

  const parallaxIcons = useParallax({
    disabled: parallaxDisabled,
    speed: 20,
    translateY: [-10, 10],
    scale: [0.5, 1.2],
    easing: "easeOutQuad",
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
    if (screenWidth < 768) {
      setParallaxDisabled(true);
    } else {
      setParallaxDisabled(false);
    }
    // console.log(screenWidth, parallaxDisabled);
  });

  return (
    <Container fluid className="aboutContainer">
      <Row className="aboutContentsContainer">
        <Col className="aboutLeftContainer" lg={true}>
          <div className="aboutLeftContents">
            <h1 className="aboutHeading">About Me</h1>
            <div
              className="aboutText"
              ref={parallaxLeft.ref as React.RefObject<HTMLDivElement>}
            >
              <p>
                Hello! I am <span> Julie</span>,{" "}
                <span>Junior Full-stack Web Developer </span>
                who finished General Assembly's Software Engineering Immersive
                course in May 2022.
              </p>

              <p>
                I am passionate about <span>tackling real-life problems </span>
                through technology. Prior to my current role, I was an
                accredited <span>Psychotherapist</span> and{" "}
                <span>Social Worker</span> with experience in both{" "}
                <span>New York</span> and London <span>NHS hospitals.</span>
              </p>

              <p>
                My dream is to harness my experience in patient-centric care to{" "}
                <span>empower</span> users by providing <span>accessible</span>{" "}
                and <span>cost-effective</span> services that meet today's needs
                for scalable, remote and interconnected services.
              </p>
            </div>
          </div>
        </Col>
        <Col className="aboutRightContainer" lg={true}>
          <div className="aboutRightContents">
            <div
              className="langIconsContainer"
              ref={parallaxIcons.ref as React.RefObject<HTMLDivElement>}
            >
              <div className="iconRow">
                {/* basics */}
                <img
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original-wordmark.svg"
                  className="langIcon"
                  id="html"
                />
                <img
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original-wordmark.svg"
                  className="langIcon"
                  id="css"
                />
                <img
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original-wordmark.svg"
                  className="langIcon"
                  id="python"
                />
                <img
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg"
                  className="langIcon"
                  id="c"
                />
                {/* css frameworks */}
                {/* <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg"
                className="langIcon"
                id="bootstrap"
              />
              <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bulma/bulma-plain.svg"
                className="langIcon"
                id="bulma"
              /> */}
              </div>
              <div className="iconRow">
                {/* programming languages */}
                <img
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg"
                  className="langIcon"
                  id="js"
                />
                <img
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg"
                  className="langIcon"
                  id="ts"
                />
                {/* language libraries */}
                <img
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original-wordmark.svg"
                  className="langIcon"
                  id="react"
                />
                <img
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jquery/jquery-original-wordmark.svg"
                  className="langIcon"
                  id="jquery"
                />
              </div>
              <div className="iconRow">
                {/* backend */}
                <img
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original-wordmark.svg"
                  className="langIcon"
                  id="mongodb"
                />
                <img
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original-wordmark.svg"
                  className="langIcon"
                  id="express"
                />
                <img
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original-wordmark.svg"
                  className="langIcon"
                  id="node"
                />
                <img
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/django/django-plain-wordmark.svg"
                  className="langIcon"
                  id="django"
                />

                {/* data management */}
                <img
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original-wordmark.svg"
                  className="langIcon"
                  id="postgresql"
                />
              </div>
              <div className="iconRow">
                {/* deployment */}
                {/* <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/heroku/heroku-plain-wordmark.svg"
                className="langIcon"
                id="heroku"
              />
              <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original-wordmark.svg"
                className="langIcon"
                id="git"
              />
              <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/npm/npm-original-wordmark.svg"
                className="langIcon"
                id="npm"
              /> */}
              </div>
            </div>
            <div
              className="langTextContainer"
              ref={parallaxRight.ref as React.RefObject<HTMLDivElement>}
            >
              <h5>Languages and Frameworks: </h5>
              <p>
                JavaScript, Python, HTML, CSS, React, jQuery, Node.js,
                Express.js, Axios, Django
              </p>
              <h5>Databases: </h5>
              <p>MongoDB, Mongoose, SQL, PostgreSQL, TablePlus, Insomnia</p>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default About;
