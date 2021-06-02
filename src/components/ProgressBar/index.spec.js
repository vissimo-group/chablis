import React from 'react';
import { mount } from 'enzyme';
import renderer from 'react-test-renderer';
import ProgressBar from './SetComponent';

const label = 'Teste';
const active = 3;
const element = <ProgressBar label={label} active={active} />;
const component = mount(element);

describe('ProgressBar', () => {
  it('Should render the component', () => {
    const tree = renderer.create(element).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('Should display passed label', () => {
    expect(component.prop('label')).toBe(label);
  });

  it('Should activate specific active tags', () => {
    const tree = renderer.create(element).toJSON();
    expect(tree).toMatchSnapshot();
    expect(component.prop('active')).toBe(3);
  });
});
