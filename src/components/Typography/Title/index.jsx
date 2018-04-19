import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { fontSizes, fontWeights, sizes, colors, breakpoints } from '../../../styles/variables';

const Title = styled.h2`
  font-size: 32px;
  font-weight: ${fontWeights.REGULAR};
  padding: ${sizes.LARGE} 0;
  text-align: center;
  display: block;
  color: ${colors.BLACK};

  @media(min-width: ${breakpoints.NORMAL}) {
    font-size: ${fontSizes.HUGE};
  }
`;

export default class Button extends PureComponent {
  static propTypes = {
    children: PropTypes.node.isRequired,
  }

  render() {
    return (
      <Title {...this.props}>{this.props.children}</Title>
    );
  }
}
