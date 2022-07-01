import { SagaIterator } from 'redux-saga';
import { all, call } from 'redux-saga/effects';

import { watchCount } from './count/watchers';
import { watchPosts } from './posts/watchers';

export function* rootSaga(): SagaIterator<void> {
  yield all([call(watchCount), call(watchPosts)]);
}
