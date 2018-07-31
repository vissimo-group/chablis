import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import { breakpoints, sizes } from '../../../styles/variables';

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

const restrictContainerWidth = (prop, breakpoint) => prop && css`
  @media (min-width: ${breakpoint}) {
    max-width: 100%;
  }
`;


const ContainerDiv = styled.div`
  width: 100%;
  margin: 0 auto;
  box-sizing: border-box;
  transition: .3s ease-out;
  padding-left: ${sizes.HALF}
  padding-right: ${sizes.HALF}

  ${media}

  ${props => props.full && css`
    max-width: 100%;
  `}

  ${props => restrictContainerWidth(props.fullTablet, breakpoints.SMALL)}
  ${props => restrictContainerWidth(props.fullSmallDesktop, breakpoints.NORMAL)}
  ${props => restrictContainerWidth(props.fullDesktop, breakpoints.BIG)}
  ${props => restrictContainerWidth(props.fullLargeDesktop, breakpoints.LARGE)}
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
