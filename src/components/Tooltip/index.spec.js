import React from 'react';
import { mount } from 'enzyme';
import renderer from 'react-test-renderer';
import Tooltip from '.';

const text = 'This is a tooltip';
const element = <Tooltip text={text} />;
const component = mount(element);

describe('Tooltip', () => {
  it('Should render a tooltip', () => {
    const tree = renderer.create(element).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('Should display passed text', () => {
    expect(component.prop('text')).toBe(text);
  });
});
