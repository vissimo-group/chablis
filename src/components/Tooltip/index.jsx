import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import { colors, fontSizes, fontWeights, sizes } from '../../styles/variables';
import { fadeIn } from '../../styles/animations';

const TooltipWrapper = styled.span`
  font-size: ${fontSizes.SMALL};
  font-weight: ${fontWeights.LIGHT};
  padding: ${sizes.HALF} ${sizes.LARGE};
  color: ${colors.WHITE};
  border-radius: ${sizes.RADIUS};
  position: absolute;
  min-width: 255px;
  max-width: 300px;
  text-align: center;
  animation: ${fadeIn} .2s ease-in;
  display: ${props => props.show ? 'block' : 'none'};
  ${props => props.alignY}: calc(100% + 12px);
  ${props => props.alignX}: ${props => props.spaced ? '-55px' : '5px'};

  ${props => props.type === 'default' && css`
    background: ${colors.LIGHTEST_GREY}};
    color: ${colors.DARK_GREY};
  `}

  ${props => props.type === 'success' && css`
    background: ${colors.PRIMARY};

    &:after {
      border-color: ${colors.PRIMARY};
    }
  `}

  ${props => props.type === 'danger' && css`
    background: ${colors.SECONDARY};
  `}

  &:after {
    content: '';
    border-left: 12px solid transparent !important;
    border-right: 12px solid transparent !important;
    border-top: 9px solid;
    width: 0;
    position: absolute;
    ${props => props.alignX}: ${props => props.spaced ? '80px' : '20px'};
    ${props => props.alignY}: -9px;

    ${props => props.alignY === 'top' && css`
      border-top: 0;
      border-bottom: 9px solid;
    `}

    ${props => props.type === 'success' && css`
      border-color: ${colors.PRIMARY};
    `}

    ${props => props.type === 'danger' && css`
      border-color: ${colors.SECONDARY};
    `}

    ${props => props.type === 'default' && css`
      border-color: ${colors.LIGHTEST_GREY};
    `}
  }
`;

export default class Tooltip extends PureComponent {
  static propTypes = {
    text: PropTypes.string.isRequired,
    spaced: PropTypes.bool,
    show: PropTypes.bool,
    element: PropTypes.element,
    align: PropTypes.oneOf([
      'bottom-start',
      'bottom-end',
      'top-start',
      'top-end'
    ]),
    type: PropTypes.oneOf(['default', 'success', 'danger']),
  }

  static defaultProps = {
    show: true,
    align: 'top-end',
    type: 'default',
  }

  getPosition = (align) => {
    switch (align) {
      case 'top-start':
        return ['left', 'bottom'];
      case 'top-end':
        return ['right', 'bottom'];
      case 'bottom-start':
        return ['left', 'top'];
      case 'bottom-end':
      default:
        return ['right', 'top'];
    }
  }

  render() {
    const position = this.getPosition(this.props.align);

    return (
      <TooltipWrapper
        {...this.props}
        alignX={position[0]}
        alignY={position[1]}
      >
        {this.props.text}
      </TooltipWrapper>
    );
  }
}
