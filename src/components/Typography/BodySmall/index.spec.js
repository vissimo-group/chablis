import React from 'react';
import { mount } from 'enzyme';
import renderer from 'react-test-renderer';
import BodySmall from './';

const text = 'This is a text';
const element = <BodySmall>{text}</BodySmall>;
const component = mount(element);

describe('BodyLarge', () => {
  it('should render a text', () => {
    const tree = renderer
      .create(element)
      .toJSON();

    expect(tree).toMatchSnapshot();
  });

  it('should display passed text', () => {
    expect(component.prop('children')).toBe(text);
  });
});
