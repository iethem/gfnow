/**
 * app.js
 *
 * This is the entry file for the application, only setup and boilerplate
 * code.
 */

// Import all the third party stuff
import React from 'react';
import ReactDOM from 'react-dom';
import { Router } from 'react-router-dom';
import history from 'utils/history';

// Import root app
import App from 'containers/App';
import 'theme/styles.scss';

const MOUNT_NODE = document.getElementById('app');

const render = () => {
  ReactDOM.render(
    <Router history={history}>
      <App />
    </Router>,
    MOUNT_NODE,
  );
};

if (module.hot) {
  module.hot.accept(['containers/App'], () => {
    ReactDOM.unmountComponentAtNode(MOUNT_NODE);
    render();
  });
}

render();

// Install ServiceWorker and AppCache in the end since
// it's not most important operation and if main code fails,
// we do not want it installed
if (process.env.NODE_ENV === 'production') {
  require('offline-plugin/runtime').install(); // eslint-disable-line global-require
}
