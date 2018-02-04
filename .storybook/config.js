import { configure } from '@storybook/react';

function loadStories() {
  require('../stories/buttons.js');
}

configure(loadStories, module);