import { runInAction, makeAutoObservable } from 'mobx';
import { addCountAsync } from './addCountAsync';
import { Error } from './ErrorState';

export class Store {
  count = 0;
  error = Error.initialState;
  constructor() {
    makeAutoObservable(this);
  }
  async addSomeCount(num: number) {
    this.error = Error.pending;
    try {
      const { count } = await addCountAsync({ count: num });
      runInAction(() => {
        this.count = this.count + count;
        this.error = Error.done;
      });
    } catch (error) {
      runInAction(() => {
        this.error = Error.error;
      });
    }
  }
  plus() {
    this.count += 1;
  }
  minus() {
    this.count -= 1;
  }
}
export const storeClass = new Store();
