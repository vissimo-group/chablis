import styled from 'styled-components';

import {
  breakpoints,
  colors,
  fonts,
  fontSizes,
  sizes,
} from '../../styles/variables';

const Tag = styled.span`
  display: inline-block;
  box-sizing: border-box;
  background-color: ${({ backgroundColor }) => backgroundColor || colors.DARKEST_GREY} ;
  border-radius: ${sizes.RADIUS};
  color: ${({ color }) => color || colors.WHITE};
  font-family: ${fonts.DEFAULT};
  font-size: ${fontSizes.EXTRASMALL};
  font-weight: 700;
  line-height: ${fontSizes.SMALL};;
  padding: 3px 5px;
  text-rendering: optimizeLegibility;
  text-transform: ${({ uppercase }) => (uppercase ? 'uppercase' : 'none')};
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  user-select: none;

  @media screen and (min-width: ${breakpoints.SMALL}) {
    font-size: ${fontSizes.SMALL};
    padding: 5px 7px;
  }
`;

export default Tag;
