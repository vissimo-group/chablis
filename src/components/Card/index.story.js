import { storiesOf } from '@storybook/react';

import SetComponent from './SetComponent';
import RandomInt from './RandomInt';

const baseURL = '//res.cloudinary.com/evino/image';
const imageLogo = `${baseURL}/upload/v1615413100/web/assets/Cune.svg`;
const imageCountry = `${baseURL}/upload/dpr_2.0,w_32,f_auto,q_auto:best/v1/web/assets/Espanha`;
const bgImage = `${baseURL}/upload/v1615413100/web/assets/CuneBG.jpg`;

storiesOf('Card', module)
  .addWithInfo('Default', () => SetComponent({
    accessibilityText: 'Card Default',
    bgImage,
    imageLogo,
    imageCountry,
    width: '337px',
    height: '',
  }))
  .addWithInfo('Without flag', () => SetComponent({
    accessibilityText: 'Card without BG image',
    bgImage,
    imageLogo,
    imageCountry: false,
    width: '337px',
    height: '',
  }))
  .addWithInfo('Without image background', () => SetComponent({
    accessibilityText: 'Card without BG image',
    bgImage: false,
    imageLogo,
    imageCountry,
    width: '337px',
    height: '',
  }))
  .addWithInfo('Fluid', () => SetComponent({
    accessibilityText: 'Card without BG image',
    bgImage,
    imageLogo,
    imageCountry,
    width: '',
    height: '',
  }))
  .addWithInfo('Custom height', () => SetComponent({
    accessibilityText: 'Card without BG image',
    bgImage,
    imageLogo,
    imageCountry,
    width: '337px',
    height: `${RandomInt(175, 500)}px`,
  }))
  .addWithInfo('Empty card', () => SetComponent({
    accessibilityText: false,
    bgImage: false,
    imageLogo: false,
    imageCountry: false,
    width: '337px',
    height: '',
  }));
