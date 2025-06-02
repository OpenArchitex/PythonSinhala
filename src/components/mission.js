import React from "react";
import { Container, Row } from "react-bootstrap";
import { StaticImage } from "gatsby-plugin-image";

const Mission = () => (
  <Container className="pt-5">
    <ul>
      <Row className="align-items-center justify-content-around">
        <div className="col-md-6 order-md-2">
          <StaticImage
            className="img-fluid"
            src="../images/book_for_education.svg"
            alt="Books"
          />
        </div>
        <div className="col-md-6 col-12 order-md-1">
          <h1 className="display-5">Accessible without Bounds...</h1>
          <p>
            We want to make education accessible to everyone; and commit to make
            our courses accessible to everyone in all parts of Sri-Lanka now and
            always.
          </p>
        </div>
      </Row>
      <Row className="align-items-center justify-content-around">
        <div className="col-md-6 col-12">
          <StaticImage
            className="img-fluid"
            src="../images/non-profit.svg"
            alt="Non-Profit"
          />
        </div>
        <div className="col-md-6">
          <h1 className="display-5">Not For Profit...</h1>
          <p>
            All content is free of charge and we rely on donations for the
            minimum amount of money needed to cover bandwidth and operational
            costs.
          </p>
        </div>
      </Row>
      <Row className="align-items-center justify-content-around">
        <div className="col-md-6 order-md-2">
          <StaticImage
            className="img-fluid"
            src="../images/deal_handshakes.svg"
            alt="Expand"
          />
        </div>
        <div className="col-md-6 col-12 order-md-1">
          <h1 className="display-5">Think Big, Strive for More...</h1>
          <p>
            We aspire to cover all subjects related to the standardized
            examination curriculum in Sri-Lanka and strive to make partnerships
            more tutors and educational institutions that share our goal.
          </p>
        </div>
      </Row>
    </ul>
  </Container>
);

export default Mission;
