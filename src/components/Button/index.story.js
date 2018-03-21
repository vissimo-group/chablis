/* eslint-disable */
import React from 'react';
import { storiesOf } from '@storybook/react';
import Button from './';

const action = param => {
  alert(param);
}

storiesOf('Button', module)
  .addWithInfo('Primary Button', () => (
    <Button
      onClick={action.bind(this, 'clicked')}
    >
      Primary Button
    </Button>
  ))
  .addWithInfo('Fluid Button', () => (
    <Button
      onClick={action.bind(this, 'clicked')}
      fluid
    >
      Fluid Button
    </Button>
  ))
  .addWithInfo('Thin Button', () => (
    <Button
      onClick={action.bind(this, 'clicked')}
      thin
    >
      Thin Button
    </Button>
  ))
  .addWithInfo('Disabled Button', () => (
    <Button
      onClick={action.bind(this, 'clicked')}
      disabled
    >
      Disabled Button
    </Button>
  ))
  .addWithInfo('Secondary Button', () => (
    <Button
      onClick={action.bind(this, 'clicked')}
      secondary
    >
      Secondary Button
    </Button>
  ));