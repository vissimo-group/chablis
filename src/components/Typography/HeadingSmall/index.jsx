import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import {
  fontSizes, fontWeights, sizes, colors,
} from '../../../styles/variables';

const TitleComponent = styled.h2`
  font-size: ${fontSizes.BIG};
  font-weight: ${fontWeights.REGULAR};
  padding: ${sizes.DEFAULT} 0;
  text-align: left;
  display: block;
  margin: 0;
  color: ${colors.neutrals.neutral_100};
`;

export default class HeadingSmall extends PureComponent {
  static propTypes = {
    children: PropTypes.node.isRequired,
  }

  render() {
    return (
      <TitleComponent {...this.props}>{this.props.children}</TitleComponent>
    );
  }
}
