import styled from "styled-components";

export const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: ${({ gridGap }) => gridGap || "1rem"};
  padding: ${({ padding }) => padding || "1rem"};

  @media (max-width: 48rem) {
    grid-template-columns: 1fr;
  }
`;
