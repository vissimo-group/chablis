/* eslint-disable */
import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import Button from './';

storiesOf('Button', module)
  .addWithInfo('Primary Button', () => (
    <Button
      onClick={action('clicked')}
    >
      Primary Button
    </Button>
  ))
  .addWithInfo('Fluid Button', () => (
    <Button
      onClick={action('clicked')}
      fluid
    >
      Fluid Button
    </Button>
  ))
  .addWithInfo('Thin Button', () => (
    <Button
      onClick={action('clicked')}
      thin
    >
      Thin Button
    </Button>
  ))
  .addWithInfo('Disabled Button', () => (
    <Button
      onClick={action('clicked')}
      disabled
    >
      Disabled Button
    </Button>
  ))
  .addWithInfo('Secondary Button', () => (
    <Button
      onClick={action('clicked')}
      secondary
    >
      Secondary Button
    </Button>
  ));