import React from "react";
import { Container, Row, Col, Card, Button, Badge } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./OneOnOneCounselling.css";

const OneOnOneCounselling = () => {
  return (
    <div className="one-on-one-counselling-page">
      <Container>
        <div className="text-center mb-5">
          <h1 className="title animate__animated animate__fadeInDown">One-on-One Counselling</h1>
          <p className="subtitle animate__animated animate__fadeInUp">
            A personalized session to help you kickstart your career with confidence.
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
                      <strong>Personalized Roadmap:</strong> Tailored step-by-step guidance
                      based on your domain of interest (e.g., Cloud, AI, Web Development).
                    </li>
                    <li>
                      <strong>Expert Guidance:</strong> One-on-one interaction with an industry
                      professional to clear doubts, share insights, and provide tips.
                    </li>
                    <li>
                      <strong>Project Planning:</strong> Guidance on impactful project ideas,
                      execution plans, and aligning them with industry standards.
                    </li>
                    <li>
                      <strong>Interview Preparation:</strong> Resume building, LinkedIn
                      optimization, and interview strategies alongside project development.
                    </li>
                  </ul>
                </Card.Text>
                <h4>Additional Value:</h4>
                <Card.Text>
                  <ul>
                    <li>Exclusive resource recommendations for your domain and goals.</li>
                    <li>Soft skills tips for communication and networking improvement.</li>
                    <li>Insights into emerging technologies and in-demand skills.</li>
                    <li>
                      Actionable feedback on your current skill set and areas for improvement.
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
                  <del>₹4699/-</del>
                  <Badge bg="danger" className="ms-2">
                    70% OFF
                  </Badge>
                </p>
                <h2 className="discounted-price">₹1399/-</h2>
                <p className="pricing-subtext">
                  A one-time session packed with value to supercharge your career!
                </p>
                <Button variant="success" size="lg" className="cta-button">
                  Book Now
                </Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>
        <div className="text-center mt-5">
          <p className="closing-note">
            By the end of this session, you'll have a clear direction, a solid plan, and the
            motivation to take charge of your career journey.
          </p>
        </div>
      </Container>
    </div>
  );
};

export default OneOnOneCounselling;
