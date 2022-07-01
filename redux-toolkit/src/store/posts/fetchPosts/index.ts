import { createAction } from '@reduxjs/toolkit';
import { SagaIterator } from 'redux-saga';
import { apply, put, takeLatest } from 'redux-saga/effects';

import { api } from '../../../api';
import { actions as actionsError } from '../../error/error';
import { actions as actionsPosts } from '..';

export const fetchPostsAsync = createAction('fetchPostsAsync');

function* fetchPostsWorker(): SagaIterator<void> {
  try {
    const posts = yield apply(api, api.posts.get, []);
    yield put(actionsPosts.fillPosts({ posts }));
  } catch (error: any) {
    yield put(
      actionsError.returnErrors({
        msg: { msg: 'Post loading false' },
        status: 'Error loading',
        id: null,
      })
    );
  }
}

export function* watchFetchPosts(): SagaIterator<void> {
  yield takeLatest(fetchPostsAsync.type, fetchPostsWorker);
}
