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
  cursor: pointer;
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
    <CupomCode onClick={() => { navigator.clipboard.writeText(code); }}>
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
