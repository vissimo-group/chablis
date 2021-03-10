import React from 'react';
import Card from '.';

const baseURL = '//res.cloudinary.com/evino/image';
const imageLogo = `${baseURL}/upload/v1615413100/web/assets/Cune.svg`;
const imageCountryURL = `${baseURL}/upload/dpr_2.0,w_32,f_auto,q_auto:best/v1/web/assets/Espanha`;

const SetComponent = (bgImage, width, flag, text) => (
  <Card backgroundImage={bgImage} width={width}>
    {flag && (
      <img
        className="image-country"
        alt="Country"
        src={imageCountryURL}
      />
    )}
    <img className="image-logo" alt="Logo" src={imageLogo} />
    <span className="sr-only">{text}</span>
  </Card>
);

export default SetComponent;
