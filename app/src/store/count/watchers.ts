import { SagaIterator } from 'redux-saga';
import { all, call } from 'redux-saga/effects';
import { watchSomeCount } from './addCountAsync';

export function* watchCount(): SagaIterator<void> {
  yield all([call(watchSomeCount)]);
}
