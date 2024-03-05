import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import {
  colors, fontWeights, fonts, fontSizes, breakpoints,
} from '../../styles/variables';
import { CupomWrapper } from '../Cupom';

const BigCupomWrapper = styled(CupomWrapper)`
    height: 536px;
    box-sizing: border-box;
    border-radius: 8px;
    overflow: hidden;
    padding: 32px 0;
    background-color: ${props => props.bg || colors.standard.default_black};

    @media (min-width: ${breakpoints.NORMAL}) {
        flex-direction: row-reverse;
        width: 727px;
        height: 320px;
        padding: 0rem 80px;

        &:before {
            content: '';
            position: absolute;
            width: 56px;
            height: 56px;
            border-radius: 40px;
            top: 131px;
            left: -40px;
            background: ${props => props.circleColor || colors.background.primary};
            z-index: 0;
        }

        &:after {
            content: '';
            position: absolute;
            width: 56px;
            height: 56px;
            border-radius: 40px;
            top: 131px;
            right: -40px;
            background: ${props => props.circleColor || colors.background.primary};
            z-index: 0;
        }
    }

    @media (min-width: ${breakpoints.LARGE}) {
        width: 1168px;
        height: 500px;

        &:before {
            width: 80px;
            height: 80px;
            top: 220px;
            left: -50px;
        }

        &:after {
            width: 80px;
            height: 80px;
            top: 220px;
            right: -50px;
        }
    }
`;

const CupomImage = styled.div`
    box-sizing: border-box;
    height: 100%;
    width: 100%;
    background-image: url(${props => props.image});
    background-repeat: no-repeat;
    background-size: 190px;
    background-position: center;
    background-color: ${colors.standard.default_black};
    padding: 1rem;

    @media (min-width: ${breakpoints.NORMAL}) {
        background-size: 260px;
    }

    @media (min-width: ${breakpoints.LARGE}) {
        background-size: 440px;
    }
`;

const CupomDetails = styled.div`
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    height: 100%;
    padding: 1.5rem 1rem 0 1rem;
    border-top: 2px dashed ${colors.neutrals.neutral_300};

    @media (min-width: ${breakpoints.NORMAL}) {
        justify-content: center;
        width: 100%;
        border-top:  none;
        border-right: 2px dashed ${colors.neutrals.neutral_300};
        padding: 0 2rem 0 0;
    }
`;

const CupomTitle = styled.span`
    font-family: ${fonts.PAYTONE};
    margin-bottom: 0.5em;
    text-align: center;
    color: ${props => props.titleColor || colors.background.primary};
    text-transform: uppercase;
    font-size: 24px;
    font-weight: ${fontWeights.REGULAR};

    @media (min-width: ${breakpoints.NORMAL}) {
        text-align: left;
    }

    @media (min-width: ${breakpoints.LARGE}) {
        font-size: ${fontSizes.LARGE};
    }
`;

const CupomDescription = styled.div`
    text-align: center;
    font-family: ${fonts.BARLOW};
    color: ${props => props.textColor || colors.background.primary};
    font-size: 14px;
    line-height: 1.5;

    @media (min-width: ${breakpoints.NORMAL}) {
        justify-content: center;
        width: 100%;
        text-align: left;
    }

    @media (min-width: ${breakpoints.LARGE}) {
        font-size: ${fontSizes.BIG};
    }
`;

const BigCupom = ({
  image, title, description, textColor, titleColor, bg, circleColor,
}) => (
  <BigCupomWrapper bg={bg} circleColor={circleColor}>
    <CupomImage image={image} />

    <CupomDetails>
      <CupomTitle titleColor={titleColor}>{title}</CupomTitle>
      <CupomDescription textColor={textColor}>{description}</CupomDescription>
    </CupomDetails>
  </BigCupomWrapper>
);

BigCupom.propTypes = {
  image: PropTypes.string,
  title: PropTypes.string,
  description: PropTypes.string,
  titleColor: PropTypes.string,
  textColor: PropTypes.string,
  bg: PropTypes.string,
  circleColor: PropTypes.string,
};

export default BigCupom;
