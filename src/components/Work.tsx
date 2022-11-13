import React from "react";

// import { useEffect, useState } from "react";
import "../styles/Work.css";
import { Container, Row, Col, Button, Stack } from "react-bootstrap";

import WorkCardFrontEnd from "./WorkCardFrontEnd";
import WorkCardFullStack from "./WorkCardFullStack";
import BabyShark from "../assets/baby-shark.png";
import FindMeADoc from "../assets/find-me-a-doc.png";
import SpaceCalendar from "../assets/space-calendar.png";
import Portfolio from "../assets/portfolio-desktop-mobile.png";
import GighubSocial from "../assets/gighub-social.png";

const Work: React.FC = () => {
  return (
    <Container fluid className="workContainer">
      <h1 className="workHeading">Portfolio</h1>
      <WorkCardFrontEnd
        screenshot={BabyShark}
        title={"Baby Shark Rhythm Game"}
        description={
          "A Guitar-Hero-style rhythm game utilising accurate time handling, setTimeout method, keyboard events, and DOM manipulation. "
        }
        demoLink={"https://jpark0224.github.io/Baby-Shark-rhythm-game/"}
        githubLink={"https://github.com/jpark0224/Baby-Shark-rhythm-game"}
      />
      <WorkCardFullStack
        screenshot={FindMeADoc}
        title={"Find Me a Doc"}
        description={
          "A MERN application which enables users to search for doctors based on their geolocation and write reviews, as well as providing registering and log-in functions for both doctors and patients."
        }
        demoLink={"https://findmeadoc.netlify.app/"}
        githubFELink={
          "https://github.com/jpark0224/project-3-findMeADoc-front-end"
        }
        githubBELink={"https://github.com/jpark0224/FindMeADoc"}
      />
      <WorkCardFullStack
        screenshot={GighubSocial}
        title={"Gighub Social"}
        description={
          "A React Web Application with Django REST framework. A social media platform where rock fans and bands can connect."
        }
        demoLink={"https://gighubsocial.netlify.app/"}
        githubFELink={"https://github.com/jpark0224/gighub_frontend/"}
        githubBELink={"https://github.com/jpark0224/gighub_backend/"}
      />
      <WorkCardFrontEnd
        screenshot={SpaceCalendar}
        title={"Space Calendar"}
        description={
          "A React Web Application with a calendar that shows a Picture of the Day from NASA and a single page per day with detailed information from the API."
        }
        demoLink={"https://spacepicturecalendar.netlify.app/"}
        githubLink={"https://github.com/jpark0224/project-2"}
      />
      <WorkCardFrontEnd
        screenshot={Portfolio}
        title={"Portfolio Website"}
        description={
          "A fully responsive single-page application built with React, TypeScript, and Bootstrap."
        }
        demoLink={"https://juliepark.dev"}
        githubLink={"https://github.com/jpark0224/portfolio"}
      />
    </Container>
  );
};

export default Work;
