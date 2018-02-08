import React from 'react';
import { mount } from 'enzyme';
import Button from './';

const onClick = jest.fn();
const component = mount(<Button onClick={onClick}>Button</Button>);

const click = () => {
  component.find('button').simulate('click');
};

describe('Button', () => {
  it('Should render a button', () => {
    expect(component.find('button')).toBeTruthy();
  });

  it('Should allow client`s click', () => {
    click();
    expect(onClick).toHaveBeenCalledTimes(1);
  });

  it('Should not allow client`s click', () => {
    component.setProps({ disabled: true });
    click();
    expect(onClick).toHaveBeenCalledTimes(1);
  });
});
