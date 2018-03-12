import { css } from 'styled-components';

export const media = {
  tablet: (...args) => css`
    @media (max-width: 960px) {
      ${css(...args)};
    }
  `,
};

const stripUnit = x => parseFloat(x, 10);
export const fluidType = (minWidth, maxWidth, minFont, maxFont) => {
  return `
  font-size: calc(${minFont} + (${stripUnit(maxFont)} - ${stripUnit(
    minFont
  )}) * ((100vw - ${minWidth}) / (${stripUnit(maxWidth)} - ${stripUnit(
    minWidth
  )})));
  `;
};
