import React from 'react';
import { storiesOf } from '@storybook/react';
import ProgressBar from '.';

storiesOf('ProgressBar', module)
  .addWithInfo('ProgressBar with Fruit', () => (
    <ProgressBar active={2} label="Fruta" />
  )).addWithInfo('ProgressBar with Sugar', () => (
    <ProgressBar active={1} label="Açúcar" />
  )).addWithInfo('ProgressBar with no label', () => (
    <ProgressBar active={1} />
  ));
