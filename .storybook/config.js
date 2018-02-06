// import React from 'react';
import { configure, setAddon, addDecorator } from '@storybook/react';
import infoAddon from '@storybook/addon-info';

setAddon(infoAddon);
// addDecorator(story => <Theme story={story} />);

function loadStories() {
  const req = require.context('../src/components', true, /\.story\.js$/);
  req.keys().forEach(filename => req(filename));
}

configure(loadStories, module);