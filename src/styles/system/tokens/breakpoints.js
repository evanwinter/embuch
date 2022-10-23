import { css } from "styled-components";

export const breakpoints = {
  xs: "320px",
  sm: "640px",
  md: "768px",
  lg: "1024px",
  xl: "1280px",
  xxl: "1536px",
};

export const breakpointsClasses = css`
  ${Object.keys(breakpoints).map(
    (breakpoint) => `
      .w-${breakpoint} {
        width: auto;
        max-width: ${breakpoints[breakpoint]};
      }
    `
  )}
`;

export const breakpointsCssVariables = css`
  ${Object.keys(breakpoints).map(
    (breakpoint) => `
      --breakpoints-${breakpoint}: ${breakpoints[breakpoint]};
    `
  )}
`;
