import React from 'react';
import PropTypes from 'prop-types';

import { BodySmall } from '../Typography';
import ProgressBarContainer from './ProgressBarContainer';
import ProgressBarStyled from './ProgressBarStyled';
import Bar from './Bar';


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
