import React from 'react';
import { mount } from 'enzyme';
import renderer from 'react-test-renderer';
import TitleSmall from './';

const text = 'This is a SubTitle';
const element = <TitleSmall>{text}</TitleSmall>;
const component = mount(element);

describe('TitleLarge', () => {
  it('should render a subtitle', () => {
    const tree = renderer
      .create(element)
      .toJSON();

    expect(tree).toMatchSnapshot();
  });

  it('should display passed text', () => {
    expect(component.prop('children')).toBe(text);
  });
});
