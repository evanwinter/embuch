import { css } from "styled-components";

export const colors = {
  white: "#fefefe",
  transparent: "transparent",
  black: "#201D1D",
  darkGray: "#201D1D",
  lightGray: "#F3F3F3",
  red: "#FF2100",
  pink: "#F3ACCC",
  lime: "#C1FF31",
  orange: "#FAB313",
};

export const colorVariables = css`
  --color-white: ${colors.white};
  --color-black: ${colors.black};
  --color-dark-gray: ${colors.darkGray};
  --color-light-gray: ${colors.lightGray};
  --color-red: ${colors.red};
  --color-pink: ${colors.pink};
  --color-lime: ${colors.lime};
  --color-orange: ${colors.orange};
`;
