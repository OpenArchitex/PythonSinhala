import React from "react";
import { Container, Image, Nav, Navbar } from "react-bootstrap";
import logo from "../images/logo.svg";
import styled from "styled-components";

const StyledImage = styled(Image)`
  width: 10%;
`;

const NavBar = () => (
  <Navbar fixed="top" bg="dark" data-bs-theme="dark" expand="lg">
    <Container className="flex-nowrap" fluid>
      <Navbar.Brand href="/">
        <StyledImage src={logo} /> Python Sinhala
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
    </Container>
    <Navbar.Collapse className="px-3">
      <Nav className="justify-content-end flex-grow-1">
        <Nav.Link href="/">Home</Nav.Link>
        <Nav.Link href="/chapters">Chapters</Nav.Link>
        <Nav.Link href="/about">About</Nav.Link>
        <Nav.Link href="/contact">Contact</Nav.Link>
      </Nav>
    </Navbar.Collapse>
  </Navbar>
);

export default NavBar;
