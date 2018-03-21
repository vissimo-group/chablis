import React from 'react';
import { mount } from 'enzyme';
import renderer from 'react-test-renderer';
import Row from './';

const element = <Row><span>Subcomponent</span></Row>;
const component = mount(element);

describe('Row', () => {
  it('should render a row div', () => {
    const tree = renderer
      .create(element)
      .toJSON();

    expect(tree).toMatchSnapshot();
  });

  it('should render children properly', () => {
    const child = component.find('span');
    expect(child).toHaveLength(1);
  });

  it('should render with default alignment', () => {
    expect(component.prop('align')).toBe('flex-start');
  });

  it('should render with custom aligment', () => {
    component.setProps({ align: 'center' });
    expect(component.prop('align')).toBe('center');
  });
});
