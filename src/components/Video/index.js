import React from 'react';
import { observer, inject } from 'mobx-react';

import Video from './Video';

export default inject('meetStore')(observer(({ meetStore }) => (
  <Video meetStore={meetStore} />
)));