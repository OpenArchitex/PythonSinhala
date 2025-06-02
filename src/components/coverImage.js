import React from "react";
import {Button, Container} from "react-bootstrap";
import styled from "styled-components";
import coverImage from "../images/coverImage.jpg";

const StyledContainer = styled(Container)`
  background-image: url(${coverImage});
  background-size: cover;
  text-align: center;
  height: 60vh;
`;
const CoverImage = () => (
  <StyledContainer className="g-body-tertiary d-flex align-items-center" fluid>
    <Container className="mt-5">
      <h1 className="display-3">Welcome to Python-Sinhala!</h1>
      <blockquote className="blockquote text-center">
        <p className="mb-4">
          There is only one good, knowledge, and one evil, ignorance.
        </p>
        <footer className="blockquote-footer">
          Socrates in{" "}
          <cite title="Source Title">
            Diogenes Laertius' Lives of Eminent Philosophers
          </cite>
        </footer>
      </blockquote>
      <Button className="mt-5" variant="primary" size="lg" href="/chapters">Browse Chapters</Button>
    </Container>
  </StyledContainer>
);

export default CoverImage;
