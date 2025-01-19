import React from "react";
import { Container, Row, Col, Card, Button, Badge } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./GroupCounselling.css";

const GroupCounselling = () => {
  return (
    <div className="group-counselling-page">
      <Container>
        <div className="text-center mb-5">
          <h1 className="title animate__animated animate__fadeInDown">Group Counselling</h1>
          <p className="subtitle animate__animated animate__fadeInUp">
            Collaborate and learn in a focused group setting with expert guidance.
          </p>
        </div>
        <Row>
          <Col md={8} className="animate__animated animate__fadeInLeft">
            <Card className="custom-card shadow">
              <Card.Body>
                <h3 className="card-title">Session Highlights</h3>
                <Card.Text>
                  <ul>
                    <li>
                      <strong>Domain-Specific Batches:</strong> Groups created based on your
                      interests (Cloud, AI, Web Development, etc.).
                    </li>
                    <li>
                      <strong>Expert Interaction:</strong> Dedicated sessions with industry
                      professionals who provide a roadmap, answer questions, and share insights.
                    </li>
                    <li>
                      <strong>Practical Guidance:</strong> Tips on selecting impactful project
                      use cases and preparing for interviews while working on projects.
                    </li>
                    <li>
                      <strong>Holistic Approach:</strong> Peer-to-peer learning, mock interviews,
                      resume reviews, and LinkedIn profile optimization.
                    </li>
                  </ul>
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4} className="animate__animated animate__fadeInRight">
            <Card className="pricing-card shadow">
              <Card.Body className="text-center">
                <h3 className="pricing-title">Pricing</h3>
                <p className="original-price">
                  <del>₹2699/-</del>
                  <Badge bg="danger" className="ms-2">
                    70% OFF
                  </Badge>
                </p>
                <h2 className="discounted-price">₹799/-</h2>
                <p className="pricing-subtext">
                  Get the best group learning experience at an unbeatable price!
                </p>
                <Button variant="success" size="lg" className="cta-button">
                  Join Now
                </Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>
        <div className="text-center mt-5">
          <p className="closing-note">
            Be part of a focused batch and receive expert mentorship to kickstart your career
            confidently.
          </p>
        </div>
      </Container>
    </div>
  );
};

export default GroupCounselling;
