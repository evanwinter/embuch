import styled from "styled-components";
import { Link } from "gatsby";
import { colors } from "@utils/colors";
import { GatsbyImage } from "gatsby-plugin-image";

export const Title = styled.h3`
  font-size: 85px;
  line-height: 102px;
  font-weight: 300;
  margin-block: 0 18px;
`;

export const PreviewImage = styled(GatsbyImage)``;

export const PreviewLink = styled(Link)`
  display: block;
  width: 100%;
  height: auto;
  position: relative;

  img,
  ${PreviewImage} img {
    width: 100%;
    height: auto;
    display: block;
    border: 2px solid ${colors.black};
  }

  transition: transform 150ms ease-in-out, box-shadow 150ms ease-in-out;
  box-shadow: 0px 0px 0px black;

  &:hover {
    transform: translateY(-0.5rem) translateX(-0.5rem);
    box-shadow: 0.5rem 0.5rem 0px ${colors.black};
  }
`;

export const PreviewItem = styled.div``;
