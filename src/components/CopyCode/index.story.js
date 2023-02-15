import React from 'react';
import { storiesOf } from '@storybook/react';
import CopyCode from '.';

storiesOf('CopyCode', module)
  .addWithInfo('Copy Code', () => (
    <CopyCode code="JIMBEAM" />
  ));
