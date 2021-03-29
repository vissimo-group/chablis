import renderer from 'react-test-renderer';
import { mount } from 'enzyme';

import SetComponent from './SetComponent';
import RandomInt from './RandomInt';

describe('Card', () => {
  it('Should render the default card', () => {
    const element = SetComponent({
      accessibilityText: 'Card Default',
      bgImage: 'bg-image',
      imageLogo: 'image-logo',
      imageCountry: 'image-country',
      width: '337px',
      height: '',
    });

    const tree = renderer.create(element).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('Should render the card without flag', () => {
    const element = SetComponent({
      accessibilityText: 'Card Default',
      bgImage: 'bg-image',
      imageLogo: 'image-logo',
      imageCountry: false,
      width: '337px',
      height: '',
    });

    const component = mount(element);
    expect(component.find('.image-country')).toHaveLength(0);
  });

  it('Should render the component without background image', () => {
    const element = SetComponent({
      accessibilityText: 'Card Default',
      bgImage: false,
      imageLogo: 'image-logo',
      imageCountry: 'image-country',
      width: '337px',
      height: '',
    });

    const component = mount(element);
    expect(component.props().bgimage).toEqual(false);
  });

  it('Should render a fluid component', () => {
    const element = SetComponent({
      accessibilityText: 'Card Default',
      bgImage: 'bg-image',
      imageLogo: 'image-logo',
      imageCountry: 'image-country',
      width: '',
      height: '',
    });

    const component = mount(element);
    expect(component.props().width).toEqual('');
  });

  it('Should render a card with custom height', () => {
    const customHeight = `${RandomInt(200, 500)}px`;

    const element = SetComponent({
      accessibilityText: 'Card Default',
      bgImage: 'bg-image',
      imageLogo: 'image-logo',
      imageCountry: 'image-country',
      width: '',
      height: customHeight,
    });

    const component = mount(element);
    expect(component.props().height).toEqual(customHeight);
  });

  it('Should render an empty card', () => {
    const element = SetComponent({
      accessibilityText: '',
      bgImage: '',
      imageLogo: '',
      imageCountry: '',
      width: '',
      height: '',
    });

    const component = mount(element);

    expect(component.props().bgimage).toEqual('');
    expect(component.props().width).toEqual('');
    expect(component.props().height).toEqual('');

    expect(component.find('.image-country')).toHaveLength(0);
    expect(component.find('.image-logo')).toHaveLength(0);
    expect(component.find('.sr-only')).toHaveLength(0);
  });
});
