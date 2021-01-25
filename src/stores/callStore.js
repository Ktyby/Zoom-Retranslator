import { observable, action, configure, makeObservable } from 'mobx';

configure({ isolateGlobalState: true });

class CallStore {
  @observable call;

  constructor() {
    makeObservable(this);
    this.call = false;
  }

  @action turnOnCall = (isTrue) => {
    this.call = isTrue;
  }
}

const callStore = new CallStore();

export default callStore;