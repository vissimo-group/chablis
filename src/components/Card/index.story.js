import { storiesOf } from '@storybook/react';
import SetComponent from './SetComponent';

const baseURL = '//res.cloudinary.com/evino/image';
const imageLogo = `${baseURL}/upload/v1615413100/web/assets/Cune.svg`;
const imageCountryURL = `${baseURL}/upload/dpr_2.0,w_32,f_auto,q_auto:best/v1/web/assets/Espanha`;
const ImageBackground = `${baseURL}/upload/v1615413100/web/assets/CuneBG.jpg`;

storiesOf('Card', module)
  .addWithInfo('Default', () => SetComponent(
    ImageBackground,
    imageLogo,
    imageCountryURL,
    '337px',
    'Card Default',
  ))
  .addWithInfo('Without flag', () => SetComponent(
    ImageBackground,
    imageLogo,
    null,
    '337px',
    'Without BG image',
  ))
  .addWithInfo('Without image background', () => SetComponent(
    '',
    imageLogo,
    imageCountryURL,
    '337px',
    'Without BG image',
  ))
  .addWithInfo('Fluid', () => SetComponent(
    ImageBackground,
    imageLogo,
    imageCountryURL,
    '',
    'Card Fluid',
  ))
  .addWithInfo('Empty card', () => SetComponent(
    null,
    null,
    null,
    '337px',
    null,
  ));
