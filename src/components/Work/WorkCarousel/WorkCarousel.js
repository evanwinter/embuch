import React, { useRef } from "react";
import { colors } from "@styles";
import Arrow from "@images/arrow.inline.svg";
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
  headline,
}) => {
  const scrollContainer = useRef(null);

  const handleScroll = (direction) => {
    scrollContainer.current.scrollBy({
      left: direction === "next" ? 300 : -300,
      behavior: "smooth",
    });
  };

  return (
    <Container style={{ backgroundColor, color, ...style }}>
      {headline && (
        <h2
          style={{
            color,
            fontSize: "30px",
            fontWeight: 700,
            paddingTop: "3rem",
            paddingLeft: "77px",
          }}
        >
          {headline}
        </h2>
      )}
      <InnerContainer ref={scrollContainer}>{children}</InnerContainer>
      <Navigation>
        <NavigationButton onClick={() => handleScroll("prev")} color={color}>
          <Arrow style={{ color }} />
        </NavigationButton>
        <NavigationButton onClick={() => handleScroll("next")} color={color}>
          <Arrow style={{ color }} />
        </NavigationButton>
      </Navigation>
    </Container>
  );
};

export default WorkCarousel;
