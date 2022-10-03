import styled from "styled-components";
import { Link } from "gatsby";
import { colors } from "@styles";

export const Separator = styled.div`
  width: 100vw;
  display: block;
  height: 3px;
  background-color: black;
  margin-block: 1.5rem 4rem;
  margin-inline: -4rem;
`;

export const Title = styled.h1``;
export const Subtitle = styled.h3`
  font-size: 40px;
  font-weight: 800;
  margin-block: 1rem 0.25rem;
`;
export const Description = styled.p`
  font-size: 40px;
  font-weight: 300;
  margin-block: 0;
`;

export const Header = styled.header`
  margin-block: 4rem;
  padding-inline: 4rem;
`;

export const LinkText = styled.span`
  font-size: 1.25rem;
  font-weight: 300;
  display: flex;
  align-items: center;
  gap: 0.6725rem;
  transition: transform 0.2s ease-in-out;
`;

export const BackLink = styled(Link)`
  display: block;
  color: currentColor;
  text-decoration: none;
  margin-bottom: 4rem;
  transition: color 0.2s ease;
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
