import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import TooltipWrapper from './TooltipWrapper';

import { GetPosition } from '../../Utils';

export default class Tooltip extends PureComponent {
  static propTypes = {
    text: PropTypes.string.isRequired,
    spaced: PropTypes.bool,
    show: PropTypes.bool,
    align: PropTypes.oneOf([
      'bottom-start',
      'bottom-end',
      'top-start',
      'top-end',
    ]),
    type: PropTypes.oneOf([
      'default',
      'success',
      'danger',
    ]),
  }

  static defaultProps = {
    show: true,
    spaced: false,
    align: 'top-end',
    type: 'default',
  }

  render() {
    const { props } = this;
    const { align, text } = props;

    const position = GetPosition(align);

    const tooltipWrapperProps = {
      ...props,
      alignX: position[0],
      alignY: position[1],
    };

    return <TooltipWrapper {...tooltipWrapperProps}>{text}</TooltipWrapper>;
  }
}
