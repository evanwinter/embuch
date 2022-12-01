import { css } from "styled-components";

export const spacing = {
  none: "0",
  xs: "0.25rem",
  sm: "0.5rem",
  md: "1rem",
  lg: "2rem",
  xl: "4rem",
  xxl: "8rem",
  auto: "auto",
};

export const spacingMobile = {
  xs: "0.25rem",
  sm: "0.5rem",
  md: "1rem",
  lg: "1.5rem",
  xl: "3rem",
  xxl: "6rem",
};

export const spacingCssVariables = css`
  ${Object.keys(spacing).map(
    (size) => `
      --spacing-${size}: ${spacing[size]};
    `
  )}

  @media (max-width: 48rem) {
    ${Object.keys(spacingMobile).map(
      (size) => `
        --spacing-${size}: ${spacingMobile[size]};
      `
    )}
  }
`;

export const spacingClasses = css`
  ${Object.keys(spacing).map(
    (size) => `
      .m-${size} {
        margin: var(--spacing-${size});
      }
      .mt-${size} {
        margin-top: var(--spacing-${size});
      }
      .mr-${size} {
        margin-right: var(--spacing-${size});
      }
      .mb-${size} {
        margin-bottom: var(--spacing-${size});
      }
      .ml-${size} {
        margin-left: var(--spacing-${size});
      }
      .mx-${size} {
        margin-inline: var(--spacing-${size});
      }
      .my-${size} {
        margin-block: var(--spacing-${size});
      }
      .p-${size} {
        padding: var(--spacing-${size});
      }
      .pt-${size} {
        padding-top: var(--spacing-${size});
      }
      .pr-${size} {
        padding-right: var(--spacing-${size});
      }
      .pb-${size} {
        padding-bottom: var(--spacing-${size});
      }
      .pl-${size} {
        padding-left: var(--spacing-${size});
      }
      .px-${size} {
        padding-inline: var(--spacing-${size});
      }
      .py-${size} {
        padding-block: var(--spacing-${size});
      }
    `
  )}
`;
