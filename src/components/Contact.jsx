import React from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import "./Contact.css"

const ContactUs = () => {
  return (
    <div className="contact-us py-5">
      <Container>
        <h2 className="text-center mb-4">Contact Us</h2>
        <p className="text-center mb-5">
          Have questions or need guidance? We’re here to help. Fill out the form below, and we’ll get back to you as soon as possible.
        </p>
        <Row>
          {/* Contact Form */}
          <Col md={6} className="mb-4">
            <Form>
              <Form.Group className="mb-3" controlId="name">
                <Form.Label>Name</Form.Label>
                <Form.Control type="text" placeholder="Enter your name" required />
              </Form.Group>

              <Form.Group className="mb-3" controlId="email">
                <Form.Label>Email</Form.Label>
                <Form.Control type="email" placeholder="Enter your email" required />
              </Form.Group>

              <Form.Group className="mb-3" controlId="message">
                <Form.Label>Message</Form.Label>
                <Form.Control as="textarea" rows={4} placeholder="Enter your message" required />
              </Form.Group>

              <Button variant="primary" type="submit">
                Submit
              </Button>
            </Form>
          </Col>

          {/* Contact Information */}
          <Col md={6}>
            <h4>Get In Touch</h4>
            <p><strong>Email:</strong> fflick@gmail.com</p>
            <p><strong>Phone:</strong> +91 98765 43210</p>
            {/* <p><strong>Address:</strong> 123, fflick, India</p> */}

            <h5 className="mt-4">Follow Us</h5>
            <div className="social-icons">
              <a href="#" className="me-3">
                <i className="fab fa-facebook fa-2x text-primary"></i>
              </a>
              <a href="#" className="me-3">
                <i className="fab fa-twitter fa-2x text-info"></i>
              </a>
              <a href="#">
                <i className="fab fa-linkedin fa-2x text-primary"></i>
              </a>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default ContactUs;
