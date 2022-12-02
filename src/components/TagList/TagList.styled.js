import styled from "styled-components";
import { colors } from "@styles";

export const Tag = styled.div`
  display: inline-block;
  padding: 2px var(--spacing-md);
  border-radius: var(--spacing-md);
  font-size: 1rem;
  font-weight: 500;
  border: 2px solid var(--color-charcoal);
  background-color: var(--color-cream);
  color: var(--color-black);
`;

export const List = styled.div`
  display: flex;
  gap: var(--spacing-sm);
`;
