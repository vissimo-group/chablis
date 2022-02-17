import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { fontSizes, fontWeights, colors } from '../../../styles/variables';

const ParagraphComponent = styled.p`
  font-size: ${fontSizes.EXTRASMALL};
  font-weight: ${fontWeights.REGULAR};
  line-height: normal;
  color: ${colors.standard.darkest_grey};
  margin: 0;
`;

export default class BodySmall extends PureComponent {
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
