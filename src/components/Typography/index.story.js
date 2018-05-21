/* eslint-disable */
import React from 'react';
import { storiesOf } from '@storybook/react';
import {
  BodyLarge,
  BodyMedium,
  BodySmall,
  HeadingLarge,
  HeadingSmall,
  TitleLarge,
  TitleMedium,
} from './';

const title = "The quick brown fox jumps over the lazy dog."

const text = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris ornare nibh nec neque mollis porttitor.
    Maecenas luctus orci vel sapien auctor dignissim. Maecenas rhoncus ac metus ac tristique. Donec sed pellentesque libero, at cursus enim.
    Vivamus pulvinar velit tellus, ac elementum felis malesuada eget. Vestibulum ac nibh massa. Sed laoreet ullamcorper tellus, ac tempus libero auctor eu.
    Donec vel nunc elementum, elementum ligula nec, commodo libero. Integer convallis consequat ligula id consequat. Vestibulum ante ipsum primis in faucibus
    orci luctus et ultrices posuere cubilia Curae; Vestibulum elit ipsum, posuere in velit nec, iaculis varius augue. Vestibulum sed tortor ac enim suscipit maximus.
    Pellentesque varius sapien dui, in venenatis magna tempor nec. Nullam egestas non tortor ut viverra. Nullam maximus elementum massa sit amet molestie.
    Nam efficitur magna ut ante imperdiet fringilla.`;

storiesOf('Typography', module)
  .addWithInfo('Body Large', () => (
    <div>
      <BodyLarge>{text}</BodyLarge>
      <BodyLarge>{text}</BodyLarge>
    </div>
  ))
  .addWithInfo('Body Medium', () => (
    <div>
      <BodyMedium>{text}</BodyMedium>
      <BodyMedium>{text}</BodyMedium>
    </div>
  ))
  .addWithInfo('Body Small', () => (
    <div>
      <BodySmall>{text}</BodySmall>
    </div>
  ))
  .addWithInfo('Heading Large', () => (
    <div>
      <HeadingLarge>{title}</HeadingLarge>
      <BodyLarge>{text}</BodyLarge>
    </div>
  ))
  .addWithInfo('Heading Small', () => (
    <div>
      <HeadingSmall>{title}</HeadingSmall>
      <BodyLarge>{text}</BodyLarge>
    </div>
  ))
  .addWithInfo('Title Large', () => (
    <div>
      <TitleLarge>{title}</TitleLarge>
      <BodyLarge>{text}</BodyLarge>
    </div>
  ))
  .addWithInfo('Title Medium', () => (
    <div>
      <TitleMedium>{title}</TitleMedium>
      <BodyLarge>{text}</BodyLarge>
    </div>
  ))
BodySmall