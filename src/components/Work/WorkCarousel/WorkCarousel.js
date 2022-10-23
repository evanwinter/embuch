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

  const nextCursor = useCursorType("next");
  const prevCursor = useCursorType("prev");

  return (
    <Container style={{ backgroundColor, color, ...style }} {...handleCursor}>
      <Reveal effect="fadeInLeft" distance="xxl">
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
      <div
        onClick={() => handleScroll("prev")}
        {...prevCursor}
        style={{
          position: "absolute",
          width: "50%",
          height: "80%",
          top: 0,
          left: 0,
          zIndex: 20,
        }}
      ></div>
      <div
        onClick={() => handleScroll("next")}
        {...nextCursor}
        style={{
          position: "absolute",
          width: "50%",
          height: "80%",
          top: 0,
          right: 0,
          zIndex: 20,
        }}
      ></div>
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
