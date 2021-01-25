import React from 'react';
import { observer, inject } from 'mobx-react';

import App from './App';

export default inject('callStore')(observer(({ callStore }) => (
  <App call={callStore.call} />
)));
