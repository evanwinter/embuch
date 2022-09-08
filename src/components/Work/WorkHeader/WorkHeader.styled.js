import styled from "styled-components";

export const Separator = styled.div`
  width: 100%;
  display: block;
  height: 3px;
  background-color: black;
  margin-block: 4rem;
`;

export const Title = styled.h1``;
export const Subtitle = styled.h3`
  font-size: 40px;
  font-weight: 800;
  margin-block: 1rem;
`;
export const Description = styled.p`
  font-size: 40px;
  font-weight: 300;
  margin-block: 0;
`;

export const Header = styled.header`
  margin-block: 8rem;

  > * {
    padding-inline: 4rem;
  }
`;
