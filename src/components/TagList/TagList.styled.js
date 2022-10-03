import styled from "styled-components";
import { colors } from "@styles";

export const Tag = styled.div`
  display: inline-block;
  padding: 0px 18px;
  border-radius: 16px;
  font-size: 25px;
  font-weight: 300;
  border: 1px solid ${colors.black};
`;

export const List = styled.div`
  display: flex;
  gap: 10px;
`;
