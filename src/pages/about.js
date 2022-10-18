import React from "react";
import styled from "styled-components";

import { Reveal, Row, Section } from "@components";

import polaroidGif from "../images/about/polaroids.gif";

const AboutPage = () => {
  return (
    <AboutSection>
      <Row>
        <Reveal effect="fadeInUp">
          <p className="p1">
            Aliquip exercitation reprehenderit duis exercitation excepteur
            consequat officia aliquip et non reprehenderit.
          </p>
          <p className="p1">
            Enim labore non excepteur eiusmod aute excepteur elit labore.
            Laborum laborum cillum est reprehenderit esse laborum id aliqua elit
            labore id dolor. Sit excepteur cillum consectetur cupidatat eu
            officia est fugiat dolor voluptate proident tempor non. Ea mollit
            reprehenderit laborum veniam magna officia tempor minim.
          </p>
          <a className="link" href="mailto:emilybuchberger@gmail.com">
            email
          </a>
        </Reveal>
        <Reveal effect="fadeInUp" delay={0.15}>
          <img
            style={{
              display: "block",
              maxHeight: "calc(100vh - var(--menu-height))",
            }}
            src={polaroidGif}
            alt="Polaroids of Emily"
            className="mx-auto"
          />
        </Reveal>
      </Row>
    </AboutSection>
  );
};

const AboutSection = styled(Section)`
  max-height: calc(100vh - var(--menu-height));
`;

export default AboutPage;
