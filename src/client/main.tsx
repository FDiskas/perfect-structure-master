import * as React from 'react';
import ReactDom from 'react-dom';

import { App } from '~containers/app/App';
import './main.scss';

ReactDom.render(<App />, document.getElementById('app'));

if (module.hot) {
  module.hot.accept();
}
