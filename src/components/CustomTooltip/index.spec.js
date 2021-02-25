import React from 'react';
import renderer from 'react-test-renderer';
import CustomTooltip from '.';

const ImageURL = 'https://evino-res.cloudinary.com/image/upload/v1614018200/web/assets/escala.png';

const customTooltipProps = {
  align: 'bottom-start',
  className: 'custom-tooltip',
  show: true,
  type: 'default',
};

const element = (
  <CustomTooltip {...customTooltipProps}>
    <img src={ImageURL} alt="Escala" />
    <p>
      Classificação de acordo com a legislação brasileira em relação ao
      conteúdo de açúcar, expresso em gramas por litro de glicose (g/L).
    </p>
  </CustomTooltip>
);

describe('CustomTooltip', () => {
  it('Should render a tooltip', () => {
    const tree = renderer.create(element).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
