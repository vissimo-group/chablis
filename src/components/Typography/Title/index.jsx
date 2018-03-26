import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { fontSizes, fontWeights, sizes } from '../../../styles/variables';

const Title = styled.h2`
  font-size: ${fontSizes.HUGE};
  font-weight: ${fontWeights.REGULAR};
  padding: ${sizes.LARGE} 0;
  text-align: center;
  display: block;

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
