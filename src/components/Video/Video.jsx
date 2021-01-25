import React, { useEffect } from 'react';
import { ZoomMtg } from '@zoomus/websdk';

import { API_KEYS, LEAVE_URL } from '../../constants';

const Video = (meetStore) => {
  const joinMeeting = (signature, meetStore) => {
    ZoomMtg.init({
      leaveUrl: LEAVE_URL,
      isSupportAV: true,
      success: (success) => {
        ZoomMtg.join({
          meetingNumber: meetStore.meetingNumber,
          userName: meetStore.userName,
          signature: signature,
          apiKey: API_KEYS.apiKey,
          passWord: meetStore.password,
  
          success: (success) => {
            console.log(success);
          },
  
          error: (error) => {
            console.log(error);
          },
        });
      },
    });
  }
  
  useEffect(() => {
    ZoomMtg.setZoomJSLib('https://source.zoom.us/1.7.10/lib', '/av');
    ZoomMtg.preLoadWasm();
    ZoomMtg.prepareJssdk();
  
    ZoomMtg.generateSignature({
      meetingNumber: meetStore.meetingNumber,
      apiKey: API_KEYS.apiKey,
      apiSecret: API_KEYS.apiSecret,
      role: meetStore.role,
      success: (res) => {
        setTimeout(() => {
          joinMeeting(res.result, meetStore);
        }, 1000);
      },
    });
  }, []);
  
  return (
    <div className="video"></div>
  );
};

export default Video;