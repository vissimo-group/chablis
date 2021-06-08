import React from 'react';
import { storiesOf } from '@storybook/react';
import ProgressBar from '.';

storiesOf('ProgressBar', module)
  .addWithInfo('ProgressBar with Fruit', () => (
    <ProgressBar active={0} label="Fruta" />
  )).addWithInfo('ProgressBar with Sugar', () => (
    <ProgressBar active={1} label="Açúcar" />
  )).addWithInfo('ProgressBar with no label', () => (
    <ProgressBar active={1} />
  ))
  .addWithInfo('ProgressBar with labelWidth', () => (
    <div>
      <div style={{ marginBottom: 10 }}>
        <ProgressBar active={1} label="Açúcar" labelWidth="130px" />
      </div>
      <ProgressBar active={3} label="Monossacarídeo" labelWidth="130px" />
    </div>
  ));
