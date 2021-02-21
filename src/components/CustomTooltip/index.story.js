import React from 'react';
import { storiesOf } from '@storybook/react';

import CustomTooltip from '.';
import QuestionMark from '../QuestionMark';

const divStyle = {
  marginTop: '30px',
  marginLeft: '100px',
};

const buttonStyle = {
  position: 'relative',
};

const ImageURL = 'https://evino-res.cloudinary.com/image/upload/v1613757080/web/assets/escala.png';

const CustomTooltipWithImage = (
  <CustomTooltip type="default" show align="bottom-start">
    <img src={ImageURL} alt="Escala" />
    <p>
      Classificação de acordo com a legislação brasileira em relação ao
      conteúdo de açúcar, expresso em gramas por litro de glicose (g/L).
    </p>
  </CustomTooltip>
);

storiesOf('Custom Tooltip', module).addWithInfo('Default', () => (
  <div style={divStyle}>
    <button type="button" style={buttonStyle}>
      Click me!
      {CustomTooltipWithImage}
    </button>
  </div>
)).addWithInfo('On QuestionMark component', () => (
  <div style={divStyle}>
    <QuestionMark>
      <span>Saiba mais sobre</span>
      {CustomTooltipWithImage}
    </QuestionMark>
  </div>
));
