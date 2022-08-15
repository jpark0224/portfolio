import React from "react";

// import { useEffect, useState } from "react";
import "../styles/Work.css";
import { DropdownButton, Dropdown } from "react-bootstrap";
import { useParallax } from "react-scroll-parallax";

interface workProps {
  screenshot: string;
  title: string;
  description: string;
  demoLink: string;
  githubFELink: string;
  githubBELink: string;
}

const WorkCardFullStack: React.FC<workProps> = (props) => {
  const parallax = useParallax({
    opacity: [0, 3],
  });

  return (
    <article
      className="singleWorkContainer"
      ref={parallax.ref as React.RefObject<HTMLDivElement>}
    >
      <div className="workLeftContainer">
        <a href={props.demoLink} target="_blank">
          <div className="zoom">
            <img
              className="workPicture"
              src={props.screenshot}
              alt="sample picture of application"
            ></img>
          </div>
        </a>
      </div>

      <div className="workRightContainer">
        <a href={props.demoLink} target="_blank" className="workSubheading">
          <h3>{props.title}</h3>
        </a>
        <p>{props.description}</p>
        <div className="workButtonContainer">
          <a href={props.demoLink} target="_blank">
            <button>Visit</button>
          </a>
          <DropdownButton bsPrefix="custom" title="GitHub">
            <Dropdown.Item href={props.githubFELink} target="_blank">
              Front End
            </Dropdown.Item>
            <Dropdown.Item href={props.githubBELink} target="_blank">
              Back End
            </Dropdown.Item>
          </DropdownButton>
        </div>
      </div>
    </article>
  );
};

export default WorkCardFullStack;
