import styled from "styled-components";
import { colors } from "@styles";

export const Tag = styled.div`
  display: inline-block;
  padding: 1px 15px;
  border-radius: 12px;
  font-size: 15px;
  font-weight: 300;
  border: 1px solid ${colors.black};
`;

export const List = styled.div`
  display: flex;
  gap: 10px;
`;
