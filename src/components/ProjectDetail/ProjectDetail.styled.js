import styled from "styled-components";
import { GatsbyImage } from "gatsby-plugin-image";

export const HeroImage = styled(GatsbyImage)`
  width: 100%;
  height: auto;
  max-height: 100vh;
  object-fit: cover;
`;

export const Page = styled.div`
  max-width: 64rem;
  width: 100%;
  margin: 0 auto;
`;

export const Intro = styled.div`
  max-width: 32rem;
  p {
    font-weight: 200;
  }
`;

export const Images = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
`;

export const GridImage = styled(GatsbyImage)`
  object-fit: cover;
  object-position: top;
  max-height: 300px;
`;
