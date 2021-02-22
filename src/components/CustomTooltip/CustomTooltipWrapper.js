import styled from 'styled-components';

import TooltipWrapper from '../Tooltip/TooltipWrapper';

const CustomTooltipWrapper = styled(TooltipWrapper)`
  position: absolute;
  min-width: 255px;
  max-width: 280px;
  padding: 16px 24px;
  ${({ alignY }) => alignY}: calc(100% + 15px);
  ${({ alignX }) => alignX}: ${({ spaced }) => (spaced ? '-55px' : 'calc(50% - 32px)')};

  img {
    width: 100%;
    height: auto;
    margin-bottom: 16px;
    pointer-events: none;
  }

  p {
    color: #696969;
    font-size: 0.75rem;
    line-height: 0.875rem;
    text-align: left;
  }
`;

export default CustomTooltipWrapper;
