import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import {
  fontSizes, fontWeights, colors, sizes,
} from '../../../styles/variables';

const ParagraphComponent = styled.p`
  font-size: ${fontSizes.SMALL};
  font-weight: ${fontWeights.REGULAR};
  line-height: normal;
  color: ${colors.neutrals.neutral_100};
  margin: 0;
  padding-bottom: ${sizes.HALF};
`;

export default class BodyMedium extends PureComponent {
  static defaultProps = {
    small: false,
  }

  static propTypes = {
    children: PropTypes.node.isRequired,
    small: PropTypes.bool,
  }

  render() {
    return (
      <ParagraphComponent {...this.props}>{this.props.children}</ParagraphComponent>
    );
  }
}
