import { storiesOf } from '@storybook/react';

import SetComponent from './SetComponent';

const baseURL = '//res.cloudinary.com/evino/image';
const imageLogo = `${baseURL}/upload/v1615413100/web/assets/Cune.svg`;
const imageCountry = `${baseURL}/upload/dpr_2.0,w_32,f_auto,q_auto:best/v1/web/assets/Espanha`;
const imageCard = `${baseURL}/upload/v1615413100/web/assets/CuneBG.jpg`;

storiesOf('Card', module)
  .addWithInfo('Default for non producers', () => SetComponent({
    accessibilityText: 'Card Default',
    imageCard: 'https://evino-res.cloudinary.com/image/upload/v1/UX_Design/especial-fim-de-ano-2_.jpg',
    imageLogo: '',
    imageCountry: '',
    width: '337px',
    height: '',
    darkenBackground: false,
  }))
  .addWithInfo('Default for producers', () => SetComponent({
    accessibilityText: 'Card Default',
    imageCard,
    imageLogo,
    imageCountry,
    width: '337px',
    height: '',
    darkenBackground: true,
  }))
  .addWithInfo('Without Darken Background', () => SetComponent({
    accessibilityText: 'Card Default',
    imageCard,
    imageLogo,
    imageCountry,
    width: '337px',
    height: '',
    darkenBackground: false,
  }))
  .addWithInfo('Without flag', () => SetComponent({
    accessibilityText: 'Card without BG image',
    imageCard,
    imageLogo,
    imageCountry: '',
    width: '337px',
    height: '',
    darkenBackground: false,
  }))
  .addWithInfo('Without card image', () => SetComponent({
    accessibilityText: 'Card without BG image',
    imageCard: '',
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
    darkenBackground: true,
  }))
  .addWithInfo('Empty card', () => SetComponent({
    accessibilityText: '',
    imageCard: '',
    imageLogo: '',
    imageCountry: '',
    width: '337px',
    height: '',
    darkenBackground: false,
  }));
