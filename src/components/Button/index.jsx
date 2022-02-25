import styled, { css } from 'styled-components';

import {
  colors, sizes, fontSizes, fontWeights,
} from '../../styles/variables';

const Button = styled.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  max-width: 300px;
  width: 100%;
  background-color: ${colors.primary.base};
  border-width: 1px;
  border-style: solid;
  border-color: ${colors.primary.base};
  border-radius: ${sizes.RADIUS};
  color: ${colors.standard.white};
  font-size: ${fontSizes.SMALL};
  font-weight: ${fontWeights.REGULAR};
  line-height: ${fontSizes.SMALL};
  outline: 0;
  padding: 5px 15px;
  text-align: center;
  text-decoration: none;
  cursor: pointer;
  box-sizing: border-box;
  transition-duration: 0.3s;
  transition-timing-function: ease-out;
  transition-property: background-color, border-color, color;

  ${({ borderless }) => !borderless
    && css`
      :hover,
      :focus {
        background: ${colors.primary.primary_20};
        border-color: ${colors.primary.primary_20};
        color: ${colors.standard.white};
      }
    `}

  ${({ disabled }) => disabled
    && css`
      cursor: default;
      color: ${colors.standard.dark_grey};
      background-color: ${colors.standard.lightest_grey};
      border-color: ${colors.standard.lightest_grey};
    `}

  ${({ thin }) => !thin
    && css`
      min-height: 50px;
    `}

  ${({ thin }) => thin
    && css`
      min-height: 30px;
    `}

  ${({ fluid }) => fluid
    && css`
      max-width: ${sizes.FULL};
    `}

  ${({ borderless }) => borderless
    && css`
      border-width: 0;
    `}

  ${({ borderless, secondary }) => secondary
    && css`
      background-color: transparent;
      color: ${borderless ? colors.standard.medium_grey : colors.primary.base};
    `}

  ${({ disabled, secondary }) => secondary
    && disabled
    && css`
      background-color: ${colors.standard.white} !important;
      border-color: ${colors.standard.medium_grey} !important;
    `}
`;

export default Button;
