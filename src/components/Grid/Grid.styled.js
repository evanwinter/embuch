import styled from "styled-components";

export const Grid = styled.div`
  display: grid;
  grid-template-columns: ${({ gridTemplateColumns }) =>
    gridTemplateColumns || "1fr 1fr"};
  grid-gap: ${({ gridGap }) => gridGap || "var(--spacing-xl)"};
  padding: ${({ padding }) => padding || "0rem"};
  align-items: ${({ alignItems }) => alignItems || "center"};

  @media (max-width: 48rem) {
    grid-template-columns: 1fr;
  }
`;
