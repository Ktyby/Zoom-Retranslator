import React from 'react';
import { observer, inject } from 'mobx-react';

import VideoForm from './VideoForm';

export default inject('meetStore', 'callStore')(observer(({ meetStore, callStore }) => (
  <VideoForm
    turnOnCall={() => callStore.turnOnCall()}
    meetConfig={() => meetStore.meetConfig()} 
  />
)));