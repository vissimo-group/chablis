import styled from "styled-components";

export const ProgressBar = styled.ol`
  display: flex;
  justify-content: space-between;
  width: 100%;
`;

export const Bar1 = styled.li`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 6px;
  border-top-left-radius: 4px;
  border-bottom-left-radius: 4px;
  background-color: #ffb55f;
  margin-right: 0.1%;
`;

export const Bar2 = styled.li`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 6px;
  background-color: #f49a30;
  margin-right: 0.1%;
  position: relative;

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
  }
`;

export const Bar3 = styled.li`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 6px;
  background-color: #f8892c;
  margin-right: 0.1%;
  opacity: ${(props) => props.active};
`;

export const Bar4 = styled.li`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 6px;
  background-color: #ec720b;
  margin-right: 0.1%;
  opacity: 0.2;
`;

export const Bar5 = styled.li`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 6px;
  border-top-right-radius: 4px;
  border-bottom-right-radius: 4px;
  background-color: #c85f01;
  opacity: 0.2;
`;
