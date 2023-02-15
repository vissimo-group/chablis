import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import {
  fontSizes, fontWeights, fonts, colors,
} from '../../styles/variables';
import CopyCode from '../CopyCode';

export const CupomWrapper = styled.div`
    position: relative;
    width: 274px;
    display: flex;
    flex-direction: column;
    align-items: center;
    overflow: hidden;

    &:after {
        content: '';
        position: absolute;
        width: 56px;
        height: 56px;
        border-radius: 28px;
        bottom: -28px;
        right: 108px;
        background: white;
        z-index: 0;
        border: 1px solid gray;
    }

    &:before {
        content: '';
        position: absolute;
        width: 56px;
        height: 56px;
        border-radius: 28px;
        top: -28px;
        right: 108px;
        background: white;
        z-index: 0;
    }
`;

const CupomImage = styled.div`
    box-sizing: border-box;
    height: 268px;
    width: 100%;
    border: 1px solid gray;
    border-bottom: 1px dashed ${colors.neutrals.neutral_200};
    border-radius: 8px 8px 0 0;
    background-image: url(${props => props.image});
    background-size: cover;
    background-color: gray;
`;

const CupomDetails = styled.div`
    border: 1px solid gray;
    border-radius: 0 0 8px 8px;
    height: 268px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    padding: 1em;
    text-align: center;
`;

const CupomTitle = styled.span`
    font-family: ${fonts.BARLOW};
    font-size: ${fontSizes.BIG};
    font-weight: ${fontWeights.SEMIBOLD};
    color: ${colors.neutrals.neutral_100};
`;

const CupomDescription = styled.div`
    font-family: ${fonts.BARLOW};
    color: ${colors.neutrals.neutral_100};
`;

const Cupom = ({
  image, title, description, code,
}) => (
  <CupomWrapper>
    <CupomImage image={image} />

    <CupomDetails>
      <CupomTitle>{title}</CupomTitle>
      <CupomDescription>{description}</CupomDescription>
      <CopyCode code={code} />
    </CupomDetails>
  </CupomWrapper>
);

Cupom.propTypes = {
  image: PropTypes.string,
  title: PropTypes.string,
  description: PropTypes.string,
  code: PropTypes.string,
};

export default Cupom;
