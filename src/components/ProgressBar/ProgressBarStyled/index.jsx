import styled, { css } from 'styled-components';
import { colors, zIndexes } from '../../../styles/variables';

const ProgressBarStyled = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;

  span:nth-child(${({ active }) => active}) {
    &:after {
      content: "";
      display: block;
      width: 16px;
      height: 16px;
      background-color: ${colors.WHITE};
      border-radius: 50%;
      border: 3px solid ${colors.orange_4};
      position: absolute;
      right: -10px;
      z-index: ${zIndexes.STRATOSPHERE};
    }
  }

  ${({ active }) => active === 0 && css`
    span:first-child {
      background-color: ${colors.orange_1}30;
      &:after {
        content: '';
        display: block;
        width: 16px;
        height: 16px;
        background-color: ${colors.WHITE};
        border-radius: 50%;
        border: 3px solid ${colors.orange_4};
        position: absolute;
        left: 0;
        z-index: ${zIndexes.STRATOSPHERE};
      }
    }
  `}`;

export default ProgressBarStyled;
