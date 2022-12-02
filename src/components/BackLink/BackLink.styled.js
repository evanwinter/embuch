import styled from "styled-components";
import { Link } from "gatsby";

export const LinkWrapper = styled(Link)`
  display: inline-block;
  color: currentColor;
  text-decoration: none;
  padding: var(--spacing-md);
  margin: calc(-1 * var(--spacing-md));

  svg {
    transition: transform 0.2s ease;
    color: currentColor;
    width: 2rem;
    height: 2rem;
  }

  &:hover {
    svg {
      transform: translateX(-2px);
    }
  }
`;

export const LinkText = styled.span`
  font-size: 1rem;
  display: flex;
  align-items: center;
  gap: 0.6725rem;
  transition: transform 0.2s ease-in-out;

  @media (max-width: 48rem) {
    font-size: 16px;
  }
`;
