import styled from "styled-components";
import { colors } from "@styles";

export const Container = styled.div`
  scroll-snap-align: start;
  width: 100vw;
  min-height: 500px;
  min-height: 100vh;
  position: relative;
  /* margin-top: 180px; */
  flex-wrap: nowrap;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  .gatsby-image-wrapper {
    flex-shrink: 0;
  }
`;

export const InnerContainer = styled.div`
  width: auto;
  overflow-x: scroll;
  display: flex;
  gap: 77px;
  /* flex: 1; */
  scroll-snap-type: x mandatory;
  scroll-padding-left: 80px;
  padding: 24px 80px;
  > * {
    scroll-snap-align: start;
  }
`;

export const Navigation = styled.div`
  /* position: absolute;
  bottom: 20px; */
  padding-inline: 80px;
  padding-bottom: 24px;
  width: 100vw;
  display: flex;
  justify-content: space-between;
`;

export const NavigationButton = styled.button`
  appearance: none;
  background: none;
  border: none;
  padding: 0;
  cursor: pointer;
  outline: inherit;
  color: ${({ color }) => color};
  &:hover svg {
    fill: ${colors.lime};
  }

  &:last-child svg {
    transform: rotate(180deg);
  }
`;
