import React from 'react';
import { mount } from 'enzyme';
import renderer from 'react-test-renderer';
import Tooltip from './';

const text = 'This is a tooltip';
const element = <Tooltip text={text} />;
const component = mount(element);

const getPosition = position => component.instance().getPosition(position);

describe('Tooltip', () => {
  it('should render a tooltip', () => {
    const tree = renderer
      .create(element)
      .toJSON();

    expect(tree).toMatchSnapshot();
  });

  it('should display passed text', () => {
    expect(component.prop('text')).toBe(text);
  });

  it('should return right positions', () => {
    expect(getPosition()).toEqual(['right', 'top']);
    expect(getPosition('top-start')).toEqual(['left', 'bottom']);
    expect(getPosition('top-end')).toEqual(['right', 'bottom']);
    expect(getPosition('bottom-start')).toEqual(['left', 'top']);
    expect(getPosition('bottom-end')).toEqual(['right', 'top']);
  });
});
