import React from "react";
import "../styles/Work.css";
import { useParallax } from "react-scroll-parallax";
import { useEffect, useState } from "react";
import { Container, Col, Row } from "react-bootstrap";

interface workProps {
  screenshot: string;
  title: string;
  description: string;
  demoLink: string;
  githubLink: string;
}

const WorkCardFrontEnd: React.FC<workProps> = (props) => {
  const [parallaxDisabled, setParallaxDisabled] = useState(true);
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  const parallax = useParallax({
    disabled: parallaxDisabled,
    opacity: [0, 3],
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
    <Container
      className="singleWorkContainer"
      ref={parallax.ref as React.RefObject<HTMLDivElement>}
    >
      <Row className="workMainContainer">
        <Col className="workLeftContainer" lg={true}>
          <a href={props.demoLink} target="_blank">
            <div className="zoom">
              <img
                className="workPicture"
                src={props.screenshot}
                alt="sample picture of application"
              ></img>
            </div>
          </a>
        </Col>
        <Col className="workRightContainer" lg={true}>
          <a href={props.demoLink} target="_blank" className="workSubheading">
            <h3>{props.title}</h3>
          </a>
          <p>{props.description}</p>
          <div className="workButtonContainer">
            <a href={props.demoLink} target="_blank">
              <button>Visit</button>
            </a>
            <a href={props.githubLink} target="_blank">
              <button>GitHub</button>
            </a>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default WorkCardFrontEnd;
