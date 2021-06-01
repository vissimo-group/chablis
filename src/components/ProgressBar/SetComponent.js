import React from 'react';
import PropTypes from 'prop-types';
import {
  ProgressBar, Bar1, Bar2, Bar3, Bar4, Bar5,
} from '.';
import BodySmall from '../Typography/BodySmall';

const SetProgressBar = ({ active, label }) => (
  <div>
    {label && <BodySmall>{label}</BodySmall>}
    <ProgressBar active={active}>
      <Bar1 />
      <Bar2 />
      <Bar3 />
      <Bar4 />
      <Bar5 />
    </ProgressBar>
  </div>
);

SetProgressBar.propTypes = {
  active: PropTypes.string,
  label: PropTypes.string,
};

export default SetProgressBar;
