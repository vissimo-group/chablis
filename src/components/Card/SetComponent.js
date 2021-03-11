import React from 'react';
import Card from '.';

const SetComponent = (bgImage, imageLogo, imageCountry, width, accessibilityText) => (
  <Card backgroundImage={bgImage} width={width}>
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

export default SetComponent;
