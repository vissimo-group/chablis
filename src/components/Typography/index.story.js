/* eslint-disable */
import React from 'react';
import { storiesOf } from '@storybook/react';
import { Title } from './';

storiesOf('Typography', module)
  .addWithInfo('Default Types', () => (
    <div>
      <Title>This is a title!</Title>
    </div>
  ))