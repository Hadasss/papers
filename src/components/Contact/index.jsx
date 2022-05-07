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
    firstName.value = "";
    lastName.value = "";
    email.value = "";
    message.value = "";
  }

  return (
    <section className="contact-form">
      <h1 className="borderized">Contact me</h1>

      <Form className="col-lg-6 col-sm-10 p-3" onSubmit={handleSubmit}>
        <Form.Label>Your Name</Form.Label>
        <Row className="mb-3">
          <Col>
            <Form.Control placeholder="First name" required />
          </Col>
          <Col>
            <Form.Control placeholder="Last name" required />
          </Col>
        </Row>

        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" required />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Message</Form.Label>
          <Form.Control
            as="textarea"
            rows={4}
            placeholder="Your Message"
            required
          />
        </Form.Group>

        <Button variant="danger" type="submit">
          Submit
        </Button>
      </Form>
    </section>
  );
}

export default Contact;
