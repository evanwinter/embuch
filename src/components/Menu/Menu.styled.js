import { Link } from "gatsby";
import styled from "styled-components";

export const Navigation = styled.nav`
  position: relative;
  display: flex;
  align-items: stretch;
  width: 100%;
  transform: translateY(-100%);
  pointer-events: none;
  padding-left: var(--spacing-xl);
  height: 70px;
`;

export const NavigationLink = styled(Link)`
  text-decoration: none;
  color: currentColor;
  pointer-events: all;
  border-top-right-radius: 10px;
  border-top-left-radius: 10px;
  display: flex;
  align-items: center;
  font-family: "Space Grotesk";
  font-size: 1.5rem;
  /* font-weight: 600; */
  text-align: center;
  padding: var(--spacing-md);
  margin-inline: var(--spacing-sm);
  &:first-child {
    margin-left: calc(-1 * var(--spacing-md));
  }
  &[data-active="true"] {
    z-index: 14;
    background-color: var(--color-black);
    color: var(--color-lime);
  }
`;
