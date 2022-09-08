import styled from "styled-components";
import { colors } from "@utils";

export const Container = styled.div`
  width: 100vw;
  min-height: 500px;
  position: relative;
  margin-top: 180px;
  flex-wrap: nowrap;

  .gatsby-image-wrapper {
    flex-shrink: 0;
  }
`;

export const InnerContainer = styled.div`
  width: auto;
  overflow-x: scroll;
  display: flex;
  gap: 77px;
  scroll-snap-type: x mandatory;
  scroll-padding-left: 80px;
  padding: 64px 80px;
  > * {
    scroll-snap-align: start;
  }
`;

export const Tab = styled.div`
  position: absolute;
  top: -90px;
  left: 0;
  width: 180px;
  height: 180px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  font-size: 30px;
  padding-top: 35px;
`;

export const Navigation = styled.div`
  position: absolute;
  bottom: 20px;
  padding-inline: 80px;
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
  svg {
    fill: ${({ color }) => color};
  }
  &:hover svg {
    fill: ${colors.lime};
  }

  &:first-child svg {
    transform: rotate(180deg);
  }
`;
