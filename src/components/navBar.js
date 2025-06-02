import React from "react";
import { Container, Image, Nav, Navbar } from "react-bootstrap";
import logo from "../images/logo.svg";

const NavBar = () => (
  <Navbar
    fixed="top"
    bg="dark"
    data-bs-theme="dark"
    expand="lg"
    className="flex-nowrap"
  >
    <Container fluid>
      <Navbar.Brand href="/">
        <Image src={logo} width="10%" /> Python Sinhala
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse>
        <Nav className="justify-content-end flex-grow-1">
          <Nav.Link href="/">Home</Nav.Link>
          <Nav.Link href="/chapters">Chapters</Nav.Link>
          <Nav.Link href="/about">About</Nav.Link>
          <Nav.Link href="/contact">Contact</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
);

export default NavBar;
