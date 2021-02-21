import styled from 'styled-components';

import {
  colors,
  fontSizes,
  fontWeights,
  sizes,
} from '../../styles/variables';

const QuestionMark = styled.button`
  position: relative;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: ${sizes.DEFAULT};
  height: ${sizes.DEFAULT};
  background-color: ${colors.GREEN};
  border-width: 0;
  border-radius: 50%;
  padding: 0;
  margin: 0;
  cursor: help;
  transition: opacity .2s ease-out;

  :hover,
  :focus {
    opacity: .8;
    outline: none;
  }

  :active {
    opacity: .7;
  }

  > span {
    :first-of-type {
      display: inline-block;
      text-indent: -99999px;
    }
  }

  ::before {
    content: '?';
    color: ${colors.WHITE};
    font-size: ${fontSizes.SMALL};
    font-weight: ${fontWeights.NORMAL};
    line-height: ${fontSizes.NORMAL};
  }
`;

export default QuestionMark;
