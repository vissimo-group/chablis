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
    height: 570px;
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
        border: 2px solid ${colors.neutrals.neutral_400};
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
    height: 100%;
    width: 100%;
    border: 2px solid ${colors.neutrals.neutral_400};
    border-bottom: 1px dashed ${colors.neutrals.neutral_200};
    border-radius: 8px 8px 0 0;
    background-image: url(${props => props.image});
    background-size: cover;
    background-color: ${colors.neutrals.neutral_400};
`;

const CupomDetails = styled.div`
    border: 2px solid ${colors.neutrals.neutral_400};
    border-radius: 0 0 8px 8px;
    height: 100%;
    width: 100%;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    padding: 1rem 1rem 2.5rem 1rem;
    text-align: center;
`;

const CupomTitle = styled.span`
    max-height: 42px;
    overflow: hidden;
    font-family: ${fonts.BARLOW};
    font-size: ${fontSizes.BIG};
    font-weight: ${fontWeights.SEMIBOLD};
    color: ${colors.neutrals.neutral_100};
`;

const CupomDescription = styled.div`
    max-height: 99px;
    overflow: hidden;
    font-family: ${fonts.BARLOW};
    color: ${colors.neutrals.neutral_100};
`;

const Cupom = ({
  image, title, description, code, helperText,
}) => (
  <CupomWrapper>
    <CupomImage image={image} />

    <CupomDetails>
      <CupomTitle>{title}</CupomTitle>
      <CupomDescription>{description}</CupomDescription>
      <CopyCode code={code} helperText={helperText} />
    </CupomDetails>
  </CupomWrapper>
);

Cupom.propTypes = {
  image: PropTypes.string,
  title: PropTypes.string,
  description: PropTypes.string,
  code: PropTypes.string,
  helperText: PropTypes.string,
};

export default Cupom;
