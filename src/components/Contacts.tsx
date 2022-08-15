import React, { useRef, useState } from "react";
import emailjs from "emailjs-com";
import { Container, Form, Stack, Button } from "react-bootstrap";
import { Link, animateScroll as scroll } from "react-scroll";
import { useParallax } from "react-scroll-parallax";

import LinkedInLogo from "../assets/linkedin-5.png";
import GithubLogo from "../assets/github.png";
import "../styles/styles.css";
import "../styles/Contacts.css";

const Contacts = () => {
  const parallaxLeft = useParallax({
    opacity: [0, 3],
  });

  const parallaxRight = useParallax({
    opacity: [0, 3],
  });

  const submitHandler = async (event: React.FormEvent) => {
    event.preventDefault();

    const target = event.target as HTMLFormElement;

    console.log(target);

    emailjs
      .sendForm(
        "service_e97l40t",
        "template_nabei1w",
        target,
        "d0AM8epEJvAYCDe0r"
      )
      .then((res) => {
        console.log(res);
      })
      .catch((err) => console.log(err));
  };

  return (
    <Container fluid className="contactsContainer">
      <section className="contactsMainContainer">
        <section
          className="contactsLeftContainer"
          ref={parallaxLeft.ref as React.RefObject<HTMLDivElement>}
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
        </section>
        <section className="contactsRightContainer">
          <section className="contactsRightContents">
            <h1 className="contactsHeading">Get In Touch</h1>
            <h5 className="contactsSubheading">
              I am open for new opportunities.
            </h5>
            <section
              className="contactsElementsContainer"
              ref={parallaxRight.ref as React.RefObject<HTMLDivElement>}
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
                  <path
                    fill-rule="evenodd"
                    d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                    clip-rule="evenodd"
                  />
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
                  className="h-5 w-5 contactsIcons"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  width="30"
                >
                  <path
                    fill-rule="evenodd"
                    d="M2.94 6.412A2 2 0 002 8.108V16a2 2 0 002 2h12a2 2 0 002-2V8.108a2 2 0 00-.94-1.696l-6-3.75a2 2 0 00-2.12 0l-6 3.75zm2.615 2.423a1 1 0 10-1.11 1.664l5 3.333a1 1 0 001.11 0l5-3.333a1 1 0 00-1.11-1.664L10 11.798 5.555 8.835z"
                    clip-rule="evenodd"
                  />
                </svg>
                <p>julieparksw@gmail.com</p>
              </a>
              <a
                className="contactsElements"
                href="https://www.linkedin.com/in/julie-park-developer/"
              >
                <img
                  className="linkLogos"
                  alt="LinkedIn logo"
                  src={LinkedInLogo}
                  width="27"
                  height="27"
                />
                <p>linkedin.com/in/julie-park-developer/</p>
              </a>

              <a
                className="contactsElements"
                href="https://github.com/jpark0224"
              >
                <img
                  className="linkLogos"
                  alt="LinkedIn logo"
                  src={GithubLogo}
                  width="27"
                  height="27"
                />
                <p>github.com/jpark0224</p>
              </a>
            </section>
          </section>
        </section>
      </section>
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
