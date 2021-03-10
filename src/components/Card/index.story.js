import { storiesOf } from '@storybook/react';
import SetComponent from './SetComponent';

const ImageBackground = '//evino-res.cloudinary.com/image/upload/v1615413100/web/assets/CuneBG.jpg';

storiesOf('Card', module)
  .addWithInfo('Default', () => SetComponent(ImageBackground, '337px', true, 'Card Default'))
  .addWithInfo('Without flag', () => SetComponent(ImageBackground, '337px', false, 'Without BG image'))
  .addWithInfo('Without image background', () => SetComponent('', '337px', true, 'Without BG image'))
  .addWithInfo('Fluid', () => SetComponent(ImageBackground, '', true, 'Card Fluid'));
