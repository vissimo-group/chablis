import React from 'react';
import PropTypes from 'prop-types';
import Card from '.';

const SetComponent = ({
  accessibilityText,
  bgImage,
  imageLogo,
  imageCountry,
  width,
  height,
}) => (
  <Card backgroundImage={bgImage} width={width} height={height}>
    {imageCountry && (
      <img
        className="image-country"
        alt="Country"
        src={imageCountry}
      />
    )}

    {imageLogo && (
      <img
        className="image-logo"
        alt="Logo"
        src={imageLogo}
      />
    )}

    {accessibilityText && (
      <span className="sr-only">
        {accessibilityText}
      </span>
    )}
  </Card>
);

SetComponent.propTypes = {
  accessibilityText: PropTypes.string,
  bgImage: PropTypes.string,
  imageLogo: PropTypes.string,
  imageCountry: PropTypes.string,
  width: PropTypes.string,
  height: PropTypes.string,
};

SetComponent.defaultProps = {
  accessibilityText: '',
  bgImage: '',
  imageLogo: '',
  imageCountry: '',
  width: '',
  height: '',
};

export default SetComponent;
