import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import { sizes, breakpoints } from '../../../styles/variables';

const ColumnDiv = styled.div`
  width: ${props => props.mobile * 8.33}%;
  margin-left: ${props => props.offsetMobile * 8.33}%;
  max-width: 100%;
  padding-left: ${sizes.HALF};
  padding-right: ${sizes.HALF};
  box-sizing: border-box;
  align-self: ${props => props.align};

  @media(min-width: ${breakpoints.SMALL}) {
    ${props => props.tablet && css`
      flex: 0 0 ${props.tablet * 8.333}%;
      max-width: ${props.tablet * 8.333}%;
    `}

    ${props => props.offsetTablet && css`
     margin-left: ${props.offsetTablet * 8.333}%;
    `}
  }

  @media(min-width: ${breakpoints.NORMAL}) {
    ${props => props.smallDesktop && css`
      flex: 0 0 ${props.smallDesktop * 8.333}%;
      max-width: ${props.smallDesktop * 8.333}%;
    `}

    ${props => props.offsetSmallDesktop && css`
     margin-left: ${props.offsetSmallDesktop * 8.333}%;
    `}
  }

  @media(min-width: ${breakpoints.BIG}) {
    ${props => props.desktop && css`
      flex: 0 0 ${props.desktop * 8.333}%;
      max-width: ${props.desktop * 8.333}%;
    `}

    ${props => props.offsetDesktop && css`
     margin-left: ${props.offsetDesktop * 8.333}%;
    `}
  }

  @media(min-width: ${breakpoints.LARGE}) {
    ${props => props.largeDesktop && css`
      flex: 0 0 ${props.largeDesktop * 8.333}%;
      max-width: ${props.largeDesktop * 8.333}%;
    `}

    ${props => props.offsetLargeDesktop && css`
     margin-left: ${props.offsetLargeDesktop * 8.333}%;
    `}
  }
`;

export default class Column extends PureComponent {
  static propTypes = {
    children: PropTypes.node.isRequired,
    mobile: PropTypes.number.isRequired,
    tablet: PropTypes.number,
    desktop: PropTypes.number,
    offsetMobile: PropTypes.number,
    offsetTablet: PropTypes.number,
    offsetSmallDesktop: PropTypes.number,
    offsetDesktop: PropTypes.number,
    offsetLargeDesktop: PropTypes.number,
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
    offsetMobile: 0,
  }

  render() {
    return (
      <ColumnDiv {...this.props}>{this.props.children}</ColumnDiv>
    );
  }
}
