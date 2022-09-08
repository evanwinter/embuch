import styled from "styled-components";

export const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: ${({ gridGap }) => gridGap || "1rem"};
  padding: ${({ padding }) => padding || "1rem"};

  @media (max-width: 32rem) {
    grid-template-columns: 1fr;
  }
`;

export const ScrollContainer = styled.div`
  background-color: ${({ backgroundColor }) => backgroundColor};
  width: 100%;
  display: flex;
  overflow-x: hidden;
  padding: 5rem 3rem;
  gap: 3rem;
  position: relative;

  button {
    appearance: none;
    padding: 0;
    margin: 0;
    background: none;
    border: none;
    cursor: pointer;
  }
`;
