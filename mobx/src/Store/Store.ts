import { makeObservable, observable, computed, action } from 'mobx';

export class Store {
  count = 0;
  constructor() {
    makeObservable(this, {
      count: observable,
      isNegative: computed,
      plus: action,
      minus: action,
      addSomeCount: action('change count to num'),
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
  addSomeCount(num: number) {
   this.count += num;
  }
}
export const storeClass = new Store();
