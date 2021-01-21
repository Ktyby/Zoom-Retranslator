import React, { useEffect } from 'react';
import { ZoomMtg } from '@zoomus/websdk';
import { observer, inject } from 'mobx-react';

import { API_KEYS, LEAVE_URL } from '../../constants';

inject('meetStore');

const Video = observer((props) => {
  console.log(props);

  const meetConfig = {
    apiKey: API_KEYS.apiKey,
    meetingNumber: "1231231",
    userName: "props.state.userName",
    userEmail: "store.state.userEmail",
    password: "props.state.password",
    role: "props.state.role",
  };


  // const joinMeeting = (signature, meetConfig) => {
  //   ZoomMtg.init({
  //     leaveUrl: LEAVE_URL,
  //     isSupportAV: true,
  //     success: (success) => {
  //       ZoomMtg.join({
  //         meetingNumber: meetConfig.meetingNumber,
  //         userName: meetConfig.userName,
  //         signature: signature,
  //         apiKey: meetConfig.apiKey,
  //         passWord: meetConfig.password,
  
  //         success: (success) => {
  //           console.log(success);
  //         },
  
  //         error: (error) => {
  //           console.log(error);
  //         },
  //       });
  //     },
  //   });
  // }
  // useEffect(() => {
  //   ZoomMtg.setZoomJSLib('https://source.zoom.us/1.7.10/lib', '/av');
  //   ZoomMtg.preLoadWasm();
  //   ZoomMtg.prepareJssdk();
  
  //   ZoomMtg.generateSignature({
  //     meetingNumber: meetConfig.meetingNumber,
  //     apiKey: API_KEYS.apiKey,
  //     apiSecret: API_KEYS.apiSecret,
  //     role: meetConfig.role,
  //     success: (res) => {
  //       setTimeout(() => {
  //         joinMeeting(res.result, meetConfig);
  //       }, 1000);
  //     },
  //   });
  // }, []);
  
  return (
    <div className="video"></div>
  );
});

export default Video;