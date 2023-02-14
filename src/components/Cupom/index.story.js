import React from 'react';
import { storiesOf } from '@storybook/react';
import Cupom from '.';

const cupomDescription = `Curabitur velit neque, convallis in nibh at, facilisis dictum elit.
Integer varius dui vel mauris pharetra, sit amet vulputate nunc`;

const cumpomImage = `https://res.cloudinary.com/evino/image/upload/q_auto:good,
fl_progressive:steep,f_auto,dpr_2.0,h_280/v1/products/1685630-standing-front.png`;

storiesOf('CopyCode', module)
  .addWithInfo('Cupom', () => (
    <Cupom image={cumpomImage} title="Jim Beam White Kentucky " description={cupomDescription} code="JIMBEAM" />
  ));
