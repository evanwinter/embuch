import styled from "styled-components";
import { Link } from "gatsby";
import { colors } from "@styles";

export const Header = styled.header`
  padding-block: var(--spacing-xl);
  padding-inline: var(--spacing-xl);
`;

export const BackLink = styled(Link)`
  display: inline-block;
  color: currentColor;
  text-decoration: none;
  transition: color 0.2s ease;
  padding: var(--spacing-md);
  margin: calc(-1 * var(--spacing-md));

  svg {
    fill: currentColor;
    transform: rotate(180deg);
  }

  &:hover {
    color: ${colors.lime};
    span {
      transform: translate(-2px, -2px);
    }
  }
`;

export const LinkText = styled.span`
  font-size: 1.25rem;
  font-weight: 300;
  display: flex;
  align-items: center;
  gap: 0.6725rem;
  transition: transform 0.2s ease-in-out;
`;

export const Separator = styled.div`
  width: 100vw;
  display: block;
  height: 3px;
  background-color: black;
  margin-block: var(--spacing-xl);
  margin-inline: -4rem;
`;
