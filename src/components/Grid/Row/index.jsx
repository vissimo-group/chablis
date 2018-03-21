import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { breakpoints, sizes } from '../../../styles/variables';


const RowDiv = styled.div`
  width: 100%;
  display: flex;
  box-sizing: border-box;
  flex-flow: row wrap;
  align-items: ${props => props.align};

  @media(min-width: ${breakpoints.EXTRASMALL}) {
    padding: 0 ${sizes.HALF};
  }

  ${props => props.styles}
`;

export default class Row extends PureComponent {
  static propTypes = {
    children: PropTypes.node.isRequired,
    styles: PropTypes.string,
    align: PropTypes.oneOf([
      'flex-start',
      'center',
      'flex-end',
      'baseline',
      'stretch',
    ]),
  }

  static defaultProps = {
    align: 'flex-start',
  }

  render() {
    return (
      <RowDiv {...this.props}>{this.props.children}</RowDiv>
    );
  }
}
