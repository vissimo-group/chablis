import React from 'react';
import { storiesOf } from '@storybook/react';
import Cupom from '.';

const cupomDescription = `Curabitur velit neque, convallis in nibh at, facilisis dictum elit.
Integer varius dui vel mauris pharetra, sit amet vulputate nunc`;

const cumpomImage = `https://evino-res.cloudinary.com/image/upload/v1676378694/
teste%20m%C3%AAs%20do%20consumidor/categoria-bronze.png`;

storiesOf('Cupom', module)
  .addWithInfo('Cupom', () => (
    <Cupom
      image={cumpomImage}
      title="Jim Beam White Kentucky"
      description={cupomDescription}
      code="JIMBEAM"
      bg="#fff"
      circleColor="#F7F7F7"
    />
  ));
