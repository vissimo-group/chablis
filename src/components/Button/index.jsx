import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import { colors, sizes, fontSizes, fontWeights } from '../../styles/variables';

const ActionButton = styled.button`
  width: 300px;
  height: 50px;
  background: ${colors.PRIMARY};
  font-size: ${fontSizes.SMALL};
  font-weight: ${fontWeights.MEDIUM};
  color: ${colors.WHITE};
  border: 1px solid ${colors.PRIMARY};
  outline: 0;
  border-radius: ${sizes.RADIUS};
  cursor: pointer;
  display: block;
  transition: .3s;

  &:hover {
    background: ${colors.PRIMARY_DARKEN};
    border-color: ${colors.PRIMARY_DARKEN};
    color: ${colors.WHITE};
  }

  &:disabled {
    cursor: default;
    color: ${colors.DARK_GREY};
    background: ${colors.LIGHTEST_GREY};
    border-color: ${colors.LIGHTEST_GREY};
  }

  ${props => props.thin && css`
    height: 30px;
  `}

  ${props => props.fluid && css`
    width: ${sizes.FULL};
  `}

  ${props => props.secondary && css`
    background: ${colors.WHITE};
    color: ${colors.PRIMARY};
  `}

  ${props => props.secondary && props.disabled && css`
    background: ${colors.WHITE} !important;
    border-color: ${colors.DARK_GREY} !important;
  `}
`;

export default class Button extends PureComponent {
  static propTypes = {
    children: PropTypes.string.isRequired,
    fluid: PropTypes.bool,
    onClick: PropTypes.func,
    secondary: PropTypes.bool,
    disabled: PropTypes.bool,
    thin: PropTypes.bool,
  }

  render() {
    return (
      <ActionButton {...this.props}>{this.props.children}</ActionButton>
    );
  }
}
