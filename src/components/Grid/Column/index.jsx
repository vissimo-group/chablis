import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import { sizes, breakpoints } from '../../../styles/variables';


const ColumnDiv = styled.div`
  width: ${props => props.mobile * 8.333}%;
  max-width: 100%;
  padding: 0 ${sizes.HALF};
  box-sizing: border-box;
  align-self: ${props => props.align};

  ${props => props.tablet && css`
    @media(min-width: ${breakpoints.EXTRASMALL}) {
      width: ${props.tablet * 8.333}%;
    }
  `}

  ${props => props.desktop && css`
    @media(min-width: ${breakpoints.NORMAL}) {
      width: ${props.desktop * 8.333}%;
    }
  `}
`;

export default class Column extends PureComponent {
  static propTypes = {
    children: PropTypes.node.isRequired,
    mobile: PropTypes.number.isRequired,
    tablet: PropTypes.number,
    desktop: PropTypes.number,
    align: PropTypes.oneOf([
      'auto',
      'flex-start',
      'center',
      'flex-end',
      'baseline',
      'stretch',
    ]),
  }

  static defaultProps = {
    align: 'auto',
  }

  render() {
    return (
      <ColumnDiv {...this.props}>{this.props.children}</ColumnDiv>
    );
  }
}
