import { observable, action } from 'mobx';

export const state = observable({
  count: 0,
  plus: action('dsd', function () {
    state.count -= 1;
  }),
  minus: action(function () {
    state.count += 1;
  }),
});
