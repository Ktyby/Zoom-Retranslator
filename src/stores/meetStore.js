import { observable, action, configure, makeObservable } from 'mobx';

configure({ isolateGlobalState: true });

class MeetStore {
  constructor() {
    makeObservable(this);
  }

  @observable state = {
    meetingNumber: '',
    userName: '',
    userEmail: 'example@example.com',
    passWord: '',
    role: ''
  }
  
  @action meetConfig = (meetData) => {
    this.state.meetingNumber = meetData.meetingNumber;
    this.state.userName = meetData.userName;
    this.state.passWord = meetData.password;
    this.state.role = meetData.role;
  }
}

const meetStore = new MeetStore();

export default meetStore;
