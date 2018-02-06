import { configure } from '@storybook/react';

function loadStories() {
  require('../stories/ActionButton.js');
}

configure(loadStories, module);