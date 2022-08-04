import React from "react";

// import { useEffect, useState } from "react";
// import "../../src/App.css";
import { Container, Row, Col, Button, Stack } from "react-bootstrap";

const Work = () => {
  return (
    <Container>
      <Row>
        <h1>Portfolio</h1>
        <Col>
          <img src="https://via.placeholder.com/600x400.jpg"></img>
        </Col>
        <Col>
          <h3>Find Me a Doc</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
            posuere, massa eget rhoncus fringilla, libero urna egestas mauris,
            sit amet ullamcorper mauris metus a nibh. Proin sit amet elementum
            quam. Phasellus laoreet fringilla ex sit amet ultrices. Nullam vitae
            ligula vel quam dictum condimentum. Nunc tempor condimentum sem, sit
            amet maximus elit finibus id. Maecenas in nisl in augue efficitur
            tempus. Nulla facilisis dolor sit amet aliquam rhoncus.
          </p>
          <Stack direction="horizontal" gap={3}>
            <Button>Visit</Button>
            <Button>Case Study</Button>
          </Stack>
        </Col>
      </Row>
    </Container>
  );
};

export default Work;
