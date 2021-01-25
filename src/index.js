import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from "mobx-react";

import './index.css';
import AppContainer from './components/App';

import meetStore from './stores/meetStore';
import callStore from './stores/callStore';

const stores = {
  meetStore,
  callStore
}

ReactDOM.render(
  <Provider {...stores}>
    <AppContainer />
  </Provider>,
  document.getElementById('root')
);
