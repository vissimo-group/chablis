import React from 'react';
import { mount } from 'enzyme';
import renderer from 'react-test-renderer';
import Column from '.';

const element = <Column mobile={12}><span>Subcomponent</span></Column>;
const component = mount(element);

describe('Column', () => {
  it('should render a column div', () => {
    const tree = renderer
      .create(element)
      .toJSON();

    expect(tree).toMatchSnapshot();
  });

  it('should render children properly', () => {
    const child = component.find('span');
    expect(child).toHaveLength(1);
  });

  it('should have a mobile prop', () => {
    expect(component.prop('mobile')).toBe(12);
  });

  it('should render with default alignment', () => {
    expect(component.prop('align')).toBe('auto');
  });

  it('should render with custom aligment', () => {
    component.setProps({ align: 'center' });
    expect(component.prop('align')).toBe('center');
  });
});
