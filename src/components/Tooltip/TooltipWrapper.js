import styled, { css } from 'styled-components';

import {
  colors,
  fontSizes,
  fontWeights,
  sizes,
} from '../../styles/variables';

import { fadeIn } from '../../styles/animations';

const TooltipWrapper = styled.span`
  font-size: ${fontSizes.SMALL};
  font-weight: ${fontWeights.LIGHT};
  padding: ${sizes.HALF} ${sizes.DEFAULT};
  color: ${colors.WHITE};
  border-radius: ${sizes.RADIUS};
  position: absolute;
  min-width: 255px;
  max-width: 300px;
  text-align: center;
  animation: ${fadeIn} .2s ease-in;
  display: ${({ show }) => (show ? 'block' : 'none')};
  ${({ alignY }) => alignY}: calc(100% + 12px);
  ${({ alignX }) => alignX}: ${({ spaced }) => (spaced ? '-55px' : '5px')};

  ${({ type }) => type === 'default' && css`
    background-color: ${colors.LIGHTEST_GREY}};
    color: ${colors.DARK_GREY};
  `}

  ${({ type }) => type === 'success' && css`
    background-color: ${colors.primary.base};

    ::after {
      border-color: ${colors.primary.base};
    }
  `}

  ${({ type }) => type === 'danger' && css`
    background-color: ${colors.secondary.base};
  `}

  ::after {
    content: '';
    border-left: 12px solid transparent !important;
    border-right: 12px solid transparent !important;
    border-top: 9px solid;
    width: 0;
    position: absolute;
    ${({ alignX }) => alignX}: ${({ spaced }) => (spaced ? '80px' : '20px')};
    ${({ alignY }) => alignY}: -9px;

    ${({ alignY }) => alignY === 'top' && css`
      border-top: 0;
      border-bottom: 9px solid;
    `}

    ${({ type }) => type === 'success' && css`
      border-color: ${colors.primary.base};
    `}

    ${({ type }) => type === 'danger' && css`
      border-color: ${colors.secondary.base};
    `}

    ${({ type }) => type === 'default' && css`
      border-color: ${colors.LIGHTEST_GREY};
    `}
  }
`;

export default TooltipWrapper;
