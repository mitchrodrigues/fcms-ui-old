import ReactDOM from 'react-dom';
import React from 'react';

import App from 'components/app';
import Config from 'lib/config';


document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(<App />, document.querySelector(Config.appContainer));
});
