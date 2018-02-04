import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import { colors, sizes, fontSizes } from '../../../styles/variables';

const Button = styled.button`
  width: 300px;
  height: 50px;
  background: ${colors.PRIMARY};
  font-size: ${fontSizes.SMALL};
  color: ${colors.WHITE};
  border: 1px solid ${colors.PRIMARY};
  outline: 0;
  border-radius: ${sizes.RADIUS};
  cursor: pointer;

  ${props => props.fluid && css`
    width: ${sizes.FULL};
  `}

  ${props => props.secondary && css`
    background: ${colors.WHITE};
    color: ${colors.PRIMARY};
  `}
`;

export default class ActionButton extends PureComponent {
  static propTypes = {
    children: PropTypes.string.isRequired,
    fluid: PropTypes.bool,
    onClick: PropTypes.func,
    secondary: PropTypes.bool,
  }

  render() {
    const { children, fluid, onClick, secondary } = this.props;
    return (
      <Button
        fluid={fluid}
        secondary={secondary}
        onClick={onClick}>{children}</Button>
    );
  }
}
