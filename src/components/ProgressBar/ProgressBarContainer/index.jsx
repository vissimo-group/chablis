import styled from 'styled-components';

const ProgressBarContainer = styled.div`
  display: flex;
  align-items: center;

  p {
    font-size: 14px;
    margin-right: 10px;
    width: ${({ labelWidth }) => labelWidth || '60px'}
  }
`;

export default ProgressBarContainer;
