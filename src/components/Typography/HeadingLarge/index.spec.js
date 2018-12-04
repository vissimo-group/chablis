import React from 'react';
import { mount } from 'enzyme';
import renderer from 'react-test-renderer';
import HeadingLarge from '.';

const text = 'This is a title';
const element = <HeadingLarge>{text}</HeadingLarge>;
const component = mount(element);

describe('HeadingLarge', () => {
  it('should render a title', () => {
    const tree = renderer
      .create(element)
      .toJSON();

    expect(tree).toMatchSnapshot();
  });

  it('should display passed text', () => {
    expect(component.prop('children')).toBe(text);
  });
});
