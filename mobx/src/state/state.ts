import { observable, action } from 'mobx';

export interface State {
  count: number;
  plus: () => void;
  minus: () => void;
  addSomeCount: (num: number) => void;
}
export const state: State = observable({
  count: 0,
  plus: action('increment', () => {
    state.count += 1;
  }),
  minus: action('decrement', () => {
    state.count -= 1;
  }),
  addSomeCount: action('change count to num', (num: number): void => {
    state.count += num;
  }),
});
