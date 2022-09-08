import React, { useRef } from "react";
import { colors } from "@utils";
import Arrow from "@images/arrow-right.inline.svg";
import {
  Container,
  InnerContainer,
  Navigation,
  NavigationButton,
  Tab,
} from "./WorkCarousel.styled";

const WorkCarousel = ({
  tab = "",
  backgroundColor = colors.darkGray,
  color = colors.white,
  children,
  style
}) => {
  const scrollContainer = useRef(null);
  const handleScroll = (direction) => {
    scrollContainer.current.scrollBy({
      left: direction === "next" ? 300 : direction === "prev" ? -300 : 0,
      behavior: "smooth",
    });
  };
  return (
    <Container style={{ backgroundColor, ...style }}>
      {tab && <Tab style={{ backgroundColor, color }}>{tab}</Tab>}
      <InnerContainer ref={scrollContainer}>{children}</InnerContainer>
      <Navigation>
        <NavigationButton onClick={() => handleScroll("prev")} color={color}>
          <Arrow />
        </NavigationButton>
        <NavigationButton onClick={() => handleScroll("next")} color={color}>
          <Arrow />
        </NavigationButton>
      </Navigation>
    </Container>
  );
};

export default WorkCarousel;
