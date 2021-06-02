import React from 'react';
import PropTypes from 'prop-types';
import { Bar, ProgressBarStyled, ProgressBarContainer } from '.';
import BodySmall from '../Typography/BodySmall';

const ProgressBar = ({ active, label }) => (
  <ProgressBarContainer>
    {label && <BodySmall>{label}</BodySmall>}
    <ProgressBarStyled active={active}>
      {Array.from(Array(5), (_, i) => <Bar key={i} active={active} />)}
    </ProgressBarStyled>
  </ProgressBarContainer>
);

ProgressBar.propTypes = {
  active: PropTypes.number,
  label: PropTypes.string,
};

export default ProgressBar;
