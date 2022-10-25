import styled from "styled-components";

export const Section = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding-block: var(--spacing-xl);
  padding-inline: var(--spacing-xl);
  min-height: ${({ fullScreen }) => (fullScreen ? "100vh" : "auto")};
`;
