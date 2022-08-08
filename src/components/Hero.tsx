import React from "react";

// import { useEffect, useState } from "react";
import "../styles/Hero.css";
import { Container, Button } from "react-bootstrap";
import ProfilePic from "../assets/profile-6.png";

const Hero: React.FC = () => {
  return (
    <Container fluid className="heroContainer">
      <section className="heroLeftContainer">
        <div className="heroLeftContents">
          <h1 className="heroHeading">Julie Park</h1>
          <p className="heroSubheading">Junior Full-stack Web Developer</p>
          <div className="heroButtonContainer">
            <Button>Portfolio</Button>
            <Button>Contact Me</Button>
          </div>
        </div>
      </section>
      <section className="heroRightContainer">
        <img
          src={ProfilePic}
          alt="profile picture"
          className="profilePicture"
        />
      </section>
    </Container>
  );
};

export default Hero;
