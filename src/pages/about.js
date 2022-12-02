import React from "react";
import styled from "styled-components";

import { Reveal } from "@components";

import polaroidGif from "@images/about/polaroids.gif";

const AboutPage = () => {
  return (
    <AboutSection>
      <Reveal effect="fadeInUp">
        <p className="p1">
          Emily is a designer based in Chicago. She's interested in crafting
          beautiful experiences — and finds purpose in creating and learning.
        </p>
        <p className="p1">
          She spends her free time reading, drawing, practicing yoga, and
          raising two beautiful cats.
        </p>
      </Reveal>
      <Reveal effect="fadeInUp" delay={0.15}>
        <AboutImage
          src={polaroidGif}
          alt="Polaroids of Emily"
          className="mx-auto"
        />
      </Reveal>
    </AboutSection>
  );
};

export const Head = () => (
  <>
    <title>About | Emily Buchberger</title>
    <meta
      name="description"
      content="Emily Buchberger is a designer based in Chicago. She's interested in crafting beautiful experiences — and finds purpose in creating and learning."
    />
  </>
);

const AboutImage = styled.img`
  display: block;
  height: auto;
  max-height: calc(100vh - 118px);
`;

const AboutSection = styled.section`
  display: flex;
  align-items: center;
  width: min(100%, var(--breakpoints-xl));
  margin-inline: auto;
  padding-inline: var(--spacing-xl);

  @media (max-width: 64rem) {
    .p1 {
      font-size: 1rem;
    }
  }
`;

export default AboutPage;
