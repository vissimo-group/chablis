import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import { colors, sizes, fontSizes, fontWeights } from '../../styles/variables';

const ActionButton = styled.button`
  max-width: 300px;
  width: 100%;
  min-height: 50px;
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
    max-width: ${sizes.FULL};
  `}

  ${props => props.secondary && css`
    background: transparent;
    color: ${colors.PRIMARY};
  `}

  ${props => props.secondary && props.disabled && css`
    background: ${colors.WHITE} !important;
    border-color: ${colors.DARK_GREY} !important;
  `}
`;

export default class Button extends PureComponent {
  static propTypes = {
    children: PropTypes.node.isRequired,
    onClick: PropTypes.func,
    fluid: PropTypes.bool,
    secondary: PropTypes.bool,
    disabled: PropTypes.bool,
    thin: PropTypes.bool,
  }

  static defaultProps = {
    fluid: false,
    secondary: false,
    disabled: false,
    thin: false,
  }

  render() {
    return (
      <ActionButton {...this.props}>{this.props.children}</ActionButton>
    );
  }
}
