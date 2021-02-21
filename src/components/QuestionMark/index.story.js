import React from 'react';
import { storiesOf } from '@storybook/react';
import QuestionMark from '.';

const divStyle = {
  marginTop: '30px',
  marginLeft: '300px',
};

storiesOf('QuestionMark', module).addWithInfo('Default', () => (
  <div style={divStyle}>
    <QuestionMark />
  </div>
));
