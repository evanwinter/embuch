import styled from "styled-components";

export const RowContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  border: ${({ debug }) => (debug ? "1px solid blue" : "none")};

  > * {
    border: ${({ debug }) => (debug ? "1px solid red" : "none")};
  }

  @media (max-width: 48rem) {
    flex-direction: column;
  }
`;

export const RowItem = styled.div`
  flex: 1;
`;
