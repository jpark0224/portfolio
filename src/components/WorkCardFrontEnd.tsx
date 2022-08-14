import React from "react";

// import { useEffect, useState } from "react";
import "../styles/Work.css";
import { Container, Row, Col, Button, Stack } from "react-bootstrap";

interface workProps {
  screenshot: string;
  title: string;
  description: string;
  demoLink: string;
  githubLink: string;
}

const WorkCardFrontEnd: React.FC<workProps> = (props) => {
  return (
    <article className="singleWorkContainer">
      <div className="workLeftContainer">
        <img
          className="workPicture"
          src={props.screenshot}
          alt="sample picture of application"
        ></img>
      </div>
      <div className="workRightContainer">
        <h3 className="workSubheading">{props.title}</h3>
        <p>{props.description}</p>
        <div className="workButtonContainer">
          <a href={props.demoLink} target="_blank">
            <button>Visit</button>
          </a>
          <a href={props.githubLink} target="_blank">
            <button>GitHub</button>
          </a>
        </div>
      </div>
    </article>
  );
};

export default WorkCardFrontEnd;
