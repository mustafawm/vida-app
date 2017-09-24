import React from 'react';
import { render } from 'react-dom';

import App from './App';

const renderApp = () => {
  render(<App />, document.getElementById('app'));
};

renderApp(); // initial render

// HMR -- when App changes, rerender the whole thing
if (module.hot) {
  module.hot.accept(App, () => {
    renderApp();
  });
}
