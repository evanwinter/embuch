import styled from "styled-components";
import {
  breakpointsClasses,
  colorsCssVariables,
  spacingCssVariables,
  spacingClasses,
} from "../tokens";

export const App = styled.div`
  ${breakpointsClasses};
  ${colorsCssVariables};
  ${spacingCssVariables};
  ${spacingClasses};

  --menu-height: 108px;
`;
