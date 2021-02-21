import React from 'react';
import { mount } from 'enzyme';
import renderer from 'react-test-renderer';
import Tooltip from '.';

import { GetPosition } from '../../Utils';

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

  it('Should return right positions', () => {
    expect(GetPosition()).toEqual(['right', 'top']);
    expect(GetPosition('top-start')).toEqual(['left', 'bottom']);
    expect(GetPosition('top-end')).toEqual(['right', 'bottom']);
    expect(GetPosition('bottom-start')).toEqual(['left', 'top']);
    expect(GetPosition('bottom-end')).toEqual(['right', 'top']);
  });
});
