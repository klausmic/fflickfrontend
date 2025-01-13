import React from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import { FaLaptopCode, FaChalkboardTeacher, FaLightbulb } from "react-icons/fa";
import "animate.css";
import "../styles/Services.css";

const Services = () => {
  const services = [
    {
      icon: <FaLaptopCode size={50} />,
      title: "Skill Development",
      description:
        "We will create a personalized roadmap for you, outlining the specific courses you should take and guiding you on where to access them, ensuring you have a clear and structured path to follow.",
    },
    {
      icon: <FaChalkboardTeacher size={50} />,
      title: "Personalized Career Guidance",
      description:
        "Receive one-on-one counseling sessions to help you choose the best path tailored to your aspirations.",
    },
    {
      icon: <FaLightbulb size={50} />,
      title: "Interactive Workshops",
      description:
        "Participate in engaging workshops designed to enhance learning and foster creativity.",
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
                  <Button variant="primary" className="service-button">
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
