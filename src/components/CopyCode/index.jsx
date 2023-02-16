import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { colors, fontSizes, fonts } from '../../styles/variables';

const CupomCodeWrapper = styled.div`
  font-family: ${fonts.BARLOW};
  font-size: ${fontSizes.EXTRASMALL};
  color: ${colors.neutrals.neutral_100};
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-bottom: 28px;
`;

const CupomCode = styled.div`
  margin-bottom: 1em;
  display: flex;
  align-items: center;
`;

const Code = styled.span`
  font-family: ${fonts.BARLOW};
  font-size: ${fontSizes.NORMAL};
  color: ${colors.neutrals.neutral_100};
  width: 170px;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 50px;
  border: 1px solid ${colors.neutrals.neutral_300};
  border-radius:  10px 0 0 10px;
`;

const CupomCodeIcon = styled.div`
  cursor: pointer;
  background-color: ${colors.primary.base};
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius:  0 10px 10px 0;
  height: 52px;
  width: 56px;
  transition-duration: 0.3s;
  transition-timing-function: ease-out;

  :hover,
  :focus {
    background: ${colors.primary.primary_20};
  }
`;

const copyIcon = (
  <svg width="14" height="18" viewBox="0 0 14 18" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M0 5.75C0 5.33579 0.335786 5 0.75 5H4.75C4.94891 5 5.13968
      5.07902 5.28033 5.21967L9.28033 9.21967C9.42098 9.36032 9.5
      9.55109 9.5 9.75V16.75C9.5 17.1642 9.16421 17.5 8.75 17.5H0.75C0.335786
      17.5 0 17.1642 0 16.75V5.75ZM1.5 6.5V16H8V10.5H4.75C4.33579 10.5 4 10.1642
      4 9.75V6.5H1.5ZM5.5 7.56066L6.93934 9H5.5V7.56066Z"
      fill="white"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M4.5 1.25C4.5 0.835786 4.83579 0.5 5.25 0.5H9.25C9.44891 0.5 9.63968
      0.579018 9.78033 0.71967L13.7803 4.71967C13.921 4.86032 14 5.05109 14
      5.25V12.25C14 12.6642 13.6642 13 13.25 13H11.25C10.8358 13 10.5 12.6642
      10.5 12.25C10.5 11.8358 10.8358 11.5 11.25 11.5H12.5V6H9.25C8.83579 6 8.5
      5.66421 8.5 5.25V2H6V3.25C6 3.66421 5.66421 4 5.25 4C4.83579 4 4.5 3.66421
      4.5 3.25V1.25ZM10 3.06066L11.4393 4.5H10V3.06066Z"
      fill="white"
    />
  </svg>
);


const CopyCode = ({ code }) => (
  <CupomCodeWrapper>
    <CupomCode onClick={() => { navigator.clipboard.writeText(code); }}>
      <Code>{code}</Code>
      <CupomCodeIcon>{copyIcon}</CupomCodeIcon>
    </CupomCode>

    Copie e cole o código no carrinho
  </CupomCodeWrapper>
);

CopyCode.propTypes = {
  code: PropTypes.string,
};

export default CopyCode;
