import React from "react";

// import { useEffect, useState } from "react";
import "../styles/Work.css";
import { Container, Row, Col, Button, Stack } from "react-bootstrap";
import WorkCardFrontEnd from "./WorkCardFrontEnd";
import WorkCardFullStack from "./WorkCardFullStack";

const Work: React.FC = () => {
  return (
    <Container fluid className="workContainer">
      <h1 className="workHeading">Portfolio</h1>
      <WorkCardFrontEnd
        title={"Baby Shark Rhythm Game"}
        description={
          "A Guitar-Hero-style rhythm game utilising accurate time handling, setTimeout method, keyboard events, and DOM manipulation. "
        }
        demoLink={"https://jpark0224.github.io/Baby-Shark-rhythm-game/"}
        githubLink={"https://github.com/jpark0224/Baby-Shark-rhythm-game"}
      />
      <WorkCardFullStack
        title={"Find Me a Doc"}
        description={
          "A MERN application which enables users to search for doctors based on their geolocation and write reviews, as well as providing registering and log-in functions for both doctors and patients."
        }
        demoLink={"https://github.com/jpark0224"}
        githubFELink={
          "https://github.com/jpark0224/project-3-findMeADoc-front-end"
        }
        githubBELink={"https://github.com/jpark0224/FindMeADoc"}
      />
    </Container>
  );
};

export default Work;
