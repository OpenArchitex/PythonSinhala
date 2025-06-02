import React from "react";
import { Container, Row } from "react-bootstrap";
import { StaticImage } from "gatsby-plugin-image";

const About = () => (
  <Container id="about" className="mt-5">
    <h1 className="mb-3 display-4">Meet Our Team</h1>
    <Row>
      <div className="col-md-4 col-12">
        <StaticImage
          src="../images/asanka.png"
          className="img-fluid asanka-img rounded-circle"
          alt="Avatar"
        />
      </div>
      <div className="col-md-8">
        <p className="text-justify">
          Asanka is the creator of PythonSinhala. With over 5 years of tutoring
          for Advanced Level (A/L) Exams in Sri Lanka, he understands the
          diverse set of problems our students face; finding good tutors; the
          time consuming daily commutes to a variety of tutoring classes and
          finding quality learning material. He started a YouTube channel,
          PythonSinhala and contributed over 300 lecture videos for the
          Information and Communication Technology stream in A/L. Asanka is
          proficient in Python, JavaScript, PHP, MySQL gaining over 5 years
          experience in the tech field both in Sri Lanka and Canada. He has done
          multiple professional certifications including MCSE, CCNA and Red Had
          Enterprise Linux Administration. Asanka holds an honors degree in
          Applied Sciences from the University of Peradeniya, Sri Lanka and a
          M.Sc in Computer Science at the University of Peradeniya.
        </p>
        <p className="text-justify">
          Asanka, has a passion for education, a breadth of well rounded
          knowledge, and a desire to make the world a better place. He started
          PythonSinhala as a non-profit and aspires to improve and help uplift
          the education landscape of Sri Lanka.
        </p>
      </div>
    </Row>
  </Container>
);

export default About;
