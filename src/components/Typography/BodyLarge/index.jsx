import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { fontSizes, fontWeights, colors, sizes } from '../../../styles/variables';

const ParagraphComponent = styled.p`
  font-size: ${fontSizes.NORMAL};
  font-weight: ${fontWeights.REGULAR};
  line-height: 1.5;
  color: ${colors.BLACK};
  margin: 0;
  padding-bottom: ${sizes.HALF};
`;

export default class BodyLarge extends PureComponent {
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
