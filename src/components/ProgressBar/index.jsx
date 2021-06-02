import styled, { css } from 'styled-components';
import { sizes, zIndexes, colors } from '../../styles/variables';

export const Bar = styled.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 6px;
  margin-right: 0.2%;
  opacity: 0.2;
  position: relative;

  &:nth-child(1) {
    background-color: ${colors.ORANGE_1};
    border-top-left-radius: ${sizes.RADIUS};
    border-bottom-left-radius: ${sizes.RADIUS};
  }

  &:nth-child(2) {
    background-color: ${colors.ORANGE_2};
  }

  &:nth-child(3) {
    background-color:  ${colors.ORANGE_3};
  }

  &:nth-child(4) {
    background-color:  ${colors.ORANGE_4};
  }

  &:nth-child(5) {
    background-color:  ${colors.ORANGE_5};
    border-top-right-radius: ${sizes.RADIUS};
    border-bottom-right-radius: ${sizes.RADIUS};
  }

  &:nth-child(-n+${({ active }) => active}) {
    opacity: 1;
  }
`;

export const ProgressBarStyled = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;

  & span:nth-child(${({ active }) => active}) {
    &:after {
      content: "";
      display: block;
      width: 10px;
      height: 10px;
      background-color: #fff;
      border-radius: 50%;
      border: 3px solid #ec720b;
      position: absolute;
      right: -10px;
      z-index: ${zIndexes.STRATOSPHERE};
    }
  }

  ${({ active }) => active === 0 && css`
    & span:first-child {
      &:after {
        content: "";
        display: block;
        width: 10px;
        height: 10px;
        background-color: #fff;
        border-radius: 50%;
        border: 3px solid #ec720b;
        position: absolute;
        left: 0px;
        z-index: ${zIndexes.STRATOSPHERE};
      }
    }
  `}`;

export const ProgressBarContainer = styled.div`
  display: flex;
  align-items: center;

  p {
    margin-right: 10px;
  }
`;
