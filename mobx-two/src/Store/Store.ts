import { makeObservable, observable, computed, action } from 'mobx';

export class Store {
  count = this.countDefault;
  constructor() {
    makeObservable(this, {
      count: observable,
      isNegative: computed,
      changeCount: action('change count to num'),
    });
  }
  get isNegative() {
    return this.count < 0 ? 'Yes' : 'No';
  }

  changeCount(num: number) {
    if (num >= 8 && num <30) {
        this.count = num;
    } else {
        this.count = this.countDefault
    }

  }

  get countDefault(){
    return 25
  }
}

export const store = new Store();
