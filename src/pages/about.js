import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { animateInY, stagger } from "@utils";
import polaroidGif from "../images/polaroids.gif";

const AboutPage = () => {
  return (
    <AboutLayout>
      <AboutTextWrapper key="text" {...animateInY}>
        <div>
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
        </div>
      </AboutTextWrapper>
      <AboutImageWrapper
        key="image"
        {...stagger({ animation: animateInY, amount: 0.2 })}
      >
        <img src={polaroidGif} alt="Polaroids of Emily" />
      </AboutImageWrapper>
    </AboutLayout>
  );
};

const AboutLayout = styled.div`
  display: flex;
  justify-content: center;
  gap: min(5vw, 3rem);
  margin-inline: min(5vw, 3rem) 0;
`;

const AboutTextWrapper = styled(motion.div)`
  flex: 1 0 0;
  height: 100%;
  display: flex;
  align-items: center;
  min-height: calc(100vh - var(--menu-height));

  > div {
    max-width: 80ch;
    margin-inline: auto;
  }
`;

const AboutImageWrapper = styled(motion.div)`
  flex: 1 0 3;
  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
    max-height: calc(100vh - var(--menu-height));
  }
`;

export default AboutPage;
