import React, { useRef } from "react";
import PropTypes from "prop-types";

import { Reveal } from "@components";
import Arrow from "@images/arrow.inline.svg";
import { colors } from "@styles";
import { useCursorType } from "@utils";

import {
  Container,
  InnerContainer,
  Navigation,
  NavigationButton,
} from "./WorkCarousel.styled";

const WorkCarousel = ({
  backgroundColor = colors.darkGray,
  color = colors.white,
  children,
  style,
}) => {
  const scrollContainer = useRef(null);

  const handleScroll = (direction) => {
    scrollContainer.current.scrollBy({
      left: direction === "next" ? 300 : -300,
      behavior: "smooth",
    });
  };

  const handleCursor = useCursorType("arrow");

  return (
    <Container style={{ backgroundColor, color, ...style }} {...handleCursor}>
      <Reveal effect="fadeInUp" distance="xxl">
        <InnerContainer ref={scrollContainer}>{children}</InnerContainer>
      </Reveal>
      <Navigation>
        <NavigationButton onClick={() => handleScroll("prev")} color={color}>
          <Arrow style={{ fill: color }} />
        </NavigationButton>
        <NavigationButton onClick={() => handleScroll("next")} color={color}>
          <Arrow style={{ fill: color }} />
        </NavigationButton>
      </Navigation>
    </Container>
  );
};

WorkCarousel.propTypes = {
  backgroundColor: PropTypes.string,
  color: PropTypes.string,
  children: PropTypes.node.isRequired,
  style: PropTypes.object,
};

export default WorkCarousel;
