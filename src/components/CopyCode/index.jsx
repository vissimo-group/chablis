import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { colors, fontSizes } from '../../styles/variables';

const CupomCodeWrapper = styled.div`
  font-size: ${fontSizes.EXTRASMALL};
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const CupomCode = styled.div`
  margin-bottom: 1em;
  display: flex;
  align-items: center;
`;

const Code = styled.span`
  width: 170px;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 50px;
  border: 1px solid gray;
  border-radius:  10px 0 0 10px;
`;

const CupomCodeIcon = styled.div`
  background-color: ${colors.primary.base};
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius:  0 10px 10px 0;
  height: 52px;
  width: 56px;
`;

const CopyCode = ({ code }) => (
  <CupomCodeWrapper>
    <CupomCode>
      <Code>{code}</Code>
      <CupomCodeIcon>X</CupomCodeIcon>
    </CupomCode>

    Copie e cole o código no carrinho
  </CupomCodeWrapper>
);

CopyCode.propTypes = {
  code: PropTypes.string,
};

export default CopyCode;
