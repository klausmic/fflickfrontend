import React from "react";
import { Container, Row, Col, Button, Carousel, Accordion, Card } from "react-bootstrap";
import { FaStar, FaUserGraduate, FaLightbulb } from "react-icons/fa";
import "animate.css"; // Animation library
import "./Home.css"; // Custom CSS for modern styling

const Home = () => {
  return (
    <div className="homepage">
      {/* Hero Section */}
      <div className="hero">
        <Container className="text-center text-white">
          <h1 className="animate__animated animate__fadeInDown">
            Welcome to <span className="highlight">Future-Flick</span>
          </h1>
          <p className="lead animate__animated animate__fadeInUp">
            Empowering Engineering Students to Shine Bright in Their Journey.
          </p>
          <Button
            variant="light"
            size="lg"
            href="/services"
            className="cta-button animate__animated animate__bounceIn"
          >
            Explore Our Services
          </Button>
        </Container>
      </div>

      {/* Why Choose Us Section */}
      <Container className="my-5">
        <h2 className="text-center section-title">Why Choose Us?</h2>
        <Row className="text-center mt-4">
          <Col md={4} className="animate__animated animate__fadeInLeft">
            <FaUserGraduate className="icon" />
            <h3>Expert Mentors</h3>
            <p>Learn from industry professionals passionate about your success.</p>
          </Col>
          <Col md={4} className="animate__animated animate__fadeInUp">
            <FaLightbulb className="icon" />
            <h3>Innovative Approach</h3>
            <p>Our programs are tailored for the tech-savvy generation.</p>
          </Col>
          <Col md={4} className="animate__animated animate__fadeInRight">
            <FaStar className="icon" />
            <h3>Proven Track Record</h3>
            <p>Our students consistently achieve outstanding results.</p>
          </Col>
        </Row>
      </Container>

      {/* Testimonials Section */}
      <Container className="my-5">
        <h2 className="text-center section-title">What Our Students Say</h2>
        <Carousel className="mt-4 testimonials-carousel" interval={3000}>
          <Carousel.Item>
            <Card className="p-4 text-center">
              <Card.Text>"This program transformed my approach to learning!"</Card.Text>
              <Card.Title>- Kushal</Card.Title>
            </Card>
          </Carousel.Item>
          <Carousel.Item>
            <Card className="p-4 text-center">
              <Card.Text>"The mentorship here is unmatched."</Card.Text>
              <Card.Title>- Priya</Card.Title>
            </Card>
          </Carousel.Item>
          <Carousel.Item>
            <Card className="p-4 text-center">
              <Card.Text>"I gained clarity and confidence for my future."</Card.Text>
              <Card.Title>- Ravi</Card.Title>
            </Card>
          </Carousel.Item>
        </Carousel>
      </Container>

      {/* FAQs Section */}
      <Container className="my-5">
        <h2 className="text-center section-title">FAQs</h2>
        <Accordion className="mt-4">
          <Accordion.Item eventKey="0">
            <Accordion.Header>What is Career Counselling?</Accordion.Header>
            <Accordion.Body>
              Career counselling helps students make informed decisions about their future.
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="1">
            <Accordion.Header>Who can enroll in your programs?</Accordion.Header>
            <Accordion.Body>
              Designed for engineering students seeking guidance for academic and career success.
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="2">
            <Accordion.Header>How do I get started?</Accordion.Header>
            <Accordion.Body>
              Contact us through the form, and our team will guide you every step of the way.
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
      </Container>

      {/* Call to Action */}
      <div className="cta">
        <Container className="text-center">
          <h3 className="animate__animated animate__fadeIn">
            Ready to take the first step toward your dream career?
          </h3>
          <Button
            variant="primary"
            size="lg"
            href="/contact"
            className="animate__animated animate__pulse animate__infinite"
          >
            Contact Us Today
          </Button>
        </Container>
      </div>
    </div>
  );
};

export default Home;
