import React from "react";
import { Container, Row, Col, Image } from "react-bootstrap";
import "animate.css";
import "../styles/AboutUs.css";

const AboutUs = () => {
  return (
    <div className="about-us">
      <Container>
        <Row className="align-items-center py-5">
          {/* Left Side: Text Content */}
          <Col md={6} className="mb-4 mb-md-0">
            <h2 className="mb-3 animate__animated animate__fadeInLeft">About Us</h2>
            <p className="animate__animated animate__fadeInLeft animate__delay-1s">
              At <strong>Future-Flick</strong>, our mission is to guide engineering
              students towards a bright and successful future. With a team of dedicated experts, we
              provide personalized guidance, skill development, and resources tailored to each
              individual.
            </p>
            <p className="animate__animated animate__fadeInLeft animate__delay-2s">
              We believe every student has unique potential, and our goal is to help you unlock it.
              Join us to take the first step towards achieving your dreams.
            </p>
          </Col>

          {/* Right Side: Image */}
          <Col md={6}>
            {/* <Image
              src="https://via.placeholder.com/600x400"
              alt="About Us"
              className="img-fluid rounded shadow-lg animate__animated animate__zoomIn"
            /> */}
          </Col>
        </Row>

        {/* Mission and Vision Section */}
        <Row className="mission-vision mt-5">
          <Col
            md={6}
            className="mb-4 mb-md-0 animate__animated animate__fadeInUp"
            style={{ animationDelay: "0.5s" }}
          >
            <h3>Our Mission</h3>
            <p>
              To empower students by providing exceptional guidance and innovative solutions that
              set the foundation for a successful career.
            </p>
          </Col>
          <Col
            md={6}
            className="animate__animated animate__fadeInUp"
            style={{ animationDelay: "1s" }}
          >
            <h3>Our Vision</h3>
            <p>
              To become the go-to platform for career counselling and skill development for
              engineering students worldwide.
            </p>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default AboutUs;
