/* eslint-disable */
import React from 'react';
import { storiesOf } from '@storybook/react';
import Tooltip from './';
import { colors, sizes } from '../../styles/variables';

const style = {
  background: colors.standard.light_grey,
  color: colors.standard.darkest_grey,
  display: 'inline-block',
  padding: sizes.DEFAULT,
  textAlign: 'center',
  marginTop: sizes.LARGE,
  marginLeft: sizes.LARGE,
  position: 'relative',
  borderRadius: sizes.RADIUS
};

storiesOf('Tooltip', module)
  .addWithInfo('Default Tooltip', () => (
    <div style={{ marginTop: '15px', marginLeft: '200px' }}>
      <div
        style={style}
      >
        Element
        <Tooltip
          text="This is a cool tooltip"
        />
      </div>
    </div>
  ))
  .addWithInfo('Big Tooltip', () => (
    <div style={{ marginTop: '35px', marginLeft: '200px' }}>
      <div
        style={style}
      >
        Element
        <Tooltip
          text="This is a really big tooltip with an awesome and big text"
        />
      </div>
    </div>
  ))
  .addWithInfo('Success Tooltip', () => (
    <div style={{ marginTop: '15px', marginLeft: '200px' }}>
      <div
        style={style}
      >
        Element
        <Tooltip
          text="This is a cool tooltip"
          type="success"
        />
      </div>
    </div>
  ))
  .addWithInfo('Danger Tooltip', () => (
    <div style={{ marginTop: '15px', marginLeft: '200px' }}>
      <div
        style={style}
      >
        Element
        <Tooltip
          text="This is a cool tooltip"
          type="danger"
        />
      </div>
    </div>
  ))
  .addWithInfo('Spaced Tooltip', () => (
    <div style={{ marginTop: '15px', marginLeft: '140px' }}>
      <div
        style={style}
      >
        Element
        <Tooltip
          text="This is a cool tooltip"
          spaced
        />
      </div>
    </div>
  ))
  .addWithInfo('Custom aligned Tooltip', () => (
    <div
      style={style}
    >
      Element
      <Tooltip
        text="This is a cool tooltip"
        align="bottom-start"
      />
    </div>
  ))
