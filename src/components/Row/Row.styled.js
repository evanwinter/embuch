import styled from "styled-components";

export const RowContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  @media (max-width: 48rem) {
    flex-direction: column;
  }
`;

export const RowItem = styled.div`
  flex: 1;
`;
