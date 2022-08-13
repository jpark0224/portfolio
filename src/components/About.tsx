import React from "react";
import "../styles/ScrollEffects.css";
import { useParallax } from "react-scroll-parallax";

// import { useEffect, useState } from "react";
import "../styles/About.css";
import { Container, Row, Col, Button, Stack } from "react-bootstrap";

const About = () => {
  const parallaxLeft = useParallax({
    speed: 10,
    translateY: [-20, 40],
    easing: "easeOutQuad",
  });

  const parallaxRight = useParallax({
    speed: 10,
    translateY: [-20, 30],
    easing: "easeOutQuad",
  });

  const parallaxIcons = useParallax({
    speed: 20,
    translateY: [-10, 10],
    scale: [0.5, 1.2],
    easing: "easeOutQuad",
  });

  return (
    <Container fluid className="aboutContainer">
      <section
        className="aboutLeftContainer"
        ref={parallaxLeft.ref as React.RefObject<HTMLDivElement>}
      >
        <div className="aboutLeftContents">
          <h1 className="aboutHeading">About Me</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
            posuere, massa eget rhoncus fringilla, libero urna egestas mauris,
            sit amet ullamcorper mauris metus a nibh. Proin sit amet elementum
            quam. Phasellus laoreet fringilla ex sit amet ultrices. Nullam vitae
            ligula vel quam dictum condimentum. Nunc tempor condimentum sem, sit
            amet maximus elit finibus id. Maecenas in nisl in augue efficitur
            tempus. Nulla facilisis dolor sit amet aliquam rhoncus. Vivamus non
            erat quis eros tempor vehicula. Vivamus finibus rutrum sapien, quis
            euismod orci eleifend ut. Donec justo neque, pharetra at dolor quis,
            finibus eleifend mi. Proin tempor tellus lorem, vel luctus ex mollis
            eget.
          </p>
        </div>
      </section>
      <section
        className="aboutRightContainer"
        ref={parallaxRight.ref as React.RefObject<HTMLDivElement>}
      >
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
          <div className="langTextContainer">
            <h5>Languages and Frameworks: </h5>
            <p>
              JavaScript, Python, HTML, CSS, React, jQuery, Node.js, Express.js,
              Axios, Django
            </p>
            <h5>Databases: </h5>
            <p>MongoDB, Mongoose, SQL, PostgreSQL, TablePlus, Insomnia</p>
          </div>
        </div>
      </section>
    </Container>
  );
};

export default About;
