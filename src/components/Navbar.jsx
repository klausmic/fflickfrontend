// src/components/Navbar.js
import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { FaHome, FaInfoCircle, FaEnvelope, FaCog } from "react-icons/fa";

const MyNavbar = () => {
  return (
    <Navbar
      expand="lg"
      fixed="top" // Ensures the navbar stays at the top
      style={{
        background: "linear-gradient(90deg,rgb(29, 26, 44),rgb(162, 169, 239))",
        boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
        zIndex: 1030, // Ensures it stays above other elements
      }}
    >
      <Container>
        <Navbar.Brand href="/" style={{ fontWeight: "bold", color: "#fff" }}>
          {/* <img
            src="/logo.png" // Replace with your logo path
            alt="Future Flick Logo"
            style={{ width: "40px", marginRight: "10px" }}
          /> */}
          Future Flick
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link href="/" style={navLinkStyle}>
              <FaHome style={{ marginRight: "5px" }} /> Home
            </Nav.Link>
            <Nav.Link href="/services" style={navLinkStyle}>
              <FaCog style={{ marginRight: "5px" }} /> Services
            </Nav.Link>
            <Nav.Link href="/about" style={navLinkStyle}>
              <FaInfoCircle style={{ marginRight: "5px" }} /> About
            </Nav.Link>
            <Nav.Link href="/contact" style={navLinkStyle}>
              <FaEnvelope style={{ marginRight: "5px" }} /> Contact
            </Nav.Link>
          </Nav>
          {/* <Button
            href="#signup"
            style={{
              marginLeft: "15px",
              background: "#ff6f61",
              border: "none",
              borderRadius: "20px",
              padding: "10px 20px",
            }}
          >
            Sign Up
          </Button> */}
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

const navLinkStyle = {
  color: "#fff",
  fontWeight: "500",
  margin: "0 10px",
  textDecoration: "none",
  transition: "color 0.3s ease",
};

export default MyNavbar;
