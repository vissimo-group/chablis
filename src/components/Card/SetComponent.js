import React from 'react';
import PropTypes from 'prop-types';
import Card from '.';

const SetComponent = ({
  accessibilityText,
  imageCard,
  imageLogo,
  imageCountry,
  width,
  height,
  darkenBackground,
}) => (
  <Card width={width} height={height} darkenBackground={darkenBackground}>
    {imageCard && (
      <img className="image-card" alt="Card" src={imageCard} />
    )}

    {imageCountry && (
      <img className="image-country" alt="Country" src={imageCountry} />
    )}

    {imageLogo && (
      <img className="image-logo" alt="Logo" src={imageLogo} />
    )}

    {accessibilityText && <span className="sr-only">{accessibilityText}</span>}
  </Card>
);

SetComponent.propTypes = {
  accessibilityText: PropTypes.string,
  imageLogo: PropTypes.string,
  imageCard: PropTypes.string,
  imageCountry: PropTypes.string,
  width: PropTypes.string,
  height: PropTypes.string,
  darkenBackground: PropTypes.bool,
};

SetComponent.defaultProps = {
  accessibilityText: '',
  darkenBackground: false,
  imageLogo: '',
  imageCard: '',
  imageCountry: '',
  width: '',
  height: '',
};

export default SetComponent;
