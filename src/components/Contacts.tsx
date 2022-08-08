import React, { useRef, useState } from "react";
import { Container, Form, Stack, Button } from "react-bootstrap";
import LinkedInLogo from "../assets/linkedin-5.png";
import GithubLogo from "../assets/github.png";
import "../styles/styles.css";
import "../styles/Contacts.css";

// import { useEffect, useState } from "react";
// import "../../src/App.css";

const Contacts = () => {
  //   const textInputRef = useRef<HTMLInputElement>(null);

  const submitHandler = async (event: React.FormEvent) => {
    event.preventDefault();
    const { name, email, subject, message } =
      event.target as typeof event.target & {
        name: { value: string };
        email: { value: string };
        subject: { value: string };
        message: { value: string };
      };
    console.log(name.value, email.value, subject.value, message.value);

    // await fetch("/route", {
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    //   method: "POST",
    //   body: JSON.stringify({
    //     name: name.value,
    //     email: email.value,
    //     subject: subject.value,
    //     message: message.value,
    //   }),
    // });
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
              <input type="text" placeholder="John Doe / Jane Doe" />
            </Stack>
          </Form.Group>
          <Form.Group className="formGroup" controlId="email">
            <Stack gap={2}>
              <label>Email address</label>
              <input type="email" placeholder="name@example.com" />
            </Stack>
          </Form.Group>
        </Stack>
        <Form.Group className="formGroup" controlId="subject">
          <Stack gap={2}>
            <label>Subject</label>
            <input type="text" placeholder="Let's work together" />
          </Stack>
        </Form.Group>
        <Form.Group className="formGroup" controlId="message">
          <Stack gap={2}>
            <label>Message</label>
            <textarea className="message" placeholder="Write something..." />
          </Stack>
        </Form.Group>
        <Button className="submitButton" variant="primary" type="submit">
          Send Message
        </Button>
      </Form>
    </Container>
  );
};

export default Contacts;
