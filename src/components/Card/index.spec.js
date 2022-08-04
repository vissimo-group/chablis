import renderer from 'react-test-renderer';
import { mount } from 'enzyme';

import SetComponent from './SetComponent';

describe('Card', () => {

  it('Should render the default card', () => {
    const element = SetComponent({
      accessibilityText: 'Card Default',
      imageCard: 'bg-image',
      imageLogo: 'image-logo',
      imageCountry: 'image-country',
      width: '337px',
      height: '',
      darkenBackground: true,
    });

    const tree = renderer.create(element).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('Should render the card without flag', () => {
    const element = SetComponent({
      accessibilityText: 'Card Default',
      imageCard: 'bg-image',
      imageLogo: 'image-logo',
      imageCountry: '',
      width: '337px',
      height: '',
      darkenBackground: true,
    });

    const component = mount(element);
    expect(component.find('.image-country')).toHaveLength(0);
  });

  it('Should render a fluid component', () => {
    const element = SetComponent({
      accessibilityText: 'Card Default',
      imageCard: 'bg-image',
      imageLogo: 'image-logo',
      imageCountry: 'image-country',
      width: '',
      height: '',
      darkenBackground: true,
    });

    const component = mount(element);
    expect(component.props().width).toEqual('');
  });

  it('Should render an empty card', () => {
    const element = SetComponent({
      accessibilityText: '',
      imageCard: '',
      imageLogo: '',
      imageCountry: '',
      width: '',
      height: '',
      darkenBackground: true,
    });

    const component = mount(element);

    expect(component.props().width).toEqual('');
    expect(component.props().height).toEqual('');

    expect(component.find('.image-country')).toHaveLength(0);
    expect(component.find('.image-logo')).toHaveLength(0);
    expect(component.find('.sr-only')).toHaveLength(0);
  });
});
