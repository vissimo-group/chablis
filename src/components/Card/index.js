import styled, { css } from 'styled-components';
import { breakpoints, colors, sizes } from '../../styles/variables';

const Card = styled.div`
  position: relative;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: ${({ width }) => width || '100%'};
  height: ${({ height }) => height || '175px'};
  background-color: ${colors.standard.lightest_grey};
  border-width: 1px;
  border-style: solid;
  border-color: ${colors.standard.darkest_grey_2};
  box-sizing: border-box;
  cursor: pointer;
  padding: ${sizes.HALF};
  margin: 0;
  overflow: hidden;
  border-radius: ${sizes.RADIUS};
  z-index: 1;
  object-fit: fill;

  ${props => props.darkenBackground && css`
    ::before {
      content: '';
      position: absolute;
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background-color: rgba(0, 0, 0, .3);
      z-index: 1;

      @media screen and (min-width: ${breakpoints.SMALL}) {
        background-color: rgba(0, 0, 0, .55);
      }
    }
  `}

  :hover,
  :focus {
    transform: scale(1.01);
    transition: .2s linear;
  }

  .image-card,
  .image-country,
  .sr-only {
    position: absolute;
  }

  .image-card {
    top: 50%;
    left: 50%;
    width: calc(100% + 10px);
    height: auto;
    min-height: ${({ height }) => (height ? `calc(${height} + 10px)` : '180px')};
    transform: translate3d(-50%, -50%, 0);
  }

  .image-country,
  .image-logo {
    z-index: 2;
  }

  .image-country {
    top: ${sizes.HALF};
    right: ${sizes.HALF};
    width: ${sizes.DEFAULT};
    height: ${sizes.DEFAULT};
  }

  .image-logo {
    position: relative;
  }

  .sr-only {
    width: 0;
    height: 0;
    overflow: hidden;
  }
`;

export default Card;
