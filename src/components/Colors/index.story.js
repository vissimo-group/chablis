import React from 'react';
import { storiesOf } from '@storybook/react';
import { colors } from '../../styles/variables';

storiesOf('Colors', module)
  .addWithInfo('All colors used', () => {
    const colorsObject = Object.fromEntries(Object.entries(colors).map(([k, v]) => [k, v]));
    const colorsKeys = Object.keys(colorsObject);

    const colorTypes = colorsKeys.map((colorType) => {
      const colorTypeObject = colors[colorType];

      const colorBoxes = Object.keys(colors[colorType]).map((colorSubType) => {
        const hex = colorTypeObject[colorSubType];
        return (
          <div style={{ width: '150px', margin: '16px', textAlign: 'center' }}>
            <div style={{
              width: '150px',
              height: '150px',
              borderRadius: '4px',
              boxShadow: 'rgb(197 193 193) 0 0 1em',
              backgroundColor: hex,
            }}
            />
            <p>
              {colorSubType}
              {' '}
-
              {' '}
              {hex}
            </p>
          </div>
        );
      });


      return (
        <div style={{ display: 'flex' }}>
          <h3 style={{ minWidth: 120 }}>{colorType}</h3>
          {colorBoxes}
        </div>
      );
    });

    return <div style={{ display: 'flex', flexDirection: 'column' }}>{colorTypes}</div>;
  });
