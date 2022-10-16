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
  /* height: 100vh; */

  /* height: 100vh; */

  /* .gatsby-image-wrapper {
    min-width: 571px;
    width: auto;
    height: 100%;
    flex-shrink: 0;
  } */

  .gatsby-image-wrapper {
    /* flex-basis: 33vw;
    flex-shrink: 0; */

    flex-shrink: 0;

    /* min-height: 600px;
    height: 100%; */

    /* flex: 1 0 calc(100vh - 3 * var(--spacing-xl)); */
    /* flex: 1 0 40vw; */
    /* max-height: 80vh; */
    /* min-height: 600px;
    width: auto; */
    /* max-width: 600px; */
    /* width: auto; */
    /* height: 100%; */
    /* min-width: 33vw; */
    /* max-width: 100%; */
  }
`;

export const InnerContainer = styled.div`
  width: 100vw;
  overflow-x: scroll;

  display: flex;
  gap: var(--spacing-xl);

  /* display: grid;
  grid-auto-columns: minmax(25rem, auto);
  grid-auto-flow: column;
  grid-gap: var(--spacing-xl); */

  padding-inline: var(--spacing-xl);
  padding-block: var(--spacing-xl) calc(var(--spacing-xl) + var(--spacing-xl));
  /* padding-bottom: calc(var(--spacing-xl) - var(--spacing-lg)); */
  /* padding-bottom: calc(var(--spacing-xl) + var(--spacing-xl)); */

  scroll-snap-type: x mandatory;
  scroll-padding-left: var(--spacing-xl);
  > * {
    scroll-snap-align: start;
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
