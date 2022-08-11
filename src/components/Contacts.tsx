import React, { useRef, useState } from "react";
import emailjs from "emailjs-com";
import { Container, Form, Stack, Button } from "react-bootstrap";
import LinkedInLogo from "../assets/linkedin-5.png";
import GithubLogo from "../assets/github.png";
import "../styles/styles.css";
import "../styles/Contacts.css";

const Contacts = () => {
  const submitHandler = async (event: React.FormEvent) => {
    event.preventDefault();

    const target = event.target as HTMLFormElement;

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
      <h1 className="contactsHeading">Get In Touch</h1>
      <h5 className="contactsSubheading">I am open for new opportunities</h5>
      <div className="contactsLinks">
        <a href="https://www.linkedin.com/in/julie-park-developer/">
          <img alt="LinkedIn logo" src={LinkedInLogo} width="30" height="30" />
        </a>
        <a href="https://github.com/jpark0224">
          <img alt="LinkedIn logo" src={GithubLogo} width="30" height="30" />
        </a>
      </div>
      <Form onSubmit={submitHandler} className="formContainer">
        <Stack direction="horizontal" gap={3}>
          <Form.Group className="formGroup" controlId="name">
            <Stack gap={2}>
              <label>Name</label>
              <input
                type="text"
                name="name"
                placeholder="John Doe / Jane Doe"
              />
            </Stack>
          </Form.Group>
          <Form.Group className="formGroup" controlId="email">
            <Stack gap={2}>
              <label>Email address</label>
              <input type="email" name="email" placeholder="name@example.com" />
            </Stack>
          </Form.Group>
        </Stack>
        <Form.Group className="formGroup" controlId="subject">
          <Stack gap={2}>
            <label>Subject</label>
            <input
              type="text"
              name="subject"
              placeholder="Let's work together"
            />
          </Stack>
        </Form.Group>
        <Form.Group className="formGroup" controlId="message">
          <Stack gap={2}>
            <label>Message</label>
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
    </Container>
  );
};

export default Contacts;
