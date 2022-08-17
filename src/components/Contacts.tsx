import React from "react";
import emailjs from "emailjs-com";
import { Container, Form, Row, Col, Stack } from "react-bootstrap";
import { Link } from "react-scroll";
import { useParallax } from "react-scroll-parallax";
import { useEffect, useState } from "react";

import "../styles/styles.css";
import "../styles/Contacts.css";

import * as dotenv from "dotenv";

dotenv.config();

const Contacts = () => {
  const [parallaxDisabled, setParallaxDisabled] = useState(true);
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  const parallaxLeft = useParallax({
    disabled: parallaxDisabled,
    translateX: [-40, 50],
  });

  const parallaxRight = useParallax({
    disabled: parallaxDisabled,
    translateX: [40, -40],
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
    if (screenWidth < 1116) {
      setParallaxDisabled(true);
    } else {
      setParallaxDisabled(false);
    }
    // console.log(screenWidth, parallaxDisabled);
  });

  const submitHandler = async (event: React.FormEvent) => {
    event.preventDefault();

    const target = event.target as HTMLFormElement;

    console.log(target);

    emailjs
      .sendForm(
        process.env.REACT_APP_EMAIL_API_SERVICE_KEY as string,
        process.env.REACT_APP_EMAIL_API_TEMPLATE_KEY as string,
        target,
        process.env.REACT_APP_EMAIL_API_USER_KEY as string
      )
      .then((res) => {
        console.log(res);
      })
      .catch((err) => console.log(err));
  };

  return (
    <Container fluid className="contactsContainer">
      <Row className="contactsMainContainer">
        <Col className="contactsLeftContainer" lg={true}>
          <section className="contactsLeftContents">
            <h1 className="contactsHeading">Get In Touch</h1>
            <h5 className="contactsSubheading">
              I am open for new opportunities.
            </h5>
            <section
              className="contactsElementsContainer"
              ref={parallaxLeft.ref as React.RefObject<HTMLDivElement>}
            >
              <a
                className="contactsElements"
                href="https://goo.gl/maps/HcpWDvAzFk1oCw7a7"
              >
                {/* location icon */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 contactsIcons"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  width="30"
                >
                  <path d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" />
                </svg>
                <p>London, United Kingdom</p>
              </a>
              <a
                className="contactsElements"
                href="mailto:julieparksw@gmail.com"
              >
                {/* mail icon */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  width="30"
                >
                  <path d="M2.94 6.412A2 2 0 002 8.108V16a2 2 0 002 2h12a2 2 0 002-2V8.108a2 2 0 00-.94-1.696l-6-3.75a2 2 0 00-2.12 0l-6 3.75zm2.615 2.423a1 1 0 10-1.11 1.664l5 3.333a1 1 0 001.11 0l5-3.333a1 1 0 00-1.11-1.664L10 11.798 5.555 8.835z" />
                </svg>
                <p>julieparksw@gmail.com</p>
              </a>
              <a
                className="contactsElements"
                href="https://www.linkedin.com/in/julie-park-developer/"
              >
                <svg
                  fill="currentColor"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 50 50"
                  width="30px"
                  height="30px"
                >
                  <path d="M25,2C12.318,2,2,12.317,2,25s10.318,23,23,23s23-10.317,23-23S37.682,2,25,2z M18,35h-4V20h4V35z M16,17 c-1.105,0-2-0.895-2-2c0-1.105,0.895-2,2-2s2,0.895,2,2C18,16.105,17.105,17,16,17z M37,35h-4v-5v-2.5c0-1.925-1.575-3.5-3.5-3.5 S26,25.575,26,27.5V35h-4V20h4v1.816C27.168,20.694,28.752,20,30.5,20c3.59,0,6.5,2.91,6.5,6.5V35z" />
                </svg>
                <p>linkedin.com/in/julie-park-developer/</p>
              </a>

              <a
                className="contactsElements"
                href="https://github.com/jpark0224"
              >
                <svg
                  fill="currentColor"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  width="30px"
                  height="30px"
                >
                  <path d="M10.9,2.1c-4.6,0.5-8.3,4.2-8.8,8.7c-0.5,4.7,2.2,8.9,6.3,10.5C8.7,21.4,9,21.2,9,20.8v-1.6c0,0-0.4,0.1-0.9,0.1 c-1.4,0-2-1.2-2.1-1.9c-0.1-0.4-0.3-0.7-0.6-1C5.1,16.3,5,16.3,5,16.2C5,16,5.3,16,5.4,16c0.6,0,1.1,0.7,1.3,1c0.5,0.8,1.1,1,1.4,1 c0.4,0,0.7-0.1,0.9-0.2c0.1-0.7,0.4-1.4,1-1.8c-2.3-0.5-4-1.8-4-4c0-1.1,0.5-2.2,1.2-3C7.1,8.8,7,8.3,7,7.6c0-0.4,0-0.9,0.2-1.3 C7.2,6.1,7.4,6,7.5,6c0,0,0.1,0,0.1,0C8.1,6.1,9.1,6.4,10,7.3C10.6,7.1,11.3,7,12,7s1.4,0.1,2,0.3c0.9-0.9,2-1.2,2.5-1.3 c0,0,0.1,0,0.1,0c0.2,0,0.3,0.1,0.4,0.3C17,6.7,17,7.2,17,7.6c0,0.8-0.1,1.2-0.2,1.4c0.7,0.8,1.2,1.8,1.2,3c0,2.2-1.7,3.5-4,4 c0.6,0.5,1,1.4,1,2.3v2.6c0,0.3,0.3,0.6,0.7,0.5c3.7-1.5,6.3-5.1,6.3-9.3C22,6.1,16.9,1.4,10.9,2.1z" />
                </svg>
                <p>github.com/jpark0224</p>
              </a>
            </section>
          </section>
        </Col>
        <Col
          className="contactsRightContainer"
          lg={true}
          ref={parallaxRight.ref as React.RefObject<HTMLDivElement>}
        >
          <Form onSubmit={submitHandler} className="formContainer">
            <Stack direction="horizontal" gap={3}>
              <Form.Group className="formGroup" controlId="name">
                <Stack gap={2}>
                  <label className="formLabels">NAME</label>
                  <input
                    type="text"
                    name="name"
                    placeholder="John Doe / Jane Doe"
                  />
                </Stack>
              </Form.Group>
              <Form.Group className="formGroup" controlId="email">
                <Stack gap={2}>
                  <label className="formLabels">EMAIL ADDRESSS</label>
                  <input
                    type="email"
                    name="email"
                    placeholder="name@example.com"
                  />
                </Stack>
              </Form.Group>
            </Stack>
            <Form.Group className="formGroup" controlId="subject">
              <Stack gap={2}>
                <label className="formLabels">SUBJECT</label>
                <input
                  type="text"
                  name="subject"
                  placeholder="Let's work together"
                />
              </Stack>
            </Form.Group>
            <Form.Group className="formGroup" controlId="message">
              <Stack gap={2}>
                <label className="formLabels">MESSAGE</label>
                <textarea
                  className="message"
                  name="message"
                  placeholder="Write something..."
                />
              </Stack>
            </Form.Group>
            <button className="submitButton" type="submit">
              Send Message
            </button>
          </Form>
        </Col>
      </Row>
      <section className="toTheTopContainer">
        <section className="toTheTopButton">
          <Link to="hero" spy={true} smooth={true} offset={-70} duration={500}>
            <span></span>
            <span></span>
            <span></span>To the top
          </Link>
        </section>
      </section>
    </Container>
  );
};

export default Contacts;
