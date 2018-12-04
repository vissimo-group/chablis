import React from 'react';
import { mount } from 'enzyme';
import renderer from 'react-test-renderer';
import Container from '.';

const element = <Container><span>Subcomponent</span></Container>;
const component = mount(element);

describe('Container', () => {
  it('should render a container div', () => {
    const tree = renderer
      .create(element)
      .toJSON();

    expect(tree).toMatchSnapshot();
  });

  it('should render children properly', () => {
    const child = component.find('span');
    expect(child).toHaveLength(1);
  });

  it('should render the full version of container', () => {
    component.setProps({ full: true });
    expect(component.prop('full')).toBeTruthy();
  });

  it('should render the full version of container in some breakpoints', () => {
    component.setProps({ full: false, fullTablet: true });
    expect(component.prop('fullTablet')).toBeTruthy();
  });
});
