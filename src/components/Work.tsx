import React from "react";

// import { useEffect, useState } from "react";
import "../styles/Work.css";
import { Container, Row, Col, Button, Stack } from "react-bootstrap";

const Work = () => {
  return (
    <Container fluid className="workContainer">
      <h1 className="workHeading">Portfolio</h1>
      <article className="singleWorkContainer">
        <div className="workLeftContainer">
          <img
            className="workPicture"
            src="https://via.placeholder.com/600x400.jpg"
            alt="sample picture of application"
          ></img>
        </div>
        <div className="workRightContainer">
          <h3 className="workSubheading">Find Me a Doc</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
            posuere, massa eget rhoncus fringilla, libero urna egestas mauris,
            sit amet ullamcorper mauris metus a nibh. Proin sit amet elementum
            quam. Phasellus laoreet fringilla ex sit amet ultrices. Nullam vitae
            ligula vel quam dictum condimentum. Nunc tempor condimentum sem, sit
            amet maximus elit finibus id. Maecenas in nisl in augue efficitur
            tempus. Nulla facilisis dolor sit amet aliquam rhoncus.
          </p>
          <div className="workButtonContainer">
            <Button>Visit</Button>
            <Button>GitHub</Button>
          </div>
        </div>
      </article>
    </Container>
  );
};

export default Work;
