import React from 'react';
import { storiesOf } from '@storybook/react';
import SetProgressBar from './SetComponent';

storiesOf('ProgressBar', module).addWithInfo('ProgressBar', () => (
  <SetProgressBar active="3" label="Doçura" />
));
