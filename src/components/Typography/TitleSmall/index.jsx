import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import {
  fontSizes, fontWeights, sizes, colors,
} from '../../../styles/variables';

const SubTitleComponent = styled.h4`
  font-size: ${fontSizes.EXTRASMALL};
  font-weight: ${fontWeights.BOLD};
  padding-bottom: ${sizes.RADIUS};
  margin: 0;
  display: block;
  color: ${colors.neutrals.neutral_100};
`;

export default class TitleSmall extends PureComponent {
  static defaultProps = {
    small: false,
  }

  static propTypes = {
    children: PropTypes.node.isRequired,
    small: PropTypes.bool,
  }

  render() {
    return (
      <SubTitleComponent {...this.props}>{this.props.children}</SubTitleComponent>
    );
  }
}
