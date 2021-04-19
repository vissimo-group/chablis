import React from 'react';
import { storiesOf } from '@storybook/react';
import Button from '.';

storiesOf('Button', module)
  .addWithInfo('Primary Button', () => (
    <Button primary>
      Primary Button
    </Button>
  ))
  .addWithInfo('Primary Link Button', () => (
    <Button primary as="a" href="#">
      Primary Link Button
    </Button>
  ))
  .addWithInfo('Fluid Button', () => (
    <Button fluid>
      Fluid Button
    </Button>
  ))
  .addWithInfo('Thin Button', () => (
    <Button thin>
      Thin Button
    </Button>
  ))
  .addWithInfo('Thin Link Button', () => (
    <Button thin as="a" href="#">
      Thin Link Button
    </Button>
  ))
  .addWithInfo('Disabled Button', () => (
    <Button disabled>
      Disabled Button
    </Button>
  ))
  .addWithInfo('Disabled Link Button', () => (
    <Button primary disabled as="a" href="#">
      Disabled Link Button
    </Button>
  ))
  .addWithInfo('Secondary Borderless Button', () => (
    <Button borderless secondary>
      Secondary Borderless Button
    </Button>
  ))
  .addWithInfo('Secondary Button', () => (
    <Button secondary>
      Secondary Button
    </Button>
  ))
  .addWithInfo('Secondary Link Button', () => (
    <Button secondary as="a" href="#">
      Secondary Link Button
    </Button>
  ));
