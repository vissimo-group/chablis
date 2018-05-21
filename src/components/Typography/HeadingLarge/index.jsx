import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import { fontSizes, fontWeights, sizes, colors } from '../../../styles/variables';

const TitleComponent = styled.h2`
  font-size: ${fontSizes.HUGE2};
  font-weight: ${fontWeights.REGULAR};
  padding: ${sizes.LARGE} 0;
  text-align: center;
  display: block;
  margin: 0;
  color: ${colors.BLACK};
`;

export default class HeadingLarge extends PureComponent {
  static propTypes = {
    children: PropTypes.node.isRequired,
  }

  render() {
    return (
      <TitleComponent {...this.props}>{this.props.children}</TitleComponent>
    );
  }
}
