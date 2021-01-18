import React, { useEffect } from 'react';
import { ZoomMtg } from '@zoomus/websdk';

const LEAVE_URL = 'https://zoom.us/';

const API_KEYS = {
  apiKey: '3aPDaIfpQwO8yAp4buFL0g',
  apiSecret: 'JNsjzDfh0bfhaYSyTbZAuTIAWtULMZezb34i',
};

const MEET_CONFIG = {
  apiKey: API_KEYS.apiKey,
  meetingNumber: '75098855333',
  userName: 'Example',
  userEmail: 'example@example.com',
  passWord: 'cZ3FJ4',
  role: 0,
};

const App = () => {
  const joinMeeting = (signature, meetConfig) => {
    ZoomMtg.init({
      leaveUrl: LEAVE_URL,
      isSupportAV: true,
      success: (success) => {
        ZoomMtg.join({
          meetingNumber: meetConfig.meetingNumber,
          userName: meetConfig.userName,
          signature: signature,
          apiKey: meetConfig.apiKey,
          passWord: meetConfig.passWord,

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
      meetingNumber: MEET_CONFIG.meetingNumber,
      apiKey: API_KEYS.apiKey,
      apiSecret: API_KEYS.apiSecret,
      role: MEET_CONFIG.role,
      success: (res) => {
        setTimeout(() => {
          joinMeeting(res.result, MEET_CONFIG);
        }, 1000);
      },
    });
  }, []);

  return <div className="App">Zoom Testing</div>;
}

export default App;