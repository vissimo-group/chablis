import React from 'react';
import { storiesOf } from '@storybook/react';
import ProgressBar from './SetComponent';

storiesOf('ProgressBar', module)
  .addWithInfo('ProgressBar with Fruit', () => (
    <ProgressBar active={2} bars={5} label="Fruta" />
  )).addWithInfo('ProgressBar with Sugar', () => (
    <ProgressBar active={1} label="Açúcar" />
  )).addWithInfo('ProgressBar with less items', () => (
    <ProgressBar active={1} bars={3} label="Açúcar" />
  ))
  .addWithInfo('ProgressBar with more items', () => (
    <ProgressBar active={1} bars={8} label="Açúcar" />
  ));
