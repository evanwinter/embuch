import styled from "styled-components";
import { colors } from "@styles";

export const Container = styled.div`
  scroll-snap-align: start;
  width: 100vw;
  height: 100%;
  position: relative;
  flex-wrap: nowrap;
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const InnerContainer = styled.div`
  width: 100vw;
  overflow-x: scroll;
  display: flex;
  gap: var(--spacing-xl);
  padding-inline: var(--spacing-xl);
  padding-block: var(--spacing-xl) calc(var(--spacing-xl) + var(--spacing-xl));
  scroll-snap-type: x mandatory;
  scroll-padding-left: var(--spacing-xl);
  > * {
    scroll-snap-align: start;
    flex-shrink: 0;
  }

  .gatsby-image-wrapper {
    flex-shrink: 0;
  }
`;

export const Navigation = styled.div`
  padding: var(--spacing-lg) var(--spacing-xl);
  width: 100vw;
  display: flex;
  justify-content: space-between;
  position: absolute;
  bottom: 0;
`;

export const NavigationButton = styled.button`
  appearance: none;
  background: none;
  border: none;
  padding: 0;
  cursor: pointer;
  outline: inherit;
  color: ${({ color }) => color};
  padding: var(--spacing-md);
  margin: calc(-1 * var(--spacing-md));
  &:hover svg {
    color: ${colors.lime};
  }

  &:last-child svg {
    transform: rotate(180deg);
  }
`;
