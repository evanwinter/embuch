import { css } from "styled-components";

export const colors = {
  white: "#fefefe",
  transparent: "transparent",
  black: "#201D1D",
  darkGray: "#201D1D",
  mediumGray: "#575B5E",
  lightGray: "#D9D9D9",
  red: "#FF2100",
  pink: "#F3ACCC",
  lime: "#C1FF31",
  orange: "#FAB313",
  pureBlack: "#000000",
  green: "#61ff00",

  cream: "#F9F8F4",
  charcoal: "#656565",
};

export const colorsCssVariables = css`
  ${Object.keys(colors).map(
    (color) => `
      --color-${color}: ${colors[color]};
    `
  )}
`;
