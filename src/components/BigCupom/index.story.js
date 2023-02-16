import React from 'react';
import { storiesOf } from '@storybook/react';
import BigCupom from '.';

const cupomDescription = `
    Conheça a Adega de Vinhos Philco PAD8:\
    Capacidade para 8 garrafas, display eletrônico, controle digital de temperatura, 
    iluminação interna em LED, baixo consumo de energia, e prateleiras cromadas, deslizantes e reguláveis. 127V.
`;

const cumpomImage = `https://evino-res.cloudinary.com/image/upload/v1676467815/
teste%20m%C3%AAs%20do%20consumidor/adega.png`;

storiesOf('BigCupom', module)
  .addWithInfo('BigCupom', () => (
    <BigCupom image={cumpomImage} title="Adega Philco" description={cupomDescription} />
  ));
