import React from 'react';
import { mount } from 'enzyme';
import renderer from 'react-test-renderer';
import Tag from '.';

describe('Tag', () => {
  it('should render a Tag', () => {
    const element = <Tag>Button</Tag>;
    const tree = renderer
      .create(element)
      .toJSON();

    expect(tree).toMatchSnapshot();
  });

  it('should render with specific text color', () => {
    const color = '#000';
    const element = <Tag color={color}>Button</Tag>;

    const component = mount(element);
    expect(component.props().color).toEqual(color);
  });

  it('should render with specific background color', () => {
    const backgroundColor = '#ce2a36';
    const element = <Tag backgroundColor={backgroundColor}>Button</Tag>;

    const component = mount(element);
    expect(component.props().backgroundColor).toEqual(backgroundColor);
  });

  it('should render the text uppercase', () => {
    const element = <Tag uppercase>Button</Tag>;
    const component = mount(element);
    expect(component.props().uppercase).toEqual(true);
  });
});
