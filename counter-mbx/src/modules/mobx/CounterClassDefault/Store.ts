import { makeObservable, observable, computed, action } from 'mobx';

class Store {
  count = 0;

  constructor() {
    makeObservable(this, {
      count: observable,
      isNegative: computed,
      plus: action,
      minus: action
    });
  }

  get isNegative() {
    return this.count < 0 ? 'Yes' : 'No';
  }

  plus() {
    this.count += 1;
  }

  minus() {
    this.count -= 1;
  }
}


//
export const storeClass = new Store();
