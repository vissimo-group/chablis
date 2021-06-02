import styled, { css } from 'styled-components';

import { sizes, zIndexes } from '../../styles/variables';

export const Bar = styled.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 6px;
  margin-right: 0.2%;
  opacity: 0.2;
  position: relative;
  background-color: #ad6c22;

  &:nth-child(1) {
    background-color: #ffb55f;
    border-top-left-radius: ${sizes.RADIUS};
    border-bottom-left-radius: ${sizes.RADIUS};
  }

  &:nth-child(2) {
    background-color: #f49a30;
  }

  &:nth-child(3) {
    background-color: #f8892c;
  }

  &:nth-child(4) {
    background-color: #ec720b;
  }

  &:nth-child(5) {
    background-color: #c85f01;
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
