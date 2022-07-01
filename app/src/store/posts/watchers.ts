import { SagaIterator } from 'redux-saga';
import { all, call } from 'redux-saga/effects';
import { watchFetchPosts } from './fetchPosts';

export function* watchPosts(): SagaIterator<void> {
  yield all([call(watchFetchPosts)]);
}
