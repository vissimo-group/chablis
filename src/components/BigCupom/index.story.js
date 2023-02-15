import React from 'react';
import { storiesOf } from '@storybook/react';
import BigCupom from '.';

const cupomDescription = `
    Conheça a Adega de Vinhos Philco PAD8:\
    Capacidade para 8 garrafas, display eletrônico, controle digital de temperatura, 
    iluminação interna em LED, baixo consumo de energia, e prateleiras cromadas, deslizantes e reguláveis. 127V.
`;

const cumpomImage = `https://res.cloudinary.com/evino/image/upload/q_auto:good,
fl_progressive:steep,f_auto,dpr_2.0,h_280/v1/products/1685630-standing-front.png`;

storiesOf('BigCupom', module)
  .addWithInfo('BigCupom', () => (
    <BigCupom image={cumpomImage} title="Adega Philco" description={cupomDescription} />
  ));
