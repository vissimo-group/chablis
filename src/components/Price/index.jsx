import styled, { css } from 'styled-components';

import {
  breakpoints,
  colors,
  fonts,
  fontSizes,
  fontWeights,
} from '../../styles/variables';

const Price = styled.p`
  position: relative;
  display: inline-block;
  font-family: ${fonts.DEFAULT};
  font-size: ${({ old }) => (old ? fontSizes.SMALL : fontSizes.BIG)};
  font-weight: ${({ old }) => (old ? fontWeights.MEDIUM : fontWeights.SEMIBOLD)};
  line-height: ${({ old }) => (old ? '18px' : '24px')};
  margin-top: 0;
  margin-bottom: 0;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;

  ${({ old, color }) => old && !color && css`
    color: ${colors.standard.medium_grey};
  `}

  ${({ old, color }) => old && color && css`
    color: ${color};
  `}

  ${({ old, color }) => !old && color && css`
    color: ${color || colors.standard.default_black};
  `}

  ${({ old }) => old && css`
    text-decoration-line: line-through;
  `}

  ${({ old }) => !old && css`
    @media screen and (min-width: ${breakpoints.SMALL}) {
      font-size: ${fontSizes.LARGE};
      line-height: 1;
    }

    small {
      display: inherit;
      font-size: ${fontSizes.SMALL};
      line-height: ${fontSizes.BIG};
      vertical-align: top;

      @media screen and (min-width: ${breakpoints.SMALL}) {
        font-size: ${fontSizes.BIG};
        line-height: 1;
      }
    }
  `}
`;

export default Price;
