import { css } from "styled-components";

export const colors = {
  white: "#fefefe",
  transparent: "transparent",
  black: "#201D1D",
  darkGray: "#201D1D",
  lightGray: "#F3F6F8",
  red: "#FF2100",
  pink: "#F3ACCC",
  lime: "#C1FF31",
  orange: "#FAB313",
  pureBlack: "#000000",
};

export const colorsCssVariables = css`
  ${Object.keys(colors).map(
    (color) => `
      --color-${color}: ${colors[color]};
    `
  )}
`;
