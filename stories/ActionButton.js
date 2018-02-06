/* eslint-disable */
import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import Button from '../src/components/Buttons/ActionButton';

storiesOf('ActionButton', module)
  .add('Primary - Default', () => (
    <Button
      onClick={action('clicked')}
    >
      Default
    </Button>
  ))
  .add('Primary - Fluid', () => (
    <Button
      onClick={action('clicked')}
      fluid
    >
      Fluid
    </Button>
  ))
  .add('Primary - Thin', () => (
    <Button
      onClick={action('clicked')}
      thin
    >
      Thin
    </Button>
  ))
  .add('Primary - Disabled', () => (
    <Button
      onClick={action('clicked')}
      disabled
    >
      Disabled
    </Button>
  ))
  .add('Secondary - Default', () => (
    <Button
      onClick={action('clicked')}
      secondary
    >
      Default
    </Button>
  ))
  .add('Secondary - Fluid', () => (
    <Button
      onClick={action('clicked')}
      secondary
      fluid
    >
      Fluid
    </Button>
  ))
  .add('Secondary - Thin', () => (
    <Button
      onClick={action('clicked')}
      secondary
      thin
    >
      Thin
    </Button>
  ))
  .add('Secondary - Disabled', () => (
    <Button
      onClick={action('clicked')}
      secondary
      disabled
    >
      Disabled
    </Button>
  ));