import React from 'react';
import PropTypes from 'prop-types';
import { Bar, ProgressBarStyled, ProgressBarContainer } from '.';
import BodySmall from '../Typography/BodySmall';

const ProgressBar = ({ active, label, bars }) => (
  <ProgressBarContainer>
    {label && <BodySmall>{label}</BodySmall>}
    <ProgressBarStyled active={active}>
      {Array(bars).fill(<Bar active={active} />)}
    </ProgressBarStyled>
  </ProgressBarContainer>
);

ProgressBar.propTypes = {
  active: PropTypes.number,
  label: PropTypes.string,
  bars: PropTypes.number,
};

export default ProgressBar;
