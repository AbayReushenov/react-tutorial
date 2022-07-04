import { makeObservable, observable, action } from 'mobx';

export interface IMsg {
  msg: string | any;
}

export interface ErrorState {
  msg: IMsg;
  status: string | null;
  id: string | null;
}

const initialState: ErrorState = {
  msg: { msg: null },
  status: null,
  id: null,
};

export class ErrorStore {
  state = initialState;
  constructor() {
    makeObservable(this, {
      state: observable,
      clearErrors: action('reset error state'),
      returnErrors: action('update error state'),
    });
  }
  clearErrors() {
    this.state = initialState;
  }
  returnErrors(action: ErrorState) {
    this.state = {
      msg: action.msg,
      status: action.status,
      id: action.id,
    };
  }
}

export const error = new ErrorStore();
