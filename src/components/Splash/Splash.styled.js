import styled from "styled-components";

export const Background = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  overflow: hidden;
  background-color: var(--color-cream);
`;

export const Content = styled.div`
  width: min(100%, var(--breakpoints-xl));
  margin-inline: var(--spacing-xl);
  font-family: "Space Grotesk";
  margin-bottom: 10rem;

  span {
    color: var(--color-charcoal);
  }

  h1,
  h2,
  span {
    line-height: 1.15;
    font-weight: 600;
  }

  img {
    width: 2rem;
    height: auto;
  }

  transition: opacity 0.1s ease-in-out;
  opacity: ${({ hide }) => (hide ? 0 : 1)};
`;
