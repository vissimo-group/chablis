import React from 'react';
import PropTypes from 'prop-types';
import { Bar, ProgressBarStyled } from '.';
import BodySmall from '../Typography/BodySmall';

const ProgressBar = ({ active, label, bars }) => (
  <div>
    {label && <BodySmall>{label}</BodySmall>}
    <ProgressBarStyled active={active}>
      {Array(bars).fill(<Bar active={active} />)}
    </ProgressBarStyled>
  </div>
);

ProgressBar.propTypes = {
  active: PropTypes.number,
  label: PropTypes.string,
  bars: PropTypes.number,
};

export default ProgressBar;
