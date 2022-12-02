import React from "react";
import styled from "styled-components";

import { Reveal } from "@components";

import polaroidGif from "@images/about/polaroids.gif";

const AboutPage = () => {
  return (
    <AboutSection>
      <h1 className="sr-only">About Emily</h1>
      <TextContainer>
        <Reveal effect="fadeInUp" className="about-text">
          <p className="h1 mb-lg">Emily is a designer based in Chicago.</p>
          <p className="p1">
            She's interested in crafting beautiful experiences — and finds
            purpose in creating and learning. She spends her free time reading,
            drawing, practicing yoga, and raising two beautiful cats.
          </p>
        </Reveal>
      </TextContainer>
      <ImageContainer>
        <Reveal effect="fadeInUp" delay={0.15} className="about-image">
          <img src={polaroidGif} alt="Polaroids of Emily" className="mx-auto" />
        </Reveal>
      </ImageContainer>
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

const TextContainer = styled.div`
  width: min(640px, 100%);
  padding-left: var(--spacing-xl);
`;

const ImageContainer = styled.div`
  flex: 1;
  min-width: min(300px, 100%);
  height: 100%;
  display: flex;
  justify-content: center;

  img {
    display: block;
    width: 100%;
    height: auto;
    max-height: calc(100vh - 118px);
    object-fit: contain;
  }
`;

const AboutSection = styled.section`
  display: flex;
  align-items: center;
  min-height: calc(100vh - 118px);

  ${TextContainer}, ${ImageContainer} {
    flex: 1;
  }

  ${TextContainer} {
    min-width: 760px;
    .h1 {
      font-size: 6vw;
    }
  }

  ${ImageContainer} {
    max-width: 600px;
  }

  @media (max-width: 72rem) {
    ${TextContainer} {
      width: 100%;
      min-width: 640px;
    }
  }

  @media (max-width: 64rem) {
    flex-direction: column;

    ${TextContainer} {
      margin-top: calc(var(--spacing-xl) + var(--spacing-md));
      padding-inline: var(--spacing-xl);
      width: auto;
      min-width: 0;
      .h1 {
        font-size: 9vw;
      }

      .p1 {
        font-size: 1.75rem;
      }
    }

    ${ImageContainer} {
      width: 100%;
      max-width: none;
    }
  }
`;

export default AboutPage;
