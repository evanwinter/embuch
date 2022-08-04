import styled from "styled-components";

export const Background = styled.div`
  background-color: lightskyblue;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-image: url("/clouds.png");

  svg {
    width: min(100vw, 595px);
    padding: 0 2rem;
    height: auto;
  }
`;

export const Text = styled.div`
  display: flex;
  align-items: center;
  gap: 1.5rem;
  margin-top: -2.8rem;
  span {
    font-size: 80px;
    &:last-child {
      margin-top: 9px;
    }
  }

  @media (max-width: 32rem) {
    span {
      font-size: 50px;
    }
  }
`;
