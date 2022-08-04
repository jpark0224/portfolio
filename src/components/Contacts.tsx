import React, { useRef, useState } from "react";
import { Container, Form, Stack, Button } from "react-bootstrap";
import LinkedInLogo from "../assets/linkedin-5.png";
import GithubLogo from "../assets/github.png";
import "../styles.css";

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
    <>
      <h1>Get In Touch</h1>
      <Container>
        <h5>I am open for a new opportunity</h5>
        <a href="https://www.linkedin.com/in/julie-park-developer/">
          <img alt="LinkedIn logo" src={LinkedInLogo} width="30" height="30" />
        </a>
        <a href="https://github.com/jpark0224">
          <img alt="LinkedIn logo" src={GithubLogo} width="30" height="30" />
        </a>
        <Form onSubmit={submitHandler} className="formContainer">
          <Stack direction="horizontal" gap={3}>
            <Form.Group className="formGroup" controlId="name">
              <Form.Label>Name</Form.Label>
              <Form.Control type="text" placeholder="John Doe / Jane Doe" />
            </Form.Group>
            <Form.Group className="formGroup" controlId="email">
              <Form.Label>Email address</Form.Label>
              <Form.Control type="email" placeholder="name@example.com" />
            </Form.Group>
          </Stack>
          <Form.Group className="formGroup" controlId="subject">
            <Form.Label>Subject</Form.Label>
            <Form.Control type="text" placeholder="Let's work together!" />
          </Form.Group>
          <Form.Group className="formGroup" controlId="message">
            <Form.Label>Message</Form.Label>
            <Form.Control as="textarea" rows={3} type="text" />
          </Form.Group>
          <Button variant="primary" type="submit">
            Send Message
          </Button>
        </Form>
      </Container>
    </>
  );
};

export default Contacts;
