import styled from "styled-components";

export const Background = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  overflow: hidden;

  svg {
    width: min(100vw, 595px);
    padding: 0 2rem;
    height: auto;
  }
`;
