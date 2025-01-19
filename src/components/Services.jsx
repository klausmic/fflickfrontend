import React from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import { FaUserTie, FaUsers, FaClock } from "react-icons/fa";
import { useNavigate } from "react-router-dom"; // For navigation to detailed pages
import "animate.css";
import "../styles/Services.css";

const Services = () => {
  const navigate = useNavigate();

  const services = [
    {
      icon: <FaUserTie size={50} />,
      title: "One-on-One Counseling",
      description:
        "Get personalized guidance with actionable steps to kickstart your career journey. Tailored roadmaps, resource recommendations, and expert insights included.",
      link: "/one-on-one-counseling", // Navigation path
    },
    {
      icon: <FaUsers size={50} />,
      title: "Group Counseling",
      description:
        "Join focused batches led by domain-specific industry experts. Personalized roadmaps, doubt sessions, and project guidance provided.",
      link: "/group-counseling", // Navigation path
    },
    {
      icon: <FaClock size={50} />,
      title: "6-Month Mentorship Plan",
      description:
        "A comprehensive program combining skill development, project building, and interview preparation for career success.",
      link: "/six-month-mentorship", // Navigation path
    },
  ];

  return (
    <div id="services" className="services">
      <Container>
        <h2 className="text-center mb-4 animate__animated animate__fadeInDown">
          Our Services
        </h2>
        <Row>
          {services.map((service, index) => (
            <Col
              key={index}
              md={4}
              className="d-flex align-items-stretch mb-4 animate__animated animate__zoomIn"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <Card className="shadow w-100 text-center service-card">
                <Card.Body>
                  <div className="service-icon mb-3">{service.icon}</div>
                  <Card.Title>{service.title}</Card.Title>
                  <Card.Text>{service.description}</Card.Text>
                  <Button
                    variant="primary"
                    className="service-button"
                    onClick={() => navigate(service.link)}
                  >
                    Learn More
                  </Button>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default Services;
