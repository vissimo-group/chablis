import React from 'react';
import { mount } from 'enzyme';
import renderer from 'react-test-renderer';
import Price from '.';

import { colors } from '../../styles/variables';

describe('Price', () => {
  it('should render a price', () => {
    const element = (
      <Price>
        R$559
        <small>,90</small>
      </Price>
    );

    const tree = renderer.create(element).toJSON();

    expect(tree).toMatchSnapshot();
  });

  it('should render with specific text color', () => {
    const color = colors.DARK_GREY;
    const element = <Price color={color}>R$559</Price>;

    const component = mount(element);
    expect(component.props().color).toEqual(color);
  });

  it('should render old Price', () => {
    const element = <Price old>855,90</Price>;
    const component = mount(element);
    expect(component.props().old).toEqual(true);
  });
});
