/* eslint-disable */
import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import Button from '../src/components/Buttons/ActionButton';

storiesOf('Buttons', module)
  .add('ActionButton - Primary - Default', () => (
    <Button
      onClick={action('clicked')}
    >
      Default Button
    </Button>
  ))
  .add('ActionButton - Primary - Fluid', () => (
    <Button
      onClick={action('clicked')}
      fluid
    >
      Fluid Button
    </Button>
  ))
  .add('ActionButton - Secondary - Default', () => (
    <Button
      onClick={action('clicked')}
      secondary
    >
      Secondary Button
    </Button>
  ))
  .add('ActionButton - Secondary - Fluid', () => (
    <Button
      onClick={action('clicked')}
      secondary
      fluid
    >
      Secondary Fluid Button
    </Button>
  ))