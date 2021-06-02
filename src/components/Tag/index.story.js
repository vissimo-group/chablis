import React from 'react';
import { storiesOf } from '@storybook/react';
import Tag from '.';

storiesOf('Tag', module)
  .addWithInfo('Without attibutes', () => (
    <Tag>Tag</Tag>
  ))
  .addWithInfo('With background color', () => (
    <Tag backgroundColor="#63c6ea">Ultimas garrafas!</Tag>
  ))
  .addWithInfo('With uppercase', () => (
    <Tag backgroundColor="#ce2a36" uppercase>33% OFF</Tag>
  ));
