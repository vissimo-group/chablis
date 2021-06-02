import { storiesOf } from '@storybook/react';

import SetComponent from './SetComponent';

const baseURL = '//res.cloudinary.com/evino/image';
const imageLogo = `${baseURL}/upload/v1615413100/web/assets/Cune.svg`;
const imageCountry = `${baseURL}/upload/dpr_2.0,w_32,f_auto,q_auto:best/v1/web/assets/Espanha`;
const imageCard = `${baseURL}/upload/v1615413100/web/assets/CuneBG.jpg`;

storiesOf('Card', module)
  .addWithInfo('Default', () => SetComponent({
    accessibilityText: 'Card Default',
    imageCard,
    imageLogo,
    imageCountry,
    width: '337px',
    height: '',
  }))
  .addWithInfo('Without flag', () => SetComponent({
    accessibilityText: 'Card without BG image',
    imageCard,
    imageLogo,
    imageCountry: false,
    width: '337px',
    height: '',
  }))
  .addWithInfo('Without card image', () => SetComponent({
    accessibilityText: 'Card without BG image',
    imageCard: false,
    imageLogo,
    imageCountry,
    width: '337px',
    height: '',
  }))
  .addWithInfo('Fluid', () => SetComponent({
    accessibilityText: 'Card without BG image',
    imageCard,
    imageLogo,
    imageCountry,
    width: '',
    height: '',
  }))
  .addWithInfo('Empty card', () => SetComponent({
    accessibilityText: false,
    imageCard: false,
    imageLogo: false,
    imageCountry: false,
    width: '337px',
    height: '',
  }));
