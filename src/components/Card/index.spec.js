import renderer from 'react-test-renderer';
import { mount } from 'enzyme';
import SetComponent from './SetComponent';

describe('Card', () => {
  it('Should render the default card', () => {
    const element = SetComponent('bg-image', '337px', true, 'Default card');
    const tree = renderer.create(element).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('Should render the card without flag', () => {
    const element = SetComponent('bg-image', '337px', false, 'Card without flag');
    const component = mount(element);
    expect(component.find('.image-country')).toHaveLength(0);
  });

  it('Should render the component without background image', () => {
    const element = SetComponent('', '337px', true, 'Card without background image');
    const component = mount(element);
    expect(component.props().backgroundImage).toEqual('');
  });

  it('Should render a fluid component', () => {
    const element = SetComponent('', '', true, 'Card fluid');
    const component = mount(element);
    expect(component.props().width).toEqual('');
  });
});
