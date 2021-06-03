import styled from 'styled-components';
import { colors, sizes } from '../../../styles/variables';

const Bar = styled.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 6px;
  margin-right: 0.6%;
  opacity: 0.2;
  position: relative;

  @media(min-width: 769px) {
    margin-right: 0.2%;
  }

  :nth-child(1) {
    background-color: ${colors.ORANGE_1};
    border-top-left-radius: ${sizes.RADIUS};
    border-bottom-left-radius: ${sizes.RADIUS};
  }

  :nth-child(2) {
    background-color: ${colors.ORANGE_2};
  }

  :nth-child(3) {
    background-color:  ${colors.ORANGE_3};
  }

  :nth-child(4) {
    background-color:  ${colors.ORANGE_4};
  }

  :nth-child(5) {
    background-color:  ${colors.ORANGE_5};
    border-top-right-radius: ${sizes.RADIUS};
    border-bottom-right-radius: ${sizes.RADIUS};
  }

  :nth-child(-n+${({ active }) => active}) {
    opacity: 1;
  }
`;

export default Bar;
