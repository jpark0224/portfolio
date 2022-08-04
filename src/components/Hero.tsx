import React from 'react';

// import { useEffect, useState } from "react";
// import "../../src/App.css";
import { Container, Row, Col, Button, Stack } from "react-bootstrap";
import ProfilePic from "../assets/profile-6.png"

const Hero: React.FC = () => {
  return (
    <Container>
    <Row>
        <Col>
            <Stack gap={3}>
                <h1>Julie Park</h1>
                <p>Junior Full-stack Web Developer</p>
                    <Stack direction="horizontal" gap={3}>
                        <Button>Portfolio</Button>
                        <Button>Contact Me</Button>
                    </Stack>
            </Stack>
        </Col>
        <Col><img src={ProfilePic} alt="profile picture"/></Col>
      </Row>
    </Container>
  );
};

export default Hero;