import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import { breakpoints } from '../../../styles/variables';

const media = Object.keys(breakpoints).reduce((prev, next) => {
  const breakpoint = `
    @media (min-width: ${breakpoints[next]}) {
      max-width: ${breakpoints[next]};
    }
  `;

  let newValue = prev;
  newValue += breakpoint;

  return newValue;
}, '');


const ContainerDiv = styled.div`
  width: 100%;
  margin: 0 auto;
  box-sizing: border-box;
  transition: .3s ease-out;

  ${media}

  ${props => props.full && css`
    max-width: 100% !important;
  `}
`;

export default class Container extends PureComponent {
  static propTypes = {
    children: PropTypes.node.isRequired,
    full: PropTypes.bool,
  }

  static defaultProps = {
    full: false,
  }

  render() {
    return (
      <ContainerDiv {...this.props}>{this.props.children}</ContainerDiv>
    );
  }
}
