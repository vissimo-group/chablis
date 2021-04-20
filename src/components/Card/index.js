import styled, { css } from 'styled-components';

import { breakpoints, colors, sizes } from '../../styles/variables';

const Card = styled.div`
  position: relative;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: ${({ width }) => width || '100%'};
  height: ${({ height }) => height || '175px'};
  border-width: 1px;
  border-style: solid;
  border-color: ${colors.DARKEST_GREY_2};
  box-sizing: border-box;
  cursor: pointer;
  padding: ${sizes.HALF};
  overflow: hidden;
  border-radius: ${sizes.RADIUS};
  z-index: 1;

  ${({ bgimage }) => bgimage && css`
    background-image: ${`url(${bgimage})`};
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
  `}

  ${({ bgimage }) => !bgimage && css`
    background-color: ${colors.LIGHTEST_GREY};
  `}

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
    transition: background-color .2s ease-out;

    @media screen and (min-width: ${breakpoints.SMALL}) {
      background-color: rgba(0, 0, 0, .55);
    }
  }

  :hover,
  :focus {
    ::before {
      background-color: rgba(0, 0, 0, .4);
    }
  }

  .image-country,
  .image-logo {
    z-index: 2;
  }

  .image-country {
    position: absolute;
    top: ${sizes.HALF};
    right: ${sizes.HALF};
    width: ${sizes.DEFAULT};
    height: ${sizes.DEFAULT};
  }

  .image-logo {
    position: relative;
  }

  .sr-only {
    position: absolute;
    width: 0;
    height: 0;
    overflow: hidden;
  }
`;

export default Card;
