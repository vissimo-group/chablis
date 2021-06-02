import styled from 'styled-components';

export const Bar = styled.li`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 6px;
  margin-right: 0.1%;
  opacity: 0.2;
  position: relative;
  background-color: red;

  &:nth-child(1) {
    background-color: #ffb55f;
    border-top-left-radius: 4px;
    border-bottom-left-radius: 4px;
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
    border-top-right-radius: 4px;
    border-bottom-right-radius: 4px;
  }

  &:nth-child(-n+${({ active }) => active}) {
    opacity: 1;
  }
`;

export const ProgressBarStyled = styled.ul`
  display: flex;
  justify-content: space-between;

  & li:nth-child(${props => props.active}) {
    &:after {
      content: "";
      display: inline-block;
      width: 10px;
      height: 10px;
      background-color: #fff;
      border-radius: 50%;
      border: 3px solid #ec720b;
      position: absolute;
      right: -10px;
      z-index: 3;
    }
  }
  `;
