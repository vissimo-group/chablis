import React from 'react';
import { storiesOf } from '@storybook/react';
import { colors } from '../../styles/variables';

storiesOf('Colors', module)
  .addWithInfo('All colors used', () => {
    const colorsKeys = Object.keys(colors);

    const boxes = colorsKeys.map((key) => {
      const hex = colors[key];
      const label = `${key} - ${hex}`;
      return (
        <div style={{ width: '150px', margin: '0 16px', textAlign: 'center' }}>
          <div style={{
            width: '150px',
            height: '150px',
            borderRadius: '4px',
            boxShadow: 'rgb(197 193 193) 0 0 1em',
            backgroundColor: hex,
          }}
          />
          <p>
            {label}
          </p>
        </div>
      );
    });

    return <div style={{ display: 'flex', flexWrap: 'wrap' }}>{boxes}</div>;
  });
