import React from 'react';
import { storiesOf } from '@storybook/react';
import ProgressBar from './SetComponent';

storiesOf('ProgressBar', module).addWithInfo('ProgressBar', () => (
  <ProgressBar active={0} bars={5} label="Doçura" />
));
