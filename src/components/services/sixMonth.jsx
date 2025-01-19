import React from "react";
import { Container, Row, Col, Card, Button, Badge } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./MentorshipPlan.css";

const SixMonthMentorship = () => {
  return (
    <div className="mentorship-plan-page">
      <Container>
        <div className="text-center mb-5">
          <h1 className="title animate__animated animate__fadeInDown">
            6-Month Mentorship Plan
          </h1>
          <p className="subtitle animate__animated animate__fadeInUp">
            A structured and guided approach to achieve your dream career.
          </p>
        </div>
        <Row>
          <Col md={8} className="animate__animated animate__fadeInLeft">
            <Card className="custom-card shadow">
              <Card.Body>
                <h3 className="card-title">Program Highlights</h3>
                <Card.Text>
                  <ul>
                    <li>
                      <strong>Month 1:</strong> Foundation Building – Skill assessment, 
                      personalized roadmap, course selection, and soft skills training.
                    </li>
                    <li>
                      <strong>Month 2:</strong> Core Learning – Dive deep into technical skills, 
                      hands-on assignments, and expert guidance sessions.
                    </li>
                    <li>
                      <strong>Month 3:</strong> Intermediate Progression – Project ideation, 
                      mock interviews, and resume drafting.
                    </li>
                    <li>
                      <strong>Month 4:</strong> Advanced Learning – Begin project development, 
                      explore niche topics, and clear doubts in live Q&A sessions.
                    </li>
                    <li>
                      <strong>Month 5:</strong> Final Polishing – Finalize projects, prepare for 
                      placements, and optimize LinkedIn profiles.
                    </li>
                    <li>
                      <strong>Month 6:</strong> Career Readiness – Mock interviews with experts, 
                      project presentations, and job application strategies.
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
                  <del>₹25000/-</del>
                  <Badge bg="danger" className="ms-2">
                    48% OFF
                  </Badge>
                </p>
                <h2 className="discounted-price">₹12999/-</h2>
                <p className="pricing-subtext">
                  Enroll in this comprehensive program to accelerate your career!
                </p>
                <Button variant="success" size="lg" className="cta-button">
                  Enroll Now
                </Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>
        <div className="text-center mt-5">
          <p className="closing-note">
            Take charge of your future with expert mentorship and personalized guidance.
          </p>
        </div>
      </Container>
    </div>
  );
};

export default SixMonthMentorship;
