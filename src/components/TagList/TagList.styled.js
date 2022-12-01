import styled from "styled-components";
import { colors } from "@styles";

export const Tag = styled.div`
  display: inline-block;
  padding: 0px var(--spacing-md);
  border-radius: var(--spacing-md);
  font-size: 1.5rem;
  font-weight: 300;
  border: 1px solid ${colors.black};
`;

export const List = styled.div`
  display: flex;
  gap: var(--spacing-sm);
`;
