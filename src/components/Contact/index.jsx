import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function Contact() {
  const [formState, setFormState] = useState({
    firstName: "",
    lastName: "",
    email: "",
    message: "",
  });

  const { firstName, lastName, email, message } = formState;

  function handleSubmit(e) {
    e.preventDefault();
  }

  return (
    <section className="contact-form">
      <h1 className="borderized">Contact me</h1>

      <Form className="col-6 p-3" onSubmit={handleSubmit}>
        <Form.Label>Your Name</Form.Label>
        <Row className="mb-3">
          <Col>
            <Form.Control placeholder="First name" />
          </Col>
          <Col>
            <Form.Control placeholder="Last name" />
          </Col>
        </Row>

        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Message</Form.Label>
          <Form.Control as="textarea" rows={4} placeholder="Your Message" />
        </Form.Group>

        <Button variant="danger" type="submit">
          Submit
        </Button>
      </Form>
    </section>
  );
}

export default Contact;
