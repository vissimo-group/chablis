/* eslint-disable */
import React from 'react';
import { storiesOf } from '@storybook/react';
import Tooltip from './';
import { colors, sizes } from '../../styles/variables';

storiesOf('Tooltip', module)
  .addWithInfo('Default Tooltip', () => (
    <Tooltip
      text="This is a cool tooltip"
      alignX="right"
    />
  ))
  .addWithInfo('Big Tooltip', () => (
    <Tooltip
      text="This is a really big tooltip with an awesome and big text"
      alignX="right"
    />
  ))
  .addWithInfo('Success Tooltip', () => (
    <Tooltip
      text="This is a cool tooltip"
      type="success"
    />
  ))
  .addWithInfo('Danger Tooltip', () => (
    <Tooltip
      text="This is a cool tooltip"
      type="danger"
    />
  ))
  .addWithInfo('Spaced Tooltip', () => (
    <Tooltip
      text="This is a cool tooltip"
      spaced
    />
  ))
  .addWithInfo('Custom aligned Tooltip', () => (
    <div style={{marginTop: '10px'}}>
      <Tooltip
        text="This is a cool tooltip"
        alignX="left"
        alignY="top"
      />
    </div>
  ))

  // <div
  //     style={{
  //       background: colors.LIGHT_GREY,
  //       color: colors.DARKEST_GREY,
  //       display: 'inline-block',
  //       padding: sizes.DEFAULT,
  //       textAlign: 'center',
  //       marginTop: sizes.LARGE,
  //       marginLeft: sizes.LARGE,
  //       position: 'relative',
  //       borderRadius: sizes.RADIUS
  //     }}
  //   >