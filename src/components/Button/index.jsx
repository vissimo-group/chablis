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
  background-color: ${colors.PRIMARY};
  border-width: 1px;
  border-style: solid;
  border-color: ${colors.PRIMARY};
  border-radius: ${sizes.RADIUS};
  color: ${colors.WHITE};
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
        background: ${colors.PRIMARY_DARKEN};
        border-color: ${colors.PRIMARY_DARKEN};
        color: ${colors.WHITE};
      }
    `}

  ${({ disabled }) => disabled
    && css`
      cursor: default;
      color: ${colors.DARK_GREY};
      background-color: ${colors.LIGHTEST_GREY};
      border-color: ${colors.LIGHTEST_GREY};
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
      color: ${borderless ? colors.MEDIUM_GREY : colors.PRIMARY};
    `}

  ${({ disabled, secondary }) => secondary
    && disabled
    && css`
      background-color: ${colors.WHITE} !important;
      border-color: ${colors.DARK_GREY} !important;
    `}
`;

export default Button;
