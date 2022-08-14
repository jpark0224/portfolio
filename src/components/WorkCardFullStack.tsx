import React from "react";

// import { useEffect, useState } from "react";
import "../styles/Work.css";
import { DropdownButton, Dropdown } from "react-bootstrap";

interface workProps {
  title: string;
  description: string;
  demoLink: string;
  githubFELink: string;
  githubBELink: string;
}

const WorkCardFullStack: React.FC<workProps> = (props) => {
  return (
    <article className="singleWorkContainer">
      <div className="workLeftContainer">
        <img
          className="workPicture"
          src="https://via.placeholder.com/480x270.jpg"
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
