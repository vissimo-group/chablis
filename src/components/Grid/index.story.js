/* eslint-disable */
import React from 'react';
import { storiesOf } from '@storybook/react';
import { colors, sizes } from '../../styles/variables';
import { Column, Row, Container } from './';

const style = {
  width: sizes.FULL,
  background: colors.primary.base,
  color: colors.WHITE,
  padding: `${sizes.DEFAULT} 0`,
  textAlign: 'center',
  borderRadius: sizes.RADIUS,
};

const containerStyle = {
  background: colors.LIGHT_GREY,
  padding: `${sizes.DEFAULT} 0`,
};

const legendStyle = {
  display: 'block',
  width: sizes.FULL,
  textAlign: 'center',
  position: 'fixed',
  bottom: sizes.DEFAULT,
};

const legendBlockStyle = {
  display: 'inline-block',
  width: sizes.DEFAULT,
  height: sizes.DEFAULT,
  background: colors.primary.base,
  marginRight: sizes.HALF,
};

storiesOf('Grid', module)
  .addWithInfo('Default Container', () => (
    <div>
      <Container>
        <div style={style}>Default Container</div>
      </Container>
      <div style={legendStyle}>
        <div style={legendBlockStyle}></div>
          Usable area
      </div>
    </div>
  ))
  .addWithInfo('Full Container', () => (
    <div>
      <Container full>
        <div style={style}>Full Container</div>
      </Container>
      <div style={legendStyle}>
        <div style={legendBlockStyle}></div>
        Usable area
      </div>
    </div>
  ))
  .addWithInfo('Default Row', () => (
    <div>
      <Container>
        <div style={containerStyle}>
          <Row>
            <div style={style}>Default Row</div>
          </Row>
        </div>
      </Container>
      <div style={legendStyle}>
        <div style={legendBlockStyle}></div>
        Usable area
      </div>
    </div>
  ))
  .addWithInfo('Responsive Columns', () => (
    <div>
      <Container>
        <div style={containerStyle}>
          <Row>
            <Column mobile={12} tablet={6} desktop={3}>
              <div style={style}>Column 1</div>
            </Column>
            <Column mobile={12} tablet={6} desktop={3}>
              <div style={style}>Column 2</div>
            </Column>
            <Column mobile={12} tablet={6} desktop={3}>
              <div style={style}>Column 3</div>
            </Column>
            <Column mobile={12} tablet={6} desktop={3}>
              <div style={style}>Column 4</div>
            </Column>
          </Row>
        </div>
      </Container>
      <div style={legendStyle}>
        <div style={legendBlockStyle}></div>
        Usable area
      </div>
    </div>
  ))
  .addWithInfo('Vertical aligned Columns', () => (
    <div>
      <Container>
        <div style={{
          ...containerStyle,
          height: '200px'
        }}>
          <Row styles={'height: 100%'} align="center">
            <Column mobile={4}>
              <div style={style}>Column 1</div>
            </Column>
            <Column mobile={4}>
              <div style={style}>Column 2</div>
            </Column>
            <Column mobile={4}>
              <div style={style}>Column 3</div>
            </Column>
          </Row>
        </div>
      </Container>
      <div style={legendStyle}>
        <div style={legendBlockStyle}></div>
        Usable area
      </div>
    </div>
  ))
  .addWithInfo('Self vertical aligned Columns', () => (
    <div>
      <Container>
        <div style={{
          ...containerStyle,
          height: '200px'
        }}>
          <Row styles={'height: 100%'}>
            <Column mobile={4} align="flex-start">
              <div style={style}>Column 1</div>
            </Column>
            <Column mobile={4} align="center">
              <div style={style}>Column 2</div>
            </Column>
            <Column mobile={4} align="flex-end">
              <div style={style}>Column 3</div>
            </Column>
          </Row>
        </div>
      </Container>
      <div style={legendStyle}>
        <div style={legendBlockStyle}></div>
        Usable area
      </div>
    </div>
  ))
  .addWithInfo('Spaced Columns', () => (
    <div>
      <Container>
        <div style={{
          ...containerStyle,
          height: '200px'
        }}>
          <Row styles={'height: 100%'} align="center">
            <Column mobile={4} offsetMobile={4}>
              <div style={style}>Spaced column</div>
            </Column>
            <Column mobile={4}>
              <div style={style}>Column</div>
            </Column>
          </Row>
        </div>
      </Container>
      <div style={legendStyle}>
        <div style={legendBlockStyle}></div>
        Usable area
      </div>
    </div>
  ))
