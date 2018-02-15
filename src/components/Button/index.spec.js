import React from 'react';
import { mount } from 'enzyme';
import renderer from 'react-test-renderer';
import Button from './';

const onClick = jest.fn();
const element = <Button onClick={onClick}>Button</Button>;
const component = mount(element);

const click = () => {
  component.find('button').simulate('click');
};

describe('Button', () => {
  it('should render a button', () => {
    const tree = renderer
      .create(element)
      .toJSON();

    expect(tree).toMatchSnapshot();
  });

  it('should allow client`s click', () => {
    click();
    expect(onClick).toHaveBeenCalledTimes(1);
  });

  it('should not allow client`s click', () => {
    component.setProps({ disabled: true });
    click();
    expect(onClick).toHaveBeenCalledTimes(1);
  });
});
