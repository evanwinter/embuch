import styled from "styled-components";
import { Link } from "gatsby";
import { colors } from "@styles";

export const Footer = styled.footer`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 150px;
  padding: 0 3rem 3rem;
`;

export const FooterLink = styled(Link)`
  display: flex;
  flex-direction: column;
  text-decoration: none;
  color: currentColor;
  transition: color 0.2s ease;
  max-width: 300px;
  &:hover {
    /* color: ${colors.lime}; */
    span {
      transform: translate(-2px);
    }
  }

  @media (max-width: 768px) {
    .gatsby-image-wrapper {
      display: none;
    }
  }
`;

export const NextLink = styled(FooterLink)`
  align-items: flex-start;
  svg {
    transform: rotate(180deg);
  }

  &:hover {
    span {
      transform: translate(2px);
    }
  }
`;

export const BackLink = styled(FooterLink)`
  align-items: flex-end;
`;

export const LinkText = styled.span`
  display: flex;
  align-items: center;
  gap: 0.6725rem;
  margin-bottom: 1.25rem;
  font-size: 1.25rem;
  font-weight: 300;
  transition: transform 0.2s ease-in-out;

  @media (max-width: 768px) {
    margin-bottom: 0;
  }
`;

export const LinkImage = styled.img`
  width: 332px;
  height: auto;
  border: 2px solid ${colors.black};
`;
