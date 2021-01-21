import { observable, configure, action, makeAutoObservable } from 'mobx';

configure({ isolateGlobalState: true });

class MeetStore {
  constructor() {
    makeAutoObservable(this);
  }

  @observable state = {
    meetingNumber: '',
    userName: '',
    userEmail: '',
    passWord: '',
    role: ''
  }

  @action meetConfig = (meetData) => {
    this.state.meetingNumber = meetData.meetingNumber;
    this.state.userName = meetData.userName;
    this.state.passWord = meetData.password;
    this.state.role = meetData.role;
    
    return this.state;
  }
}

const meetStore = new MeetStore();

export default meetStore;

// const state = observable({
//   meetingNumber: '',
//   userName: '',
//   userEmail: '',
//   passWord: '',
//   role: ''
// })

// const setMeetConfig = action((meetConfig) => {
//   state.meetingNumber = meetConfig.meetingNumber;
//   state.userName = meetConfig.userName;
//   state.passWord = meetConfig.password;
//   state.role = meetConfig.role;

//   console.log(state);
// });

// export default { setMeetConfig };
