import React from "react";
import styled from "styled-components";

import { Reveal, Row, Section } from "@components";

import polaroidGif from "../images/about/polaroids.gif";

const AboutPage = () => {
  return (
    <AboutSection>
      <Row>
        <Reveal effect="fadeInUp">
          <p className="p1">Emily is a designer based in Chicago.</p>
          <p className="p1">
            She spends her free time reading, drawing, practicing yoga, raising
            two beautiful cats.
          </p>
        </Reveal>
        <Reveal effect="fadeInUp" delay={0.15}>
          <AboutImage
            src={polaroidGif}
            alt="Polaroids of Emily"
            className="mx-auto"
          />
        </Reveal>
      </Row>
    </AboutSection>
  );
};

const AboutImage = styled.img`
  display: block;
  max-height: calc(100vh - var(--menu-height));
  margin: 0 auto;
`;

const AboutSection = styled(Section)`
  max-height: calc(100vh - var(--menu-height));
`;

export default AboutPage;
