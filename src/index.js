import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from "mobx-react";

import './index.css';
import App from './components/App';
import meetStore from './store/store';

const stores = {
  meetStore
}

ReactDOM.render(
  <Provider { ...stores }>
    <App />
  </Provider>,
  document.getElementById('root')
);
