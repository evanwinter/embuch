import styled from "styled-components";
import {
  breakpointsCssVariables,
  breakpointsClasses,
  colorsCssVariables,
  spacingCssVariables,
  spacingClasses,
} from "../tokens";

export const App = styled.div`
  ${breakpointsCssVariables};
  ${breakpointsClasses};
  ${colorsCssVariables};
  ${spacingCssVariables};
  ${spacingClasses};

  --menu-height: 70px;
  --sheet-offset: 118px;
`;
