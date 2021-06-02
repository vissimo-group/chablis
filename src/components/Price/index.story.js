import React from 'react';
import { storiesOf } from '@storybook/react';
import Price from '.';

storiesOf('Price', module)
  .addWithInfo('Default', () => (
    <Price>
      R$559
      <small>,90</small>
    </Price>
  ))
  .addWithInfo('With color', () => (
    <Price color="#ce2a36">
      R$559
      <small>,90</small>
    </Price>
  ))
  .addWithInfo('Old Price', () => (
    <Price old>R$859,90</Price>
  ))
  .addWithInfo('Old Price with color', () => (
    <Price old color="#ce2a36">R$859,90</Price>
  ));
